import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { ForceDirectedSeriesDataItem } from '@amcharts/amcharts4/plugins/forceDirected';
import { Button } from './Templates';

// TODO: Change Any
interface CustomForDirectSeriesDataItem extends ForceDirectedSeriesDataItem {
  dataContext: {
    children: any;
    entity: string;
    link: number[];
    name: string;
    value: number;
  };
}

interface Props {
  item: {
    entityItems: CustomForDirectSeriesDataItem[];
    selectedGroupName: string;
  };
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

const DetailContent: FunctionComponent<Props> = ({
  item: { entityItems },
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
        <List>
          {entityItems.map(entityItem => {
            if (Object.keys(entityItem).length === 0) return null;
            return (
              <ListItem
                key={entityItem.cloneId}
                onClick={() => handleSelect(entityItem.node)}
              >
                {entityItem.name}
              </ListItem>
            );
          })}
        </List>
      </Content>
    </Root>
  );
};

export default DetailContent;
