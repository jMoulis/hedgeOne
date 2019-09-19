/* eslint-disable react/destructuring-assignment */
/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect, useRef } from 'react';
import styled from '@emotion/styled';
import { connect } from 'react-redux';
import axios from 'axios';
import ForceDirectedChart from 'components/Force/ForceDirectedChart';
import Action from 'components/Force/Action';
import RightPanel from 'components/Force/RightPanel';
import TileList from 'components/Force/Tile/TileList';
import BottomPanel from 'components/Force/BottomPanel';
import FormBuilder from 'components/Force/FormBuilder';
import {
  setForceSelectedItem,
  setForceData,
  editForceData,
  createForceData,
} from 'store/reducers/forceReducer';
import { setActiveTab, setTabs } from 'store/reducers/tabReducer';
import { createNewItem } from 'store/fakeNewItems';

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

interface Datas {
  name: string;
  value: number;
  link: number;
  entity: string;
  children: Datas[];
  id: string;
  navigation: any;
  valorisations: any;
  baseData: any;
}

interface Props {
  actions: any;
  setForceDataAction: Function;
  editForceDataAction: Function;
  activeTab: any;
  data: any;
}

function Force<Props>({
  actions,
  forceData,
  setForceDataAction,
  activeTab,
  editForceDataAction,
  createForceDataAction,
}) {
  const prevSelectedNode = useRef<Datas | null>(null);
  const [selectedNode, setSelectedNode] = useState<any | null>(null);
  const [actionType, setActionType] = useState<string>('');
  const [showRightPanel, setShowRightPanel] = useState<boolean>(false);
  const [showBottomPanel, setShowBottomPanel] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [selectedEntity, setSelectedEntity] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [context, setContext] = useState<any | null>(null);
  const [entityActions, setEntityActions] = useState([]);
  const [series, setSeries] = useState<any[]>([]);
  const [isMenuClick, setIsMenuClick] = useState<boolean>(false);

  const handleClick = (entityName: string) => {
    setSelectedEntity(entityName);
    setShowBottomPanel(true);
  };

  const handleSelectedNodeInformation = (response: Datas) => {
    prevSelectedNode.current = null;
    setSelectedNode(response.baseData);
    // console.log(forceData[response.id]);
    setShowRightPanel(true);
    // setIsMenuClick(false);
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
    const fetchData = async () => {
      setIsLoading(true);
      try {
        const response = await axios({
          method: 'get',
          url: `data/${activeTab.entity}Config.json`,
        });
        setSeries(response.data.series);
        setContext(response.data.context);
        setEntityActions(response.data.context.actions);
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
      setIsLoading(true);
      try {
        const response = await axios({
          method: 'get',
          url: `data/${activeTab.entity}.json`,
        });

        /**
         * Fake step. Normally I would call api a receceived an object and not an array
         */
        let filteredData;
        if (Array.isArray(response.data)) {
          if (activeTab && activeTab.selectedItemId) {
            filteredData = response.data.find(
              item => item.id.value === activeTab.selectedItemId
            );
          }
        } else {
          filteredData = response.data;
        }
        if (!filteredData) {
          throw Error('Item not found');
        }
        /* ***** */

        if (!forceData || (forceData && !forceData[activeTab.tabId])) {
          setForceDataAction({
            [activeTab.tabId]: filteredData,
          });
        }
        setSelectedNode(filteredData);
        setError('');
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };

    if (!activeTab.isCreation && context && Object.keys(context).length !== 0) {
      fetchData();
    }
    if (activeTab.isCreation) {
      // Add new entry in
      if (!forceData || (forceData && !forceData[activeTab.tabId])) {
        const newItem = createNewItem(activeTab.entity);
        createForceDataAction({ [activeTab.tabId]: newItem });
      }
    }
  }, [context, activeTab]);

  useEffect(() => {
    if (selectedNode && selectedNode.entity.value) {
      const fetchData = async () => {
        try {
          const response = await axios({
            method: 'get',
            url: `data/${selectedNode.entity.value}Config.json`,
          });
          setEntityActions(response.data.context.actions);
          setError('');
        } catch (err) {
          setError(err.message);
        }
      };
      fetchData();
    }
  }, [selectedNode]);

  useEffect(() => {
    setShowBottomPanel(false);
  }, [actionType]);

  if (isLoading) return null;
  if (!context && !isLoading)
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
            selectItem={(item: Datas) => {
              return (
                forceData &&
                editForceDataAction({
                  [activeTab.tabId]: {
                    ...forceData[activeTab.tabId],
                    children: {
                      ...forceData[activeTab.tabId].children,
                      value: [
                        ...forceData[activeTab.tabId].children.value,
                        item,
                      ],
                    },
                  },
                })
              );
            }}
            entityActions={entityActions}
            id={context ? context.id : null}
          />
          <Navigation>
            <ForceDirectedChart
              retreiveSelectedNodeInformation={handleSelectedNodeInformation}
              data={forceData ? forceData[activeTab.tabId] : null}
              seriesConfig={series}
              setActionType={setActionType}
              setIsMenuClick={setIsMenuClick}
            />
          </Navigation>
        </Row>
        <Column>
          <h2>
            {`Liste des ${
              actionType === 'valorisation' ? `${actionType}s` : 'enfants'
            } de ${selectedNode &&
              selectedNode.name &&
              selectedNode.name.value}`}
          </h2>
          {selectedNode &&
          (selectedNode.children.value || selectedNode.valorisations.value) ? (
            // eslint-disable-next-line react/jsx-indent
            <TileList
              lists={
                actionType === 'valorisation'
                  ? selectedNode.valorisations.value
                  : selectedNode.children.value
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
          title={
            selectedNode && selectedNode.name
              ? selectedNode.name.value
              : 'Détail'
          }
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
                  return list.entity.value === selectedEntity;
                })
              : selectedNode.children &&
                selectedNode.children.value.filter(list => {
                  return list.entity.value === selectedEntity;
                })
          }
          closePanel={() => setShowBottomPanel(false)}
          actions={actions}
        />
      )}
    </Root>
  );
}

const mapStateToProps = ({ forceReducer, tabReducer }) => ({
  selectedItem: forceReducer.selectedItem,
  activeTab: tabReducer.activeTab,
  forceData: forceReducer.forceData,
});

const mapDispatchToProps = dispatch => ({
  setForceDataAction: data => {
    dispatch(setForceData(data));
  },
  editForceDataAction: data => {
    dispatch(editForceData(data));
  },
  createForceDataAction: data => {
    dispatch(createForceData(data));
  },
  actions: {
    setActiveTabAction: tab => {
      dispatch(setActiveTab(tab));
    },
    setTabsAction: tab => {
      dispatch(setTabs(tab));
    },
    setForceSelectedItemAction: item => {
      dispatch(setForceSelectedItem(item));
    },
  },
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(Force);
