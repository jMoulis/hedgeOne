/* eslint-disable react/no-array-index-key */
import React, { FunctionComponent, useEffect, useState } from 'react';
import styled from '@emotion/styled';
import TileItem from './TileItem';

const Root = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  flex-wrap: wrap;
`;
interface Datas {
  name: string;
  value: number;
  link: number;
  entity: string;
  children: Datas[];
}
interface Props {
  lists: Datas[];
  handleClick: Function;
  selectedEntity?: string;
}
const TileList: FunctionComponent<Props> = ({
  lists,
  handleClick,
  selectedEntity,
}) => {
  const [groupedLists, setGroupList] = useState<object>({});
  useEffect(() => {
    const groupListItem = (entity: string, arrayItem: Datas[]) =>
      arrayItem.reduce((acc, item) => {
        const key = item[entity];
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
            itemsLength={groupedLists[key].length}
            entityName={key}
            handleClick={handleClick}
            selectedEntity={selectedEntity}
          />
        );
      })}
    </Root>
  );
};

export default TileList;
