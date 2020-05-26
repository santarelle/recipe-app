import { Recipe } from 'src/models/Recipe';
import FavoriteRecipeService from 'src/services/favorite-recipe.service';

import {
  LoadFavoriteRecipesAction,
  LOAD_FAVORITE_RECIPES,
  RemoveFavoriteRecipeAction,
  REMOVE_FAVORITE_RECIPE,
  SaveFavoriteRecipeAction,
  SAVE_FAVORITE_RECIPE,
} from './types';

export const loadFavoriteRecipes = (): LoadFavoriteRecipesAction => ({
  type: LOAD_FAVORITE_RECIPES,
  payload: {
    recipes: FavoriteRecipeService.getFavorites(),
  },
});

export const removeFavoriteRecipe = (
  recipe: Recipe,
): RemoveFavoriteRecipeAction => ({
  type: REMOVE_FAVORITE_RECIPE,
  payload: {
    recipe,
  },
});

export const saveFavoriteRecipe = (
  recipe: Recipe,
): SaveFavoriteRecipeAction => ({
  type: SAVE_FAVORITE_RECIPE,
  payload: {
    recipe,
  },
});
