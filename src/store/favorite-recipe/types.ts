import { Recipe } from 'src/models/Recipe';

/**
 * State Type
 */
export interface FavoriteRecipeState {
  recipes: Recipe[];
}

/**
 * Constants
 */
export const LOAD_FAVORITE_RECIPES = '@favoriteRecipe/LOAD';
export const REMOVE_FAVORITE_RECIPE = '@favoriteRecipe/REMOVE';
export const SAVE_FAVORITE_RECIPE = '@favoriteRecipe/SAVE';

/**
 * Actions Types
 */
export interface LoadFavoriteRecipesAction {
  type: typeof LOAD_FAVORITE_RECIPES;
  payload: {
    recipes: Recipe[];
  };
}

export interface RemoveFavoriteRecipeAction {
  type: typeof REMOVE_FAVORITE_RECIPE;
  payload: {
    recipe: Recipe;
  };
}

export interface SaveFavoriteRecipeAction {
  type: typeof SAVE_FAVORITE_RECIPE;
  payload: {
    recipe: Recipe;
  };
}

export type FavoriteRecipeActionTypes =
  | LoadFavoriteRecipesAction
  | RemoveFavoriteRecipeAction
  | SaveFavoriteRecipeAction;
