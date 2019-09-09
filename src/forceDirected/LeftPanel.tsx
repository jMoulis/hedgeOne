import React from 'react';
import styled from '@emotion/styled';

const Root = styled.aside`
  grid-area: leftPanel;
  background-color: lavender;
`;

const LeftPanel = () => {
  return <Root>MenuContent</Root>;
};

LeftPanel.propTypes = {};

export default LeftPanel;
