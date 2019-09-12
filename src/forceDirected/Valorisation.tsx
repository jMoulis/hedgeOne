import React from 'react';
import FakeRightPanelTemplate from './FakeRightPanelTemplate';
import { Button } from './Templates';

interface Props {
  setActionType: Function;
}
function Valorisation<Props>({ setActionType }) {
  return (
    <div>
      <h1>Valorisation panel</h1>
      <FakeRightPanelTemplate />
      <Button bgColor="orange" onClick={() => setActionType(null)}>
        Close
      </Button>
    </div>
  );
}

export default Valorisation;
