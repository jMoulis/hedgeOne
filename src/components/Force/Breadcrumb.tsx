import React, { Fragment, FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { ForceDirectedNode } from '@amcharts/amcharts4/plugins/forceDirected';

const Root = styled.ul`
  display: flex;
  margin: 0;
  padding: 0;
  list-style: none;
`;

const ListItem = styled.li`
  padding: 0.2rem;
`;

interface Props {
  breadcrumb: ForceDirectedNode[];
}

const Breadcrumb: FunctionComponent<Props> = ({ breadcrumb }) => {
  const handleClick = (crumb: ForceDirectedNode) => {
    crumb.setActive(!crumb.isActive);
  };

  return (
    <Root>
      {breadcrumb.map((crumb, index) => {
        return (
          <Fragment key={crumb.cloneId}>
            <ListItem onClick={() => handleClick(crumb)}>
              {crumb.dataItem.name}
            </ListItem>
            {index + 1 !== breadcrumb.length && <ListItem>{'>'}</ListItem>}
          </Fragment>
        );
      })}
    </Root>
  );
};

export default Breadcrumb;
