/* eslint-disable react/destructuring-assignment */
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

interface Props {
  config: any;
  actions: any;
}

function Force<Props>({ config, actions }) {
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

  const prevSelectedNode = useRef<Datas | null>(null);
  const [selectedNode, setSelectedNode] = useState<Datas | null>(null);
  const [actionType, setActionType] = useState<string>('');
  const [showRightPanel, setShowRightPanel] = useState<boolean>(false);
  const [showBottomPanel, setShowBottomPanel] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [data, setData] = useState<any>(null);
  const [selectedEntity, setSelectedEntity] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [context, setContext] = useState<any | null>(null);
  const [series, setSeries] = useState<any[]>([]);

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
          url: `data/${config.entity}Config.json`,
        });
        setSeries(response.data.series);
        setContext(response.data.context);
        setIsLoading(false);
        setError('');
      } catch (err) {
        setIsLoading(false);
        setContext(null);
        setSeries([]);
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `data/${config.entity}.json`,
        });
        /**
         * Fake step. Normally I would call api a receceived an object and not an array
         */
        let filteredData = response.data;
        // if (id) {
        //   if (Array.isArray(response.data)) {
        //     filteredData = response.data.find(item => item.id === id);
        //   } else {
        //     filteredData = response.data;
        //   }
        // }
        /* ***** */
        setData(filteredData);
        setSelectedNode(filteredData);
        setError('');
      } catch (err) {
        setData(null);
        setError(err.message);
      }
    };
    if (context && Object.keys(context).length !== 0) {
      fetchData();
    }
  }, [context]);

  useEffect(() => {
    setShowBottomPanel(false);
  }, [actionType]);

  if (isLoading) return null;
  if (series.length === 0 && !isLoading)
    return <span>Impossible de charger la configuration</span>;

  return (
    <Root>
      {error && <span>{error}</span>}
      <Header>
        <h1>{context && context.name}</h1>
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
            config={{ series, context }}
          />
          <Navigation>
            <ForceDirectedChart
              retreiveSelectedNodeInformation={handleSelectedNodeInformation}
              data={data}
              seriesConfig={series}
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
          entity={selectedNode.entity}
          actionType={actionType}
          actions={actions}
        />
      )}
    </Root>
  );
}

export default Force;
