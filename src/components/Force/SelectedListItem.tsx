import React from 'react';
import styled from '@emotion/styled';
import { ForceDirectedNode } from '@amcharts/amcharts4/plugins/forceDirected';
import { Ul, Li } from './Element';

const Root = styled(Ul)`
  margin-top: 1rem;
`;

interface ListItemProps {
  borderTop?: boolean;
}

const ListItem = styled(Li)<ListItemProps>`
  display: flex;
  border-bottom: 1px solid #e4e4e4;
  padding: 0.5rem;
  border-top: ${({ borderTop }) => borderTop && '1px solid #e4e4e4'};
  justify-content: space-between;
  align-items: center;
`;

const Item = styled.span`
  padding: 1rem;
`;

const ButtonWrapper = styled.div`
  display: flex;
`;

interface Props {
  datas: ForceDirectedNode;
  setSelectedNode: Function;
}
const SelectedListItem = ({ datas, setSelectedNode }: Props) => {
  const handleSelectListItem = (response: ForceDirectedNode) => {
    setSelectedNode(response);
    response.setActive(!response.isActive);
  };
  return (
    <>
      <Root>
        {datas.dataItem.children.values.map((item, index) => (
          <ListItem
            key={item.cloneId}
            borderTop={index === 0}
            onClick={() => handleSelectListItem(item.node)}
          >
            <div>
              <Item>{item.cloneId}</Item>
              <Item>{item.cloneId}</Item>
            </div>
            <ButtonWrapper>
              {/* <Button width="3" bgColor="blue" radius={200} />
              <Button bgColor="red" color="#fff" width="3" radius={200} /> */}
            </ButtonWrapper>
          </ListItem>
        ))}
      </Root>
    </>
  );
};

SelectedListItem.propTypes = {};

export default SelectedListItem;
