import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import axios from 'axios';
import Modal from './Modal';
import { Button } from './Templates';
// eslint-disable-next-line import/no-unresolved
import { TreePanel } from '../Tree';

const Root = styled.div``;

interface Props {
  selectItem: Function;
  entityActions: any[];
  id: number;
}
const Action = ({ selectItem, entityActions, id }: Props) => {
  const [displayModal, setDisplayModal] = useState<boolean>(false);
  const [displayedKey, setDisplayedKey] = useState<string>('');
  const [entity, setEntity] = useState<string>('');
  const [data, setData] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const { data: response } = await axios({
          method: 'get',
          url: `data/${entity}.json`,
        });
        setData(response);
      } catch (err) {
        console.error(err.message);
      }
    };
    if (entity) {
      fetchData();
    }
  }, [entity]);

  const handleActions = action => {
    setDisplayedKey(action.displayedKey);
    setEntity(action.entity);
    setDisplayModal(true);
  };
  if (!entityActions) return null;
  if (entityActions.length === 0) return null;
  return (
    <Root>
      <h2>Actions</h2>
      {displayModal && (
        <Modal close={() => setDisplayModal(false)}>
          <label>Search</label>
          <input type="text" />
          <TreePanel
            items={data}
            close={() => setDisplayModal(false)}
            selectItem={selectItem}
            displayedKey={displayedKey}
            linkId={id}
            entity={entity}
          />
        </Modal>
      )}

      {entityActions &&
        entityActions.map((action, index) => (
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
    </Root>
  );
};

export default Action;
