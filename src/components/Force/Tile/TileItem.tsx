/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';

interface RootProps {
  isSelected: boolean;
}
const Root = styled.li<RootProps>`
  padding: 2rem;
  margin: 1rem;
  min-width: 20rem;
  text-align: center;
  text-transform: capitalize;
  transition: all 150ms;
  background-color: ${({ isSelected }) => (isSelected ? 'lightBlue' : '#fff')};
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

interface Datas {
  name: string;
  value: number;
  link: number;
  entity: string;
  children: Datas[];
  navigation: any;
}

interface Props {
  itemsLength: number;
  handleClick: Function;
  entityName: string;
  selectedEntity?: string;
}

const Badge = styled.span`
  display: inline-block;
  border-radius: 2px;
  min-width: 3rem;
  background-color: #17a2b8;
  color: white;
`;

const Tile: FunctionComponent<Props> = ({
  itemsLength,
  handleClick,
  entityName,
  selectedEntity,
}) => {
  if (itemsLength)
    return (
      <Root
        isSelected={selectedEntity === entityName}
        onClick={() => {
          handleClick(entityName);
        }}
      >
        <h3>{entityName}</h3>
        <Badge>{itemsLength}</Badge>
      </Root>
    );
  return null;
};

export default Tile;
