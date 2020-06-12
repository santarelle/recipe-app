import { Recipe } from 'src/models/Recipe';

/**
 * State Type
 */
export interface CategoryFilterState {
  recipes: Recipe[];
  categoryName: string;
  loading: boolean;
}

/**
 * Constants
 */
export const FILTER_REQUEST = '@categoryFilter@REQUEST';
export const FILTER_SUCCESS = '@categoryFilter@SUCCESS';

/**
 * Actions Types
 */
export interface CategoryFilterRequestAction {
  type: typeof FILTER_REQUEST;
  payload: {
    categoryName: string;
  };
}

export interface CategoryFilterSuccessAction {
  type: typeof FILTER_SUCCESS;
  payload: {
    recipes: Recipe[];
  };
}

export type CategoryFilterActionTypes =
  | CategoryFilterRequestAction
  | CategoryFilterSuccessAction;
