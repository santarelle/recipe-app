import { Recipe } from 'src/models/Recipe';

/**
 * State
 */
export interface LoadRecipeState {
  recipe: Recipe | undefined;
  loading: boolean;
}

/**
 * Constants
 */
export const LOAD_REQUEST = '@loadRecipe/LOAD_REQUEST';
export const LOAD_SUCCESS = '@loadRecipe/LOAD_SUCCESS';

/**
 * Actions Types
 */
export interface LoadRecipeRequestAction {
  type: typeof LOAD_REQUEST;
  payload: {
    titleUnique: string;
  };
}

export interface LoadRecipeSucessAction {
  type: typeof LOAD_SUCCESS;
  payload: {
    recipe: Recipe;
  };
}

export type LoadRecipeActionTypes =
  | LoadRecipeRequestAction
  | LoadRecipeSucessAction;
