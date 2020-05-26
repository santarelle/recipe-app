import { Recipe } from 'src/models/Recipe';

import {
  LoadRecipeRequestAction,
  LOAD_REQUEST,
  LOAD_SUCCESS,
  LoadRecipeSucessAction,
} from './types';

export const loadRecipeRequest = (
  titleUnique: string,
): LoadRecipeRequestAction => ({
  type: LOAD_REQUEST,
  payload: {
    titleUnique,
  },
});

export const loadRecipeSucess = (recipe: Recipe): LoadRecipeSucessAction => ({
  type: LOAD_SUCCESS,
  payload: { recipe },
});
