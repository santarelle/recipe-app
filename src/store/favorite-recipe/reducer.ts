import FavoriteRecipeService from 'src/services/favorite-recipe.service';

import {
  FavoriteRecipeState,
  FavoriteRecipeActionTypes,
  LOAD_FAVORITE_RECIPES,
  REMOVE_FAVORITE_RECIPE,
  SAVE_FAVORITE_RECIPE,
} from './types';

const INITIAL_STATE: FavoriteRecipeState = {
  recipes: FavoriteRecipeService.getFavorites(),
};

export const favoriteRecipes = (
  state = INITIAL_STATE,
  action: FavoriteRecipeActionTypes,
): FavoriteRecipeState => {
  switch (action.type) {
    case LOAD_FAVORITE_RECIPES:
      return { ...state, recipes: action.payload.recipes };

    case REMOVE_FAVORITE_RECIPE:
      return {
        ...state,
        recipes: state.recipes.filter(
          (recipe) => recipe.id !== action.payload.recipe.id,
        ),
      };

    case SAVE_FAVORITE_RECIPE:
      return { ...state, recipes: [...state.recipes, action.payload.recipe] };

    default:
      return state;
  }
};
