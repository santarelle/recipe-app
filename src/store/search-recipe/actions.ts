import { Recipe } from 'src/models/Recipe';

import {
  SearchRecipeLoadAction,
  SearchRecipeSucessAction,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
} from './types';

export const searchRecipeLoad = (term: string): SearchRecipeLoadAction => ({
  type: SEARCH_REQUEST,
  payload: { term },
});

export const searchRecipeSucess = (
  recipes: Recipe[],
): SearchRecipeSucessAction => ({
  type: SEARCH_SUCCESS,
  payload: { recipes },
});
