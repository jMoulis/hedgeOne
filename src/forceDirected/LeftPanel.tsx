import React from 'react';
import styled from '@emotion/styled';
import { Link } from 'react-router-dom';
import { MenuProps } from './forceDirected';

const Root = styled.aside`
  grid-area: leftPanel;
  background-color: lavender;
`;

const LeftPanel = ({ menus }) => {
  if (!menus) return null;
  return (
    <Root>
      <ul>
        {menus.map((menu: MenuProps) => (
          <li key={menu.label}>
            <Link to={menu.link}>{menu.label}</Link>
          </li>
        ))}
      </ul>
    </Root>
  );
};

LeftPanel.propTypes = {};

export default LeftPanel;
