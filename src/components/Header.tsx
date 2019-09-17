import React from 'react';
import styled from '@emotion/styled';

const Root = styled.header`
  grid-area: header;
  display: flex;
  justify-content: space-between;
  background-color: lightgray;
`;

const List = styled.ul`
  list-style: none;
  display: flex;
`;

const ListItem = styled.li`
  padding: 1rem;
`;

const Header = () => {
  return (
    <Root>
      <div>logo</div>
      <List>
        <ListItem>link1</ListItem>
        <ListItem>link2</ListItem>
        <ListItem>link3</ListItem>
      </List>
    </Root>
  );
};

Header.propTypes = {};

export default Header;
