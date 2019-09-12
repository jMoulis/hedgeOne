/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';
import * as am4chart from '@amcharts/amcharts4/charts';
import {
  ForceDirectedTree,
  ForceDirectedSeries,
  ForceDirectedNode,
} from '@amcharts/amcharts4/plugins/forceDirected';
import styled from '@emotion/styled';
import ListIcon from '../assets/icons/list.svg';
import ValorisationIcon from '../assets/icons/valorisation.svg';
// eslint-disable-next-line import/no-unresolved
import { ConfigState } from './forceDirected';

const Chart = styled.div`
  height: 30rem;
`;

interface Props {
  retreiveSelectedNodeInformation: Function;
  setActionType: Function;
  datas: any;
  config: ConfigState;
}
const menuRefData = (containerHeight: number) => {
  const iconSizeMiddle = 30 / 2;
  return [
    {
      actionType: 'valorisation',
      weight: 90,
      image: ValorisationIcon,
      x: containerHeight / 2 - iconSizeMiddle,
      y: -(containerHeight / 2 + iconSizeMiddle),
      callbackKey: 'valorisation',
    },
    {
      actionType: 'list',
      weight: 90,
      image: ListIcon,
      x: containerHeight / 2 - iconSizeMiddle,
      y: containerHeight / 2 - iconSizeMiddle,
      callbackKey: 'toggle',
    },
    {
      actionType: 'valorisation',
      weight: 90,
      image: ValorisationIcon,
      x: -(containerHeight / 2 + iconSizeMiddle),
      y: containerHeight / 2 - iconSizeMiddle,
      callbackKey: 'valorisation',
    },
    {
      actionType: 'list',
      weight: 90,
      image: ListIcon,
      x: -(containerHeight / 2 + iconSizeMiddle),
      y: -(containerHeight / 2 + iconSizeMiddle),
      callbackKey: 'toggle',
    },
  ];
};

function ForceDirectedChart({
  retreiveSelectedNodeInformation,
  datas,
  config,
  setActionType,
}: Props) {
  const seriesRef = useRef<ForceDirectedSeries | null>(null);
  const selectedNodeRef = useRef<ForceDirectedNode | null>(null);
  const selectedPieChart = useRef<any | null>(null);

  const buildPieChart = container => {
    const { height } = container.bbox;
    const points: am4core.IPoint = {
      x: -(height + 150) / 2,
      y: -(height + 150) / 2,
    };
    /**
     * Menu Configuration
     */
    const menuRef = container.createChild(am4chart.PieChart);
    menuRef.isMeasured = false;
    menuRef.width = height + 150;
    menuRef.height = height + 150;
    menuRef.moveTo(points);
    menuRef.isMeasured = false;
    menuRef.toBack();
    menuRef.data = menuRefData(height);

    /**
     * MenuSeries (PieSeries)
     */
    const menuSeries = menuRef.series.push(new am4chart.PieSeries());
    menuSeries.dataFields.value = 'weight';
    menuSeries.hiddenState.properties.endAngle = -90;
    menuSeries.defaultState.transitionDuration = 300;
    menuSeries.ticks.template.disabled = true;
    menuSeries.slices.template.togglable = false;
    menuSeries.slices.template.strokeWidth = 2;
    menuSeries.slices.template.strokeOpacity = 1;
    menuSeries.slices.template.tooltipText = '';
    menuSeries.labels.template.text = '';

    /**
     * Add icons
     */
    const icon: am4core.Image = menuSeries.slices.template.createChild(
      am4core.Image
    );
    icon.isMeasured = false;
    icon.propertyFields.href = 'image';
    icon.width = 30;
    icon.height = 30;
    icon.propertyFields.x = 'x';
    icon.propertyFields.y = 'y';
    icon.hoverable = false;

    /**
     * Events Callback
     */
    menuSeries.slices.template.events.on('hit', ({ target }) => {
      const pieChart: am4chart.PieChart = target.dataItem.component.chart;
      const { actionType } = target.dataItem.dataContext;
      if (actionType === 'list') {
        const activeNode = selectedNodeRef.current;
        if (activeNode) {
          activeNode.isActive = !activeNode.isActive;
        }
      }
      setActionType(actionType);
      pieChart.hide(150);
      setTimeout(() => {
        pieChart.dispose();
      }, 170);
    });
    return menuRef;
  };

  useEffect(() => {
    am4core.useTheme(am4themesAnimated);
    const chart = am4core.create('chartdiv', ForceDirectedTree);
    chart.padding(0, 0, 0, 0);

    if (config && chart) {
      /**
       * ChartSeries Configuration
       */
      seriesRef.current = new ForceDirectedSeries();
      chart.series.push(seriesRef.current);
      seriesRef.current.config = config.series;
      seriesRef.current.nodes.template.togglable = false;
      /**
       * ChartSeries Events
       */
      seriesRef.current.nodes.template.events.on('hit', ({ target }) => {
        const pieChart = target.children.values.find(
          child => child instanceof am4chart.PieChart
        );
        if (!pieChart) {
          buildPieChart(target);
        }
        selectedNodeRef.current = target;
        setActionType('information');
        retreiveSelectedNodeInformation(target.dataItem.dataContext);
      });

      seriesRef.current.nodes.template.events.on('over', ({ target }) => {
        const nodePieChart = target.children.values.find(
          child => child instanceof am4chart.PieChart
        );
        if (!nodePieChart && selectedPieChart.current) {
          selectedPieChart.current.dispose();
          const newPieChart = buildPieChart(target);
          selectedPieChart.current = newPieChart;
        } else if (!nodePieChart) {
          const newPieChart = buildPieChart(target);
          selectedPieChart.current = newPieChart;
        }
        selectedNodeRef.current = target;
      });

      seriesRef.current.nodes.template.events.on('doublehit', ({ target }) => {
        const pieChart = target.children.values.find(
          child => child instanceof am4chart.PieChart
        );
        if (pieChart) {
          pieChart.dispose();
        }
      });
    }

    return () => {
      if (chart) {
        chart.dispose();
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

  return <Chart id="chartdiv" />;
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
// }, [selectedNodeRef]);
