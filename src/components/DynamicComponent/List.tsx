import React, { useEffect, useState } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import styled from '@emotion/styled';
import { setTabs } from 'store/reducers/tabReducer';
import { Button } from 'components/Force/Templates';

const Buttons = styled.div`
  display: flex;
`;

const Root = styled.ul`
  display: flex;
`;

const ListItem = styled.li`
  padding: 1rem;
  text-align: center;
  text-transform: capitalize;
  transition: all 150ms;
  display: flex;
  align-items: center;
  overflow: hidden;
  justify-content: space-between;
  border-bottom: 1px solid lightGray;
  &:hover {
    background-color: #e4e4e4;
  }
`;
// TODO: Add dynamic displayedField

interface Props {
  activeTab?: any | null;
  setTabsAction: Function;
}

function List<Props>({ activeTab, setTabsAction }) {
  const [error, setError] = useState(null);
  const [entityConfig, setEntityConfig] = useState([]);
  const [datas, setDatas] = useState([]);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `data/${activeTab.entity}Config.json`,
        });
        setEntityConfig(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    if (activeTab) {
      fetchDatas();
    }
  }, [activeTab]);

  useEffect(() => {
    const fetchDatas = async () => {
      try {
        const response = await axios({
          method: 'get',
          url: `data/${activeTab.entity}.json`,
        });
        setDatas(response.data);
      } catch (err) {
        setError(err.message);
      }
    };
    if (entityConfig && activeTab) {
      fetchDatas();
    }
  }, [entityConfig, activeTab]);

  return (
    <>
      {error && <span>{error}</span>}
      <Button
        width={20}
        onClick={() => {
          const tab = {
            entity: activeTab.entity,
            label: 'Nouveau',
            type: 'document',
            isCreation: true,
          };
          setTabsAction(tab);
        }}
      >
        {`Créer une ${activeTab.entity}`}
      </Button>
      <ul>
        {datas &&
          datas.map((data: any) => {
            return (
              <ListItem key={data.id.value}>
                <Root>
                  {Object.keys(data).map(key => {
                    if (!data[key].displayList) return null;
                    if (
                      typeof data[key].value !== 'string' &&
                      typeof data[key].value !== 'number'
                    )
                      return null;
                    return (
                      <ListItem
                        key={key}
                        onClick={() => {
                          const tab = {
                            entity: data.entity.value,
                            label: data.name.value,
                            selectedItemId: data.id.value,
                            type: 'document',
                          };
                          setTabsAction(tab);
                        }}
                      >
                        {data[key].value}
                      </ListItem>
                    );
                  })}
                </Root>
                <Buttons>
                  <Button
                    type="button"
                    bgColor="green"
                    color="white"
                    width={2}
                    height={2}
                    radius={2}
                  />
                  <Button
                    type="button"
                    bgColor="red"
                    color="white"
                    width={2}
                    height={2}
                    radius={2}
                  />
                </Buttons>
              </ListItem>
            );
            // return <ListItem key={key}>{entityItem[key]}</ListItem>;
          })}
      </ul>
    </>
  );
}

const mapStateToProps = ({ tabReducer }) => ({
  activeTab: tabReducer.activeTab,
});

const mapDispatchToProps = dispatch => ({
  setTabsAction: tab => {
    dispatch(setTabs(tab));
  },
});
export default connect(
  mapStateToProps,
  mapDispatchToProps
)(List);
