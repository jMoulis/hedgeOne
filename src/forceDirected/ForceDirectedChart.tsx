/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useRef, useState } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4chart from '@amcharts/amcharts4/charts';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';
import {
  ForceDirectedTree,
  ForceDirectedSeries,
} from '@amcharts/amcharts4/plugins/forceDirected';
import styled from '@emotion/styled';
import { ConfigState } from './forceDirected';

const Chart = styled.div`
  height: 30rem;
`;

interface Props {
  retreiveSelectedNode: Function;
  datas: any;
  config: ConfigState;
}

function ForceDirectedChart({ retreiveSelectedNode, datas, config }: Props) {
  const chartRef = useRef<any>();
  const seriesRef = useRef<any>();
  const menuRef = useRef<any>();
  const [selectedNode, setSelectedNode] = useState<any | null>(null);

  console.log('test');
  useEffect(() => {
    am4core.useTheme(am4themesAnimated);
    chartRef.current = am4core.create('chartdiv', ForceDirectedTree);

    if (config) {
      seriesRef.current = new ForceDirectedSeries();
      if (chartRef.current && seriesRef.current) {
        chartRef.current.series.push(seriesRef.current);
        chartRef.current.padding(0, 0, 0, 0);
        seriesRef.current.config = config.series;
        seriesRef.current.nodes.template.togglable = false;

        seriesRef.current.nodes.template.events.on('hit', event => {
          if (!menuRef.current) {
            const points: am4core.IPoint = {
              x: -(event.target.contentWidth + 100) / 2,
              y: -(event.target.contentWidth + 100) / 2,
            };
            menuRef.current = event.target.createChild(am4chart.PieChart);
            menuRef.current.isMeasured = false;
            menuRef.current.width = event.target.contentWidth + 100;
            menuRef.current.height = event.target.contentWidth + 100;
            menuRef.current.moveTo(points);
            menuRef.current.toBack();
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
            console.log(menuSeries.labels.template);
            menuSeries.labels.template.getFillFromObject = false;
            menuSeries.ticks.template.disabled = true;
            menuSeries.slices.template.tooltipText = '';
            menuRef.current.isMeasured = false;
          }
          setSelectedNode(event.target.dataItem.dataContext);
          retreiveSelectedNode(event.target.dataItem.dataContext);
        });

        seriesRef.current.nodes.template.events.on('drag', event => {
          if (menuRef.current) {
            menuRef.current.hide(0);
          }
        });
        seriesRef.current.nodes.template.events.on('doublehit', event => {
          console.log('doubleclick');
          console.log(event.target.togglable);
          const { target } = event;
          target.togglable = true;
          // seriesRef.current.nodes.template.togglable = true;
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
  }, [config]);

  useEffect(() => {
    if (seriesRef.current && datas) {
      let dataToArray = datas;
      if (!Array.isArray(dataToArray)) {
        dataToArray = [dataToArray];
      }
      seriesRef.current.data = dataToArray;
    }
  }, [datas]);

  return (
    <>
      <Chart id="chartdiv" />
    </>
  );
}

export default ForceDirectedChart;

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
