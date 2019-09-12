import React from 'react';
import styled from '@emotion/styled';
import { Button } from './Templates';

interface Props {
  item: any;
  selectNode: Function;
  setActionType: Function;
  prevSelectedNode: {
    current: any;
  };
}

const Label = styled.label`
  display: inline-block;
  margin-right: 1rem;
  font-weight: bold;
`;

const ListItem = styled.li`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const ValorisationLink = styled.span`
  cursor: pointer;
  &:hover {
    text-decoration: underline;
  }
`;

const FormBuilder: React.FC<Props> = ({ item, selectNode, setActionType }) => {
  const renderForm = (object: any) => {
    return Object.entries(object).map((entry, index) => {
      const label: string = entry[0];
      const value: any = entry[1];
      if (!value) return null;
      return (
        <div key={index}>
          <Label>{`${label}:`}</Label>
          {label === 'children' && (
            <ul>
              {value.map((child, idx) => (
                <ListItem key={idx} onClick={() => selectNode(child)}>
                  {child.name}
                </ListItem>
              ))}
            </ul>
          )}
          {label === 'valorisations' && (
            <>
              {value.length > 0 ? (
                <ValorisationLink onClick={() => setActionType('valorisation')}>
                  Consulter
                </ValorisationLink>
              ) : null}
            </>
          )}
          {typeof value === 'string' || typeof value === 'number' ? (
            <span>{value}</span>
          ) : null}
        </div>
      );
    });
  };
  return (
    <div>
      <div>{renderForm(item)}</div>
    </div>
  );
};

export default FormBuilder;
