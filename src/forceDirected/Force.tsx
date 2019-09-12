/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import ForceDirectedChart from './ForceDirectedChart';
import Action from './Action';
import RightPanel from './RightPanel';
import TileList from './Tile/TileList';
import BottomPanel from './BottomPanel';
import FormBuilder from './FormBuilder';
import { ConfigState } from './forceDirected';
import Valorisation from './Valorisation';

const Root = styled.main`
  display: grid;
  position: relative;
  height: 100%;
  grid-area: content;
  grid-template-areas:
    'header rightPanel'
    'content rightPanel'
    'bottomPanel rightPanel';
  grid-template-columns: 1fr auto;
  grid-template-rows: 5rem auto 1fr;
`;
const Navigation = styled.article`
  flex: 1;
`;

const Column = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;
`;

const Row = styled.section`
  display: flex;
  margin-top: 2rem;
`;

const Header = styled.header`
  grid-area: header;
`;

const Content = styled.div`
  grid-area: content;
`;

function Force({ match }) {
  interface Datas {
    name: string;
    value: number;
    link: number;
    entity: string;
    children: Datas[];
    id: string;
    navigation: any;
  }
  const initConfigState = {
    series: [],
    context: {},
  };
  const prevSelectedNode = useRef<Datas | null>(null);
  const [selectedNode, setSelectedNode] = useState<Datas | null>(null);
  const [actionType, setActionType] = useState<string | null>(null);
  const [showRightPanel, setShowRightPanel] = useState<boolean>(false);
  const [showBottomPanel, setShowBottomPanel] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [datas, setDatas] = useState<any>(null);
  const [selectedEntity, setSelectedEntity] = useState<string>();
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [config, setConfig] = useState<ConfigState>(initConfigState);

  const handleClick = (entityName: string) => {
    setSelectedEntity(entityName);
    setShowBottomPanel(true);
  };

  const handleSelectedNodeInformation = (response: Datas) => {
    prevSelectedNode.current = null;
    setSelectedNode(response);
    setShowRightPanel(true);
  };

  const handleSelectedSubItem = (response: Datas) => {
    if (!prevSelectedNode.current) {
      prevSelectedNode.current = selectedNode;
    } else {
      prevSelectedNode.current = null;
    }
    setSelectedNode(response);
  };

  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await axios({
          method: 'get',
          url: `data/${match.params.entity}Config.json`,
        });
        setConfig(data);
        setIsLoading(false);
        setError('');
      } catch (err) {
        setIsLoading(false);
        setConfig(initConfigState);
        setError(err.message);
      }
    };
    fetchData();
  }, [match.params.entity]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios({
          method: 'get',
          url: `data/${match.params.entity}.json`,
        });
        setDatas(data);
        setError('');
      } catch (err) {
        setDatas(null);
        setError(err.message);
      }
    };
    if (Object.keys(config.context).length !== 0) {
      fetchData();
    }
  }, [config, match.params.entity]);

  useEffect(() => {
    setShowBottomPanel(false);
  }, [actionType, selectedNode]);

  if (isLoading) return null;
  if (Object.keys(config.context).length === 0 && !isLoading)
    return <span>Impossible de charger la configuration</span>;
  return (
    <Root>
      {error && <span>{error}</span>}
      <Header>
        <h1>{config.context.name}</h1>
      </Header>
      <Content>
        <Row>
          <Action
            selectItem={(item: Datas) =>
              setDatas(prevDatas => ({
                ...prevDatas,
                children: [...prevDatas.children, item],
              }))
            }
            config={config}
          />
          <Navigation>
            <ForceDirectedChart
              retreiveSelectedNodeInformation={handleSelectedNodeInformation}
              datas={datas}
              config={config}
              setActionType={setActionType}
            />
          </Navigation>
        </Row>
        <Column>
          <h2>{`Détail ${actionType === 'valorisation' ? actionType : ''}`}</h2>
          {datas &&
          (datas.children.length > 0 || datas.valorisations.length > 0) ? (
            <TileList
              lists={
                actionType === 'valorisation'
                  ? datas.valorisations
                  : datas.children
              }
              handleClick={handleClick}
              selectedEntity={selectedEntity}
            />
          ) : (
            <span>Aucune sélection</span>
          )}
        </Column>
      </Content>

      {showRightPanel && (
        <RightPanel
          closePanel={() => setShowRightPanel(false)}
          title={selectedNode ? selectedNode.name : 'Détail'}
          selectNode={handleSelectedSubItem}
          prevSelectedNode={prevSelectedNode}
        >
          <FormBuilder
            item={selectedNode}
            selectNode={handleSelectedSubItem}
            prevSelectedNode={prevSelectedNode}
            setActionType={setActionType}
          />
          {/* {actionType !== 'valorisation' ? (
            <FormBuilder
              item={selectedNode}
              selectNode={handleSelectedSubItem}
              prevSelectedNode={prevSelectedNode}
              setActionType={setActionType}
            />
          ) : (
            <Valorisation setActionType={setActionType} />
          )} */}
        </RightPanel>
      )}
      {showBottomPanel && (
        <BottomPanel
          list={
            actionType === 'valorisation'
              ? datas.valorisations.filter(list => {
                  return list.entity === selectedEntity;
                })
              : datas.children.filter(list => {
                  return list.entity === selectedEntity;
                })
          }
          selectNodeInformation={handleSelectedNodeInformation}
          closePanel={() => setShowBottomPanel(false)}
          setActionType={setActionType}
        />
      )}
    </Root>
  );
}

export default Force;
