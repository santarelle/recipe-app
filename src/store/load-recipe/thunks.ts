import { Dispatch } from 'redux';

import FavoriteRecipeService from 'src/services/favorite-recipe.service';
import TheMealDBService from 'src/services/themealdb.service';
import * as LoadRecipeActions from 'src/store/load-recipe/actions';

export const loadRecipe = (title: string) => (dispatch: Dispatch): void => {
  const [id, _title] = title.split(' ');
  dispatch(LoadRecipeActions.loadRecipeRequest(_title));

  const saved = FavoriteRecipeService.getById(id);
  if (saved) {
    dispatch(LoadRecipeActions.loadRecipeSucess(saved));
  } else {
    TheMealDBService.findById(id).then((recipe) => {
      if (recipe) {
        dispatch(LoadRecipeActions.loadRecipeSucess(recipe));
      } else {
        // TODO: Modify to use dispatch() with errors, displaying a alert to users
        // eslint-disable-next-line no-console
        console.error(`Error recipe ${title} not found`);
      }
    });
  }
};
