import React, { useState } from 'react';
import styled from '@emotion/styled';
import Modal from './Modal';
import { Button } from './Templates';
import { ConfigState } from './forceDirected';

const Root = styled.div``;

interface Props {
  selectItem: Function;
  config: ConfigState;
}
const Action = ({ selectItem, config: { context } }: Props) => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [displayedKey, setDisplayedKey] = useState<string>('');
  const [entity, setEntity] = useState<string>('');
  const handleActions = action => {
    setDisplayedKey(action.displayedKey);
    setEntity(action.entity);
    setDisplayModal(true);
  };
  if (!context) return null;
  const { actions, id } = context;
  return (
    <Root>
      <h2>Actions</h2>
      {displayModal && (
        <Modal
          close={() => setDisplayModal(false)}
          entity={entity}
          selectItem={selectItem}
          displayedKey={displayedKey}
          linkId={id}
        />
      )}

      {actions &&
        actions.map((action, index) => (
          <Button
            key={index}
            width={20}
            onClick={() => {
              handleActions(action);
            }}
          >
            {action.label}
          </Button>
        ))}

      {/* <Button
        width={20}
        onClick={() => {
          handleActions({ displayedKey: 'name', entity: 'montres' });
        }}
      >
        Choisir une montre
      </Button> */}
    </Root>
  );
};

export default Action;
