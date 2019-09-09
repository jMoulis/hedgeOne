/* eslint-disable react/no-array-index-key */
import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import { ForceDirectedSeriesDataItem } from '@amcharts/amcharts4/plugins/forceDirected';
import TileItem from './TileItem';

const Root = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`;

interface Props {
  lists?: ForceDirectedSeriesDataItem[];
  handleClick: Function;
}
const TileList: FunctionComponent<Props> = ({ lists, handleClick }) => {
  const [groupedLists, setGroupList] = useState<object>({});

  useEffect(() => {
    const groupListItem = (
      entity: string,
      arrayItem: ForceDirectedSeriesDataItem[]
    ) =>
      arrayItem.reduce((acc, item) => {
        const key = item.dataContext[entity];
        if (!acc[key]) {
          acc[key] = [];
        }
        acc[key].push(item);
        return acc;
      }, {});

    if (lists) {
      setGroupList(groupListItem('entity', lists));
    }
  }, [lists]);

  if (Object.keys(groupedLists).length === 0)
    return <span>No item selected</span>;
  return (
    <Root>
      {Object.keys(groupedLists).map((key, index) => {
        return (
          <TileItem
            key={index}
            items={groupedLists[key]}
            groupName={key}
            handleClick={handleClick}
          />
        );
      })}
    </Root>
  );
};

export default TileList;
