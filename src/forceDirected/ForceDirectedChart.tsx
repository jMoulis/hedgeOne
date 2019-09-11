/* eslint-disable react-hooks/exhaustive-deps */

import React, { useEffect, useRef } from 'react';
import * as am4core from '@amcharts/amcharts4/core';
import * as am4chart from '@amcharts/amcharts4/charts';
import am4themesAnimated from '@amcharts/amcharts4/themes/animated';
import {
  ForceDirectedTree,
  ForceDirectedSeries,
  ForceDirectedNode,
} from '@amcharts/amcharts4/plugins/forceDirected';
import styled from '@emotion/styled';
import ListIcon from '../assets/icons/list.svg';
import ValorisationIcon from '../assets/icons/valorisation.svg';
import { ConfigState } from './forceDirected';

const Chart = styled.div`
  height: 30rem;
`;

interface Props {
  retreiveSelectedNode: Function;
  datas: any;
  config: ConfigState;
}

const actions = {
  valorisation: () => alert('openValorisation'),
  toggle: node => {
    const activeNode = node;
    if (node) {
      activeNode.isActive = !node.isActive;
    }
    console.log(node);
  },
};

function ForceDirectedChart({ retreiveSelectedNode, datas, config }: Props) {
  const chartRef = useRef<ForceDirectedTree | null>(null);
  const seriesRef = useRef<ForceDirectedSeries | null>(null);
  // const menuRef = useRef<am4chart.PieChart | null>(null);
  const testSelectedNode = useRef<ForceDirectedNode | null>(null);
  const buildPieChart = container => {
    const menuRefData = (containerHeight: number) => {
      console.log(containerHeight);
      return [
        {
          action: 'Slice1',
          weight: 90,
          image: ValorisationIcon,
          x: 50,
          y: -65,
          callbackKey: 'valorisation',
        },
        {
          action: 'Slice2',
          weight: 90,
          image: ListIcon,
          x: 50,
          y: 40,
          callbackKey: 'toggle',
        },
        {
          action: 'Slice3',
          weight: 90,
          image: ValorisationIcon,
          x: -75,
          y: 40,
          callbackKey: 'valorisation',
        },
        {
          action: 'Slice4',
          weight: 90,
          image: ListIcon,
          x: -75,
          y: -65,
          callbackKey: 'toggle',
        },
      ];
    };
    const points: am4core.IPoint = {
      x: -(container.contentWidth + 150) / 2,
      y: -(container.contentWidth + 150) / 2,
    };
    const menuRef = container.createChild(am4chart.PieChart);

    const { height } = container.bbox;
    menuRef.data = menuRefData(height);
    menuRef.isMeasured = false;
    menuRef.width = container.contentWidth + 150;
    menuRef.height = container.contentWidth + 150;
    menuRef.moveTo(points);
    menuRef.isMeasured = false;
    menuRef.toBack();

    /**
     * MenuSeries (PieSeries)
     */
    const menuSeries = menuRef.series.push(new am4chart.PieSeries());
    menuSeries.dataFields.value = 'weight';
    menuSeries.hiddenState.properties.endAngle = -90;
    menuSeries.ticks.template.disabled = true;
    menuSeries.slices.template.togglable = false;
    menuSeries.slices.template.strokeWidth = 2;
    menuSeries.slices.template.strokeOpacity = 1;
    menuSeries.slices.template.tooltipText = '';
    menuSeries.labels.template.text = '';
    menuSeries.labels.template.padding(0, 0, 0, 0);

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

    /**
     * Events Callback
     */
    menuSeries.slices.template.events.on('hit', ({ target }) => {
      const pieChart: am4chart.PieChart = target.dataItem.component.chart;
      const { callbackKey } = target.dataItem.dataContext;
      const callback = actions[callbackKey];
      if (typeof callback === 'function') {
        actions[callbackKey](testSelectedNode.current);
      }
      pieChart.dispose();
    });
    return menuRef;
  };

  useEffect(() => {
    am4core.useTheme(am4themesAnimated);
    chartRef.current = am4core.create('chartdiv', ForceDirectedTree);

    if (config && chartRef.current) {
      seriesRef.current = new ForceDirectedSeries();
      chartRef.current.series.push(seriesRef.current);
      chartRef.current.padding(0, 0, 0, 0);
      seriesRef.current.config = config.series;
      seriesRef.current.nodes.template.togglable = false;
      // seriesRef.current.nodes.template.outerCircle.fill = am4core.color(
      //   '#000000'
      // );

      seriesRef.current.nodes.template.events.on('hit', ({ target }) => {
        const pieChart = target.children.values.find(
          child => child instanceof am4chart.PieChart
        );
        if (!pieChart) {
          buildPieChart(target);
        }
        testSelectedNode.current = target;
        retreiveSelectedNode(target.dataItem.dataContext);
      });

      seriesRef.current.nodes.template.events.on('over', ({ target }) => {
        const pieChart = target.children.values.find(
          child => child instanceof am4chart.PieChart
        );
        if (!pieChart) {
          buildPieChart(target);
        }
        testSelectedNode.current = target;
        retreiveSelectedNode(target.dataItem.dataContext);
      });

      seriesRef.current.nodes.template.events.on('out', ({ target }) => {
        const pieChart = target.children.values.find(
          child => child instanceof am4chart.PieChart
        );
        if (pieChart) {
          // pieChart.dispose();
        }
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
      if (chartRef.current) {
        chartRef.current.dispose();
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
// }, [selectedNode]);
