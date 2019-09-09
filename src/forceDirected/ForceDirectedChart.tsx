/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useRef, useState } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4chart from '@amcharts/amcharts4/charts';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';
import {
  ForceDirectedNode,
  ForceDirectedTree,
  ForceDirectedSeries,
} from '@amcharts/amcharts4/plugins/forceDirected';
import axios from 'axios';
import styled from '@emotion/styled';

const Chart = styled.div`
  height: 30rem;
`;

interface Props {
  retreiveSelectedNode: Function;
  datas: object[];
  callbackInitChart: Function;
}

interface NetworkConfig {
  series: object[];
}
function ForceDirectedChart({
  retreiveSelectedNode,
  datas,
  callbackInitChart,
}: Props) {
  const chartRef = useRef<ForceDirectedTree>();
  const seriesRef = useRef<ForceDirectedSeries>();
  const menuRef = useRef<am4chart.PieChart>();
  const [networkConfig, setConfig] = useState<NetworkConfig>({ series: [] });
  const [error, setError] = useState<string>('');
  const [selectedNode, setSelectedNode] = useState<ForceDirectedNode | null>(
    null
  );

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data } = await axios({
          method: 'get',
          url: 'data/data.json',
        });
        setConfig(data);
      } catch (err) {
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  // useEffect(() => {
  // const hasParent = (node: ForceDirectedSeriesDataItem) => !!node.parent;
  // const getParentId = (node?: ForceDirectedSeriesDataItem) =>
  //   node && node.parent && node.parent.cloneId;

  // const hasSameParent = (
  //   node1: ForceDirectedSeriesDataItem,
  //   node2: ForceDirectedSeriesDataItem
  // ) => getParentId(node1) === getParentId(node2);

  // const removeFollowingChildNode = (
  //   nodes: ForceDirectedNode[],
  //   nodeToRemove?: ForceDirectedNode
  // ) => {
  //   const existingCrumbIndex = nodes.findIndex(
  //     node =>
  //       nodeToRemove &&
  //       node.dataItem.cloneId === nodeToRemove.dataItem.cloneId
  //   );
  //   if (existingCrumbIndex !== -1) {
  //     return nodes.slice(0, existingCrumbIndex + 1);
  //   }
  //   return nodes;
  // };

  // const nodeWithSameLevel = (
  //   nodes: ForceDirectedNode[],
  //   parentId?: string
  // ) => {
  //   if (!nodes || !parentId) return null;
  //   const foundedNode = nodes.find(
  //     node => getParentId(node.dataItem) === parentId
  //   );
  //   if (foundedNode) return foundedNode;
  //   return null;
  // };

  // const handleSameLevel = (
  //   nodes: ForceDirectedNode[],
  //   actualNode: ForceDirectedNode
  // ) => {
  //   /**
  //     it doesn't work when 2nd generation are click
  //    */
  //   const alreadyExists = nodes.some(
  //     node =>
  //       actualNode && node.dataItem.cloneId === actualNode.dataItem.cloneId
  //   );
  //   if (alreadyExists) return removeFollowingChildNode(nodes, actualNode);

  //   const lastNode: ForceDirectedNode =
  //     nodes[nodes.length - 1] ||
  //     (actualNode &&
  //       nodeWithSameLevel(nodes, getParentId(actualNode.dataItem)));

  //   if (lastNode) {
  //     let tempNodes = removeFollowingChildNode(nodes, lastNode);
  //     if (
  //       actualNode &&
  //       hasParent(lastNode.dataItem) &&
  //       hasSameParent(actualNode.dataItem, lastNode.dataItem)
  //     ) {
  //       tempNodes = tempNodes.filter(
  //         prevNode => prevNode.cloneId !== lastNode.cloneId
  //       );
  //       return [...tempNodes, actualNode];
  //     }
  //   }
  //   return [...nodes, actualNode];
  // };
  // }, [selectedNode]);

  useEffect(() => {
    am4core.useTheme(am4themesAnimated);
    chartRef.current = am4core.create('chartdiv', ForceDirectedTree);

    if (networkConfig) {
      seriesRef.current = new ForceDirectedSeries();
      if (chartRef.current && seriesRef.current) {
        chartRef.current.series.push(seriesRef.current);
        chartRef.current.padding(0, 0, 0, 0);
        seriesRef.current.config = networkConfig.series;
        seriesRef.current.nodes.template.togglable = false;
        // const menu = chartRef.current.createChild(am4chart.PieChart);

        seriesRef.current.nodes.template.events.on('hit', event => {
          const points: am4core.IPoint = {
            x: 0,
            y: 0,
          };
          if (menuRef.current) {
            console.log('click');
            if (menuRef.current.isHidden) {
              console.log('should show');
              menuRef.current.moveTo(points);
              menuRef.current.toBack();
              menuRef.current.show(500);
            } else {
              menuRef.current.hide(300);
            }
          }
          setSelectedNode(event.target);
          retreiveSelectedNode(event.target);
        });

        seriesRef.current.nodes.template.events.on('drag', event => {
          if (menuRef.current) {
            menuRef.current.hide(0);
          }
        });

        seriesRef.current.nodes.template.events.on('out', event => {
          // rect.hide();
        });

        seriesRef.current.events.on('appeared', event => {
          // eslint-disable-next-line
          if (!selectedNode) {
            menuRef.current = event.target.createChild(am4chart.PieChart);
            // menuRef.current = event.target.nodes.values[0].createChild(
            //   am4chart.PieChart
            // );
            menuRef.current.data = [
              {
                action: 'Valorisation',
                weight: 90,
              },
              {
                action: 'Delete',
                weight: 90,
              },
              {
                action: 'Enfant',
                weight: 90,
              },
              {
                action: 'AfterWork',
                weight: 90,
              },
            ];
            const menuSeries = menuRef.current.series.push(
              new am4chart.PieSeries()
            );

            menuSeries.dataFields.value = 'weight';
            menuSeries.slices.template.strokeWidth = 2;
            menuSeries.slices.template.strokeOpacity = 1;
            menuSeries.alignLabels = false;
            menuSeries.labels.template.text = '{action}';
            menuSeries.labels.template.bent = true;
            menuSeries.labels.template.radius = -10;
            menuSeries.labels.template.padding(0, 0, 0, 0);
            menuSeries.labels.template.fill = am4core.color('#fff');
            menuSeries.ticks.template.disabled = true;
            menuSeries.slices.template.tooltipText = '';
            menuRef.current.isMeasured = false;
            menuRef.current.hidden = true;
          }
          // console.log(event.target.nodes.values[0]);
          setSelectedNode(event.target.nodes.values[0]);
          callbackInitChart(event.target.nodes.values[0]);
        });
        seriesRef.current.events.on('childadded', event => {
          // Set a condition, the problem is when I active a node from outside graph click, give me back the first node
          setSelectedNode(event.target.nodes.values[0]);
          callbackInitChart(event.target.nodes.values[0]);
        });
      }
    }
    return () => {
      if (chartRef.current) {
        chartRef.current.dispose();
      }
      if (menuRef.current) {
        menuRef.current.dispose();
      }
    };
  }, [networkConfig]);

  useEffect(() => {
    if (seriesRef.current) {
      seriesRef.current.data = datas;
    }
  }, [datas]);

  return (
    <>
      {error && <span>{error}</span>}
      <Chart id="chartdiv" />
    </>
  );
}

export default ForceDirectedChart;
