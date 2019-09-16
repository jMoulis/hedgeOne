import React, { FunctionComponent, useState } from 'react';
import styled from '@emotion/styled';
import TreeNavigation from './TreeNavigation';
import { Ul, Li } from '../../forceDirected/Element';

interface Props {
  close: Function;
  entity: string;
  selectItem: Function;
  displayedKey: string;
  linkId: number;
  items: any[];
}

const Root = styled.div`
  display: flex;
`;

const TreePanel: FunctionComponent<Props> = ({
  items,
  selectItem,
  close,
  linkId,
  displayedKey,
  entity,
}) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  return (
    <Root>
      <TreeNavigation
        items={items}
        setSelectedCategory={setSelectedCategory}
        selectItem={selectItem}
        linkId={linkId}
        close={close}
        entity={entity}
        displayedKey={displayedKey}
        selectedCategory={selectedCategory}
      />
      <Ul>
        {items.map((item: any) => {
          if (item && item.category === selectedCategory) {
            return (
              <Li
                key={item.guid}
                onClick={() => {
                  selectItem({
                    entity,
                    name: item[displayedKey],
                    value: 3000,
                    link: [linkId],
                    ...item,
                  });
                  close();
                }}
              >
                {item[displayedKey]}
              </Li>
            );
          }
          return null;
        })}
      </Ul>
    </Root>
  );
};

export default TreePanel;
