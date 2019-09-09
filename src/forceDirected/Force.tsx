/* eslint-disable react-hooks/exhaustive-deps */
import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import {
  ForceDirectedNode,
  ForceDirectedSeriesDataItem,
} from '@amcharts/amcharts4/plugins/forceDirected';
import ForceDirectedChart from './ForceDirectedChart';
import Action from './Action';
import RightPanel from './RightPanel';
import LeftPanel from './LeftPanel';
import Header from './Header';
import FakeRightPanelTemplate from './FakeRightPanelTemplate';
import { SERVICE_FOLDER } from './config';
import TileList from './Tile/TileList';
import BottomPanel from './BottomPanel';

const Root = styled.main`
  display: grid;
  position: relative;
  height: 100%;
  grid-template-areas:
    'header header rightPanel'
    'leftPanel content rightPanel'
    'leftPanel bottomPanel rightPanel';
  grid-template-columns: 20rem 1fr auto;
  grid-template-rows: 5rem auto 1fr;
`;
const Navigation = styled.article`
  grid-area: navigation;
  flex: 1;
`;

const Content = styled.div`
  grid-area: content;
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

function Force() {
  interface SelectedEntityItemsProps {
    entityItems: CustomForceDirectSeriesDataItem[];
    selectedGroupName: string;
  }

  interface Datas {
    name: string;
    value: number;
    link: number;
    entity: string;
    children: Datas[];
  }

  interface CustomForceDirectSeriesDataItem
    extends ForceDirectedSeriesDataItem {
    dataContext: any;
  }
  const [selectedNode, setSelectedNode] = useState<ForceDirectedNode | null>(
    null
  );
  const [mainNode, setMainNode] = useState<ForceDirectedNode | null>(null);
  const [showRightPanel, setShowRightPanel] = useState<boolean>(false);
  const [showBottomPanel, setShowBottomPanel] = useState<boolean>(false);
  const [error, setError] = useState<string>('');
  const [datas, setDatas] = useState<Datas[]>([]);
  const [selectedEntityItems, setSelectedEntityItems] = useState<
    SelectedEntityItemsProps
  >({
    entityItems: [],
    selectedGroupName: '',
  });

  const handleClick = (
    entityItems: CustomForceDirectSeriesDataItem[],
    selectedGroupName: string
  ) => {
    setSelectedEntityItems({ entityItems, selectedGroupName });
    setShowBottomPanel(true);
  };

  const handleSelectedNode = (response: ForceDirectedNode) => {
    setSelectedNode(response);
    setShowRightPanel(true);
  };

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios({
          method: 'get',
          url: `data/${SERVICE_FOLDER.context}.json`,
        });
        setDatas(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  useEffect(() => {
    if (showBottomPanel && mainNode) {
      const selectedEntityItemsFiltered = mainNode.dataItem.children.values.map(
        item => {
          return Object.values(item.dataContext).reduce((res, value) => {
            if (value === selectedEntityItems.selectedGroupName) {
              return item;
            }
            return res;
          }, {});
        }
      );
      setSelectedEntityItems({
        ...selectedEntityItems,
        entityItems: selectedEntityItemsFiltered,
      });
    }
  }, [mainNode, showBottomPanel]);

  return (
    <Root>
      {error && <span>{error}</span>}
      <Header />
      <LeftPanel />
      <Content>
        <h1>{SERVICE_FOLDER.name}</h1>
        <Row>
          <Action
            selectItem={(item: Datas) => {
              setDatas(prevDatas => {
                const tempDatas = prevDatas.map(prevData => {
                  const tempData: Datas = {
                    ...prevData,
                    children: [...prevData.children],
                  };
                  tempData.children = [...tempData.children, item];
                  return tempData;
                });
                return tempDatas;
              });
            }}
          />
          <Navigation>
            <ForceDirectedChart
              retreiveSelectedNode={handleSelectedNode}
              callbackInitChart={(response: ForceDirectedNode) =>
                setMainNode(response)
              }
              datas={datas}
            />
          </Navigation>
        </Row>
        <Column>
          <h2>Sélection détail</h2>
          {mainNode && mainNode.dataItem.children.length > 0 ? (
            <TileList
              lists={mainNode.dataItem.children.values}
              handleClick={handleClick}
            />
          ) : (
            <span>Aucune sélection</span>
          )}
        </Column>
      </Content>
      {showRightPanel && (
        <RightPanel
          closePanel={() => setShowRightPanel(false)}
          title={selectedNode ? selectedNode.dataItem.name : 'Détail'}
        >
          <FakeRightPanelTemplate />
        </RightPanel>
      )}
      {showBottomPanel && (
        <BottomPanel
          item={selectedEntityItems}
          handleSelect={handleSelectedNode}
          closePanel={() => setShowBottomPanel(false)}
        />
      )}
    </Root>
  );
}

export default Force;
