import { createBrowserHistory } from 'history';
import React from 'react';
import { Switch, Route } from 'react-router-dom';

import { CategoriesPage } from 'src/pages/categories/CategoriesPage';
import { RecipeDetailPage } from 'src/pages/recipe-detail/RecipeDetailPage';
import { RecipeListPage } from 'src/pages/recipe-list/RecipeListPage';
import { SearchPage } from 'src/pages/search/SearchPage';

export const history = createBrowserHistory();

export const Routes = () => (
  <Switch>
    <Route path="/" exact component={RecipeListPage} />
    <Route path="/recipe/:title" component={RecipeDetailPage} />
    <Route path="/search" component={SearchPage} />
    <Route path="/categories/:name" component={CategoriesPage} />
    <Route path="*" component={() => <h1>Page not Found!</h1>} />
  </Switch>
);
