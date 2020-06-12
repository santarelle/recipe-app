import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { history } from 'src/routes';
import { categoryFilter } from 'src/store/category-filter/reducer';
import { favoriteRecipes } from 'src/store/favorite-recipe/reducer';
import { loadRecipe } from 'src/store/load-recipe/reducer';
import { menuCategory } from 'src/store/menu-category/reducer';
import { searchRecipe } from 'src/store/search-recipe/reducer';

const rootReducer = combineReducers({
  router: connectRouter(history),
  favoriteRecipes,
  searchRecipe,
  loadRecipe,
  menuCategory,
  categoryFilter,
});

const middlewares = [routerMiddleware(history), thunk];

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
