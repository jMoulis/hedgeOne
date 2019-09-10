import React from 'react';
import styled from '@emotion/styled';

interface Props {
  item: any;
  selectNode: Function;
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
  &:hover {
    text-decoration: underline;
  }
`;

const FormBuilder: React.FC<Props> = ({
  item,
  selectNode,
  prevSelectedNode,
}) => {
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
                <ListItem
                  key={idx}
                  onClick={() => {
                    selectNode(child);
                  }}
                >
                  {child.name}
                </ListItem>
              ))}
            </ul>
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
      {prevSelectedNode.current && (
        <span
          onClick={() => {
            selectNode(prevSelectedNode.current);
          }}
        >{`<-`}</span>
      )}
      <div>{renderForm(item)}</div>
    </div>
  );
};

export default FormBuilder;
