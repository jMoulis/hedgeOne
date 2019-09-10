import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Button } from './Templates';

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
  margin-bottom: 2rem;
  background-color: lightblue;
  padding: 1rem;
`;

const Content = styled.div`
  padding: 1rem;
`;

// TODO: Modify any type
interface Props {
  closePanel: any;
  title?: string;
}

const RightPanel: FunctionComponent<Props> = ({
  children,
  closePanel,
  title,
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
      <Content>{children}</Content>
    </Root>
  );
};

export default RightPanel;
