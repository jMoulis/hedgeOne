/* eslint-disable @typescript-eslint/no-explicit-any */
import React, { FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Button } from './Templates';

const Root = styled.aside`
  position: absolute;
  top: 0;
  bottom: 0;
  left: 0;
  right: 0;
  background-color: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  z-index: 1000;
`;

const Content = styled.div`
  background-color: #fff;
  min-width: 80%;
`;
const Header = styled.header`
  display: flex;
  justify-content: flex-end;
`;

interface Props {
  close: Function;
}

const Modal: FunctionComponent<Props> = ({ children, close }) => {
  return (
    <Root>
      <Content>
        <Header>
          <Button
            type="button"
            onClick={() => close()}
            bgColor="red"
            color="white"
            width="2"
            height={2}
            radius={200}
          />
        </Header>
        {children}
      </Content>
    </Root>
  );
};

Modal.propTypes = {};

export default Modal;
