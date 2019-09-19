import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Button } from './Templates';

const Root = styled.div`
  flex: 1;
  min-width: 100%;
  grid-area: bottomPanel;
  box-shadow: 0px -2px 5px -1px rgba(153, 153, 153, 1);
`;

const List = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  padding: 1rem;
  text-align: center;
  text-transform: capitalize;
  transition: all 150ms;
  display: flex;
  align-items: center;
  overflow: hidden;
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

const Informations = styled.div`
  flex: 1;
  display: flex;
  justify-content: flex-start;
`;

// TODO: Change Any
interface Props {
  list: any[] | null;
  closePanel: any;
  actions: any;
}

const BottomPanel: FunctionComponent<Props> = ({
  list,
  closePanel,
  actions,
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
          <ul>
            {list.map(entityItem => {
              console.log(entityItem);
              if (Object.keys(entityItem).length === 0) return null;
              return (
                <ListItem key={entityItem.id.value}>
                  <Informations>
                    <List>
                      {Object.keys(entityItem).map(key => {
                        if (!entityItem[key].displayList) return null;
                        if (typeof entityItem[key].value !== 'string')
                          return null;
                        return (
                          <ListItem key={key}>{entityItem[key].value}</ListItem>
                        );
                      })}
                    </List>
                  </Informations>
                  <Buttons>
                    <Button
                      type="button"
                      bgColor="green"
                      color="white"
                      width={2}
                      height={2}
                      radius={2}
                      onClick={() => {
                        const tab = {
                          entity: entityItem.entity.value,
                          label: entityItem.name.value,
                          selectedItemId: entityItem.id.value,
                          type: 'document',
                        };
                        if (actions) {
                          actions.setTabsAction(tab);
                        }
                      }}
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
          </ul>
        )}
      </Content>
    </Root>
  );
};

export default BottomPanel;
