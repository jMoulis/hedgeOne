/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { ForceDirectedSeriesDataItem } from '@amcharts/amcharts4/plugins/forceDirected';

const Root = styled.li`
  padding: 2rem;
  margin: 1rem;
  min-width: 20rem;
  text-align: center;
  text-transform: capitalize;
  transition: all 150ms;
  box-shadow: 0 0 5px 0px rgba(148, 148, 148, 0.5);
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    box-shadow: 0 0 10px 0px rgba(148, 148, 148, 0.5);
  }
  &:active {
    box-shadow: 0 0 3px 1px rgba(148, 148, 148, 0.5);
  }
`;

interface CustomForDirectSeriesDataItem extends ForceDirectedSeriesDataItem {
  dataContext: any;
}

interface Props {
  items?: CustomForDirectSeriesDataItem[] | unknown[];
  groupName?: string;
  handleClick: Function;
}

const Badge = styled.span`
  display: inline-block;
  border-radius: 2px;
  min-width: 3rem;
  background-color: #17a2b8;
  color: white;
`;

const Tile: FunctionComponent<Props> = ({ items, groupName, handleClick }) => {
  if (items)
    return (
      <Root onClick={() => handleClick(items, groupName)}>
        <h3>{groupName}</h3>
        <Badge>{items.length}</Badge>
      </Root>
    );
  return null;
};

export default Tile;
