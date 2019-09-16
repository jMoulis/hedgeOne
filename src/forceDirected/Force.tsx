/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import queryString from 'query-string';
import ForceDirectedChart from './ForceDirectedChart';
import Action from './Action';
import RightPanel from './RightPanel';
import TileList from './Tile/TileList';
import BottomPanel from './BottomPanel';
import FormBuilder from './FormBuilder';
// eslint-disable-next-line import/no-unresolved
import { ConfigState } from './forceDirected';

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

function Force({ match, location }) {
  interface Datas {
    name: string;
    value: number;
    link: number;
    entity: string;
    children: Datas[];
    id: string;
    navigation: any;
    valorisations: any;
  }
  const initConfigState = {
    series: [],
    context: {},
  };
  const prevSelectedNode = useRef<Datas | null>(null);
  const [selectedNode, setSelectedNode] = useState<Datas | null>(null);
  const [actionType, setActionType] = useState<string>('');
  const [showRightPanel, setShowRightPanel] = useState<boolean>(false);
  const [showBottomPanel, setShowBottomPanel] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<any>(null);
  const [selectedEntity, setSelectedEntity] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [config, setConfig] = useState<ConfigState>(initConfigState);
  const [tabs, setTabs] = useState([]);

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
        const response = await axios({
          method: 'get',
          url: `data/${match.params.entity}Config.json`,
        });
        setConfig(response.data);
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
        const { id } = queryString.parse(location.search);
        const response = await axios({
          method: 'get',
          url: `data/${match.params.entity}.json`,
        });
        /**
         * Fake step. Normally I would call api a receceived an object and not an array
         */
        let filteredData = response.data;
        if (id) {
          if (Array.isArray(response.data)) {
            filteredData = response.data.find(item => item.id === id);
          } else {
            filteredData = response.data;
          }
        }
        /* ***** */

        setData(filteredData);
        setSelectedNode(filteredData);
        setError('');
      } catch (err) {
        setData(null);
        setError(err.message);
      }
    };
    if (Object.keys(config.context).length !== 0) {
      fetchData();
    }
  }, [config, match.params.entity]);

  useEffect(() => {
    setShowBottomPanel(false);
  }, [actionType]);

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
              setData(prevDatas => ({
                ...prevDatas,
                children: [...prevDatas.children, item],
              }))
            }
            config={config}
          />
          <Navigation>
            <ForceDirectedChart
              retreiveSelectedNodeInformation={handleSelectedNodeInformation}
              data={data}
              config={config}
              setActionType={setActionType}
            />
          </Navigation>
        </Row>
        <Column>
          <h2>
            {`Liste des ${
              actionType === 'valorisation' ? `${actionType}s` : 'enfants'
            } de ${selectedNode && selectedNode.name}`}
          </h2>
          {selectedNode &&
          (selectedNode.children || selectedNode.valorisations) ? (
            // eslint-disable-next-line react/jsx-indent
            <TileList
              lists={
                actionType === 'valorisation'
                  ? selectedNode.valorisations
                  : selectedNode.children
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
        </RightPanel>
      )}

      {showBottomPanel && selectedNode && (
        <BottomPanel
          list={
            actionType === 'valorisation'
              ? selectedNode.valorisations &&
                selectedNode.valorisations.filter(list => {
                  return list.entity === selectedEntity;
                })
              : selectedNode.children &&
                selectedNode.children.filter(list => {
                  return list.entity === selectedEntity;
                })
          }
          selectNodeInformation={handleSelectedNodeInformation}
          closePanel={() => setShowBottomPanel(false)}
          setActionType={setActionType}
          setTabs={setTabs}
          entity={selectedNode.entity}
          actionType={actionType}
        />
      )}
    </Root>
  );
}

export default Force;
