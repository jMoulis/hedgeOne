import React from 'react';
import styled from '@emotion/styled';
import { Bar, Label } from './Templates';

const Row = styled.div`
  display: flex;
  align-items: center;
`;
const Column = styled.div`
  display: flex;
  flex-direction: column;
  margin: 1rem 0;
`;

const FakeRightPanelTemplate = () => {
  return (
    <div>
      <Row>
        <Label>Lorem Ipsum</Label>
        <Bar height={2} color="gray" />
      </Row>
      <Row>
        <Label>Lorem Ipsum</Label>
        <Bar height={2} width={10} color="gray" />
      </Row>
      <Row>
        <Label>Lorem Ipsum</Label>
        <Bar height={2} color="gray" />
      </Row>
      <Row>
        <Label>Lorem Ipsum</Label>
        <Bar height={2} width={10} color="gray" />
      </Row>
      <Column>
        <Label>Lorem Ipsum</Label>
        <Bar height={1.5} color="gray" marginBottom={0.5} />
        <Bar height={1.5} color="gray" marginBottom={0.5} />
        <Bar height={1.5} width={15} color="gray" marginBottom={0.5} />
        <Bar height={1.5} color="gray" marginBottom={0.5} />
        <Bar height={1.5} width={20} color="gray" marginBottom={0.5} />
        <Bar height={1.5} width={15} color="gray" marginBottom={0.5} />
        <Bar height={1.5} width={20} color="gray" marginBottom={0.5} />
      </Column>
    </div>
  );
};

FakeRightPanelTemplate.propTypes = {};

export default FakeRightPanelTemplate;
