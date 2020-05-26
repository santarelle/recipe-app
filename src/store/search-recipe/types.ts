import { Recipe } from 'src/models/Recipe';

/**
 * State Type
 */
export interface SearchRecipeState {
  term: string;
  recipes: Recipe[];
  loading: boolean;
}

/**
 * Constants
 */
export const SEARCH_REQUEST = '@searchRecipe/SEARCH_REQUEST';
export const SEARCH_SUCCESS = '@searchRecipe/SEARCH_SUCCESS';

/**
 * Actions Types
 */
export interface SearchRecipeLoadAction {
  type: typeof SEARCH_REQUEST;
  payload: {
    term: string;
  };
}

export interface SearchRecipeSucessAction {
  type: typeof SEARCH_SUCCESS;
  payload: {
    recipes: Recipe[];
  };
}

export type SearchRecipeActionTypes =
  | SearchRecipeLoadAction
  | SearchRecipeSucessAction;
