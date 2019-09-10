import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Button } from './Templates';

// TODO: Change Any
interface Props {
  list: any;
  handleSelect: Function;
  closePanel: any;
}

const Root = styled.div`
  flex: 1;
  min-width: 100%;
  grid-area: bottomPanel;
  box-shadow: 0px -2px 5px -1px rgba(153, 153, 153, 1);
`;
const List = styled.ul``;

const ListItem = styled.li`
  padding: 1rem;
  min-width: 20rem;
  text-align: center;
  text-transform: capitalize;
  transition: all 150ms;
  cursor: pointer;
  display: flex;
  align-items: center;
  justify-content: space-between;
  &:hover {
    background-color: #e4e4e4;
  }
`;

const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue;
  padding: 1rem;
`;
const Content = styled.div``;
const Buttons = styled.div`
  display: flex;
`;

const BottomPanel: FunctionComponent<Props> = ({
  list,
  handleSelect,
  closePanel,
}) => {
  return (
    <Root>
      <Header>
        <h1>Détail</h1>
        <Button
          type="button"
          onClick={closePanel}
          bgColor="red"
          color="white"
          width="2"
          height={2}
          radius="200"
        />
      </Header>
      <Content>
        {list && (
          <List>
            {list.map(entityItem => {
              if (Object.keys(entityItem).length === 0) return null;
              return (
                <ListItem
                  key={entityItem._id}
                  onClick={() => handleSelect(entityItem)}
                >
                  <div>{entityItem.name}</div>
                  <Buttons>
                    <Button
                      type="button"
                      bgColor="blue"
                      color="white"
                      width={2}
                      height={2}
                      radius={2}
                    />
                    <Button
                      type="button"
                      bgColor="red"
                      color="white"
                      width={2}
                      height={2}
                      radius={2}
                    />
                  </Buttons>
                </ListItem>
              );
            })}
          </List>
        )}
      </Content>
    </Root>
  );
};

export default BottomPanel;
