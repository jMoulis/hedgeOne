import React, { useState, useEffect } from 'react';
import { Route, Switch } from 'react-router-dom';
import styled from '@emotion/styled';
import Axios from 'axios';
import Force from './forceDirected/Force';
import LeftPanel from './forceDirected/LeftPanel';
import Header from './forceDirected/Header';
// eslint-disable-next-line import/no-unresolved
import { MenuProps } from './forceDirected/forceDirected';

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
const App = () => {
  const [error, setError] = useState<string>('');
  const [isLoading, setIsLoading] = useState<boolean>(true);
  const [menus, setMenus] = useState<MenuProps[] | null>(null);
  useEffect(() => {
    setIsLoading(true);
    const fetchData = async () => {
      try {
        const { data } = await Axios({
          method: 'get',
          url: `data/config.json`,
        });
        setMenus(data.menus);
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
          <LeftPanel menus={menus} />
          <Content>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/:entity" component={Force} />
            </Switch>
          </Content>
        </>
      )}
    </Root>
  );
};

export default App;
