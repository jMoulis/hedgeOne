import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Button } from './Templates';
import { ReactComponent as ReturnIcon } from '../assets/icons/backIcon.svg';

const Root = styled.aside`
  grid-area: rightPanel;
  // position: absolute;
  min-width: 40rem;
  right: 0;
  top: 0;
  bottom: 0;
  background-color: white;
  box-shadow: -4px 0px 4px -3px rgba(219, 219, 219, 1);
`;
const Header = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: lightblue;
  padding: 1rem;
`;

const Content = styled.div`
  padding: 1rem;
`;

const ReturnButton = styled(ReturnIcon)`
  display: block;
  margin: 0.5rem;
`;

const SubHeader = styled.div`
  background-color: lightGray;
  display: flex;
  align-items: center;
`;

// TODO: Modify any type
interface Props {
  closePanel: any;
  title?: string;
  prevSelectedNode: any;
  selectNode: Function;
}

const RightPanel: FunctionComponent<Props> = ({
  children,
  closePanel,
  title,
  selectNode,
  prevSelectedNode,
}) => {
  return (
    <Root>
      <Header>
        <h1>{title}</h1>
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
      {prevSelectedNode.current && (
        <SubHeader>
          <ReturnButton
            height="20"
            width="20"
            role="button"
            tabIndex={0}
            onClick={() => {
              selectNode(prevSelectedNode.current);
            }}
          />
        </SubHeader>
      )}
      <Content>{children}</Content>
    </Root>
  );
};

export default RightPanel;
