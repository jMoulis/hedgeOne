import React, { useEffect, useState, FunctionComponent } from 'react';
import styled from '@emotion/styled';
import { Li } from '../../forceDirected/Element';

const Category = styled.h2``;

interface Props {
  items: any[];
  setSelectedCategory: Function;
  selectItem: Function;
  entity: string;
  displayedKey: string;
  linkId: number;
  selectedCategory: string;
  close: Function;
}
const TreeNavigation: FunctionComponent<Props> = ({
  items,
  setSelectedCategory,
  selectItem,
  entity,
  displayedKey,
  linkId,
  close,
  selectedCategory,
}) => {
  const [treeNavigation, setTreeNavigation] = useState([]);
  const [collapse, setCollapse] = useState(false);

  const transformItems = listItems => {
    return listItems.reduce((acc, item) => {
      const key = item.category;
      if (!acc[key]) {
        acc[key] = [];
      }
      acc[key].push(item);
      return acc;
    }, []);
  };

  useEffect(() => {
    setTreeNavigation(transformItems(items));
  }, [items]);

  return (
    <div>
      {Object.keys(treeNavigation).map((key: string) => {
        const subItems: any[] = treeNavigation[key];
        return (
          <div key={key}>
            <Category
              onClick={() => {
                setSelectedCategory(key);
                setCollapse(prevCollapse => !prevCollapse);
              }}
            >
              {key}
            </Category>
            {collapse && key === selectedCategory && (
              <ul>
                {subItems &&
                  subItems.map(subItem => (
                    <Li
                      key={subItem.guid}
                      onClick={() => {
                        selectItem({
                          entity,
                          name: subItem[displayedKey],
                          value: 3000,
                          link: [linkId],
                          ...subItem,
                        });
                        close();
                      }}
                    >
                      {subItem.name}
                    </Li>
                  ))}
              </ul>
            )}
          </div>
        );
      })}
    </div>
  );
};

export default TreeNavigation;
