import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Modal from './Modal';
import { Button } from './Templates';
import { SERVICE_FOLDER } from './config';

const Root = styled.div``;

interface Props {
  selectItem: Function;
}
const Action = ({ selectItem }: Props) => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [displayedKey, setDisplayedKey] = useState<string>('');
  const [entity, setEntity] = useState<string>('');

  const handleActions = config => {
    setDisplayedKey(config.displayedKey);
    setEntity(config.entity);
    setDisplayModal(true);
  };

  return (
    <Root>
      <h2>Actions</h2>
      {displayModal && (
        <Modal
          close={() => setDisplayModal(false)}
          entity={entity}
          selectItem={selectItem}
          displayedKey={displayedKey}
          linkId={SERVICE_FOLDER.id}
        />
      )}

      <Button
        width={20}
        onClick={() => {
          handleActions({ displayedKey: 'name', entity: 'clients' });
        }}
      >
        Choisir un client
      </Button>
      <Button
        width={20}
        onClick={() => {
          handleActions({ displayedKey: 'name', entity: 'montres' });
        }}
      >
        Choisir une montre
      </Button>
    </Root>
  );
};

export default Action;
