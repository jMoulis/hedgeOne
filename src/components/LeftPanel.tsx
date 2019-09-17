import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
// eslint-disable-next-line import/no-unresolved
import { MenuProps } from './Force/forceDirected';

const Root = styled.aside`
  grid-area: leftPanel;
  background-color: lavender;
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
              <div onClick={() => setSelectedMenu(menuItem)}>
                {menuItem.label}
              </div>
            </li>
          );
        })}
        <li>
          <Link to="/tab">Tab</Link>
        </li>
      </ul>
    </Root>
  );
};

LeftPanel.propTypes = {};

export default LeftPanel;
