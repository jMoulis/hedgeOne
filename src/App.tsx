import React, { useState, useEffect } from 'react';
import styled from '@emotion/styled';
import Axios from 'axios';
import { connect } from 'react-redux';
import LeftPanel from 'components/LeftPanel';
import Header from 'components/Header';
// eslint-disable-next-line import/no-unresolved
import { MenuProps } from 'components/Force/forceDirected';
import { Tab } from 'components/Tab';
import { setTabs } from 'store/reducers/tabReducer';

const Root = styled.main`
  display: grid;
  position: relative;
  height: 100%;
  grid-template-areas:
    'header header'
    'leftPanel content';
  grid-template-columns: 20rem auto;
  grid-template-rows: 5rem auto;
`;

const Home = () => {
  return (
    <div>
      <h1>HomePage</h1>
      <p>Un dashboard de ouf</p>
    </div>
  );
};

const Content = styled.div`
  grid-area: content;
`;

const App = ({ setTabsAction }) => {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [menu, setMenu] = useState<MenuProps[]>([]);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await Axios({
          method: 'get',
          url: `data/config.json`,
        });
        setMenu(data.menu);
        setIsLoading(false);
      } catch (err) {
        setIsLoading(false);
        setError(err.message);
      }
    };
    fetchData();
  }, []);

  return (
    <Root>
      {error && <span>{error}</span>}
      <Header />
      {isLoading ? (
        <span>Chargement en cours</span>
      ) : (
        <>
          <LeftPanel
            menu={menu}
            setSelectedMenu={item => {
              setTabsAction(item);
            }}
          />
          <Content>
            <Tab />
          </Content>
        </>
      )}
    </Root>
  );
};

const mapDispatchToProps = dispatch => ({
  setTabsAction: tab => {
    dispatch(setTabs(tab));
  },
});

export default connect(
  null,
  mapDispatchToProps
)(App);