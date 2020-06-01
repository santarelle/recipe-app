import { ConnectedRouter } from 'connected-react-router';
import React from 'react';
import { Provider } from 'react-redux';

import Container from '@material-ui/core/Container';

import { CategoryMenu } from 'src/components/layout/category-menu/CategoryMenu';
import { Footer } from 'src/components/layout/footer/Footer';
import { Search } from 'src/components/layout/search/Search';
import { TopBar } from 'src/components/layout/topbar/TopBar';
import { Routes as Content, history } from 'src/routes';
import { store } from 'src/store';

export const App: React.FC = () => (
  <Provider store={store}>
    <ConnectedRouter history={history}>
      <TopBar />
      <Container maxWidth="md" className="app-container">
        <CategoryMenu />
        <Search placeholder="Search Recipes..." />
        <Content />
      </Container>
      <Footer />
    </ConnectedRouter>
  </Provider>
);
