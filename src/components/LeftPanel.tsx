import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { MenuProps } from './Force/forceDirected';

const Root = styled.aside`
  grid-area: leftPanel;
  background-color: lavender;
`;

const Button = styled.button`
  border: none;
  background-color: transparent;
  font-size: 1.5rem;
  padding: 1rem;
  cursor: pointer;
  width: 100%;
  text-align: left;
  &:hover {
    background-color: lightGray;
  }
`;

interface Props {
  menu: MenuProps[];
  setSelectedMenu: Function;
}
const LeftPanel = ({ menu, setSelectedMenu }) => {
  if (!menu) return null;
  return (
    <Root>
      <ul>
        {menu.map((menuItem: MenuProps) => {
          return (
            <li key={menuItem.label}>
              <Button onClick={() => setSelectedMenu(menuItem)}>
                {menuItem.label}
              </Button>
            </li>
          );
        })}
      </ul>
    </Root>
  );
};

LeftPanel.propTypes = {};

export default LeftPanel;
