import React from 'react';
import { Force } from '../Force';

const Document = ({ config, actions, ...rest }) => {
  return <Force {...rest} config={config} actions={actions} />;
};

export default Document;
