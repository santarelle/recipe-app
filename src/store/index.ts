import { connectRouter, routerMiddleware } from 'connected-react-router';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';

import { history } from 'src/routes';
import { favoriteRecipes } from 'src/store/favorite-recipe/reducer';
import { loadRecipe } from 'src/store/load-recipe/reducer';
import { searchRecipe } from 'src/store/search-recipe/reducer';

const rootReducer = combineReducers({
  router: connectRouter(history),
  favoriteRecipes,
  searchRecipe,
  loadRecipe,
});

const middlewares = [routerMiddleware(history), thunk];

export type AppState = ReturnType<typeof rootReducer>;

export const store = createStore(
  rootReducer,
  composeWithDevTools(applyMiddleware(...middlewares)),
);
