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
import ListIcon from '../../assets/icons/list.svg';
import NetworkIcon from '../../assets/icons/network.svg';
import ValorisationIcon from '../../assets/icons/valorisation.svg';

const Chart = styled.div`
  height: 30rem;
`;

interface Props {
  retreiveSelectedNodeInformation: Function;
  setActionType: Function;
  data: any;
  seriesConfig: any[];
}
const menuRefData = (containerHeight: number) => {
  const iconSize = 30;
  const iconSizeMiddle = iconSize / 2;

  return [
    {
      actionType: 'valorisation',
      weight: 90,
      image: ValorisationIcon,
      x: containerHeight / 2,
      y: -containerHeight / 2,
    },
    {
      actionType: 'show_children',
      weight: 90,
      image: ListIcon,
      x: -iconSizeMiddle,
      y: containerHeight / 2,
    },
    {
      actionType: 'network',
      weight: 90,
      image: NetworkIcon,
      x: -containerHeight / 2 - iconSize,
      y: -containerHeight / 2,
    },
  ];
};

function ForceDirectedChart({
  retreiveSelectedNodeInformation,
  data,
  seriesConfig,
  setActionType,
}: Props) {
  const seriesRef = useRef<ForceDirectedSeries | null>(null);
  const selectedNodeRef = useRef<ForceDirectedNode | null>(null);
  const selectedMenu = useRef<any>(null);

  const buildMenu = container => {
    const { height } = container.bbox;
    const points: am4core.IPoint = {
      x: -(height + height + 45) / 2,
      y: -(height + height + 45) / 2,
    };
    /**
     * Menu Configuration
     */
    const menuRef = container.createChild(am4chart.PieChart);
    menuRef.isMeasured = false;
    menuRef.width = height + height + 45;
    menuRef.height = height + height + 45;
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
      const menu: am4chart.PieChart = target.dataItem.component.chart;
      const { actionType } = target.dataItem.dataContext;
      if (actionType === 'show_children') {
        const activeNode = selectedNodeRef.current;
        if (activeNode) {
          activeNode.isActive = !activeNode.isActive;
        }
      }

      setActionType(actionType);
      menu.hide(150);
      setTimeout(() => {
        menu.dispose();
      }, 170);
    });
    return menuRef;
  };

  useEffect(() => {
    am4core.useTheme(am4themesAnimated);
    const chart = am4core.create('chartdiv', ForceDirectedTree);
    chart.padding(0, 0, 0, 0);
    let timer;

    if (chart) {
      /**
       * ChartSeries Configuration
       */
      seriesRef.current = new ForceDirectedSeries();
      chart.series.push(seriesRef.current);
      seriesRef.current.config = seriesConfig;
      seriesRef.current.nodes.template.togglable = false;
      /**
       * ChartSeries Events
       */
      seriesRef.current.nodes.template.events.on('hit', ({ target }) => {
        const menu = target.children.values.find(
          child => child instanceof am4chart.PieChart
        );
        if (!menu) {
          buildMenu(target);
        }
        setActionType();
        selectedNodeRef.current = target;
        retreiveSelectedNodeInformation(target.dataItem.dataContext);
      });

      seriesRef.current.nodes.template.events.on('over', ({ target }) => {
        // Check if existingMenu
        const existingMenu = target.children.values.find(
          child => child instanceof am4chart.PieChart
        );
        if (!existingMenu && selectedMenu.current) {
          selectedMenu.current.dispose();
        }
        timer = setTimeout(() => {
          if (!existingMenu) {
            const newMenu = buildMenu(target);
            selectedMenu.current = newMenu;
          }
          selectedNodeRef.current = target;
        }, 150);
      });

      seriesRef.current.nodes.template.events.on('out', () =>
        clearTimeout(timer)
      );
      seriesRef.current.nodes.template.events.on('doublehit', ({ target }) => {
        const menu = target.children.values.find(
          child => child instanceof am4chart.PieChart
        );
        if (menu) {
          menu.dispose();
        }
      });
    }

    return () => {
      if (chart) {
        chart.dispose();
      }
      clearTimeout(timer);
    };
  }, [seriesConfig]);

  useEffect(() => {
    if (seriesRef.current && data) {
      let dataToArray = data;
      if (!Array.isArray(dataToArray)) {
        dataToArray = [dataToArray];
      }
      seriesRef.current.data = dataToArray;
    }
  }, [data]);

  return <Chart id="chartdiv" />;
}

export default ForceDirectedChart;
