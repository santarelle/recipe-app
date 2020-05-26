import { push } from 'connected-react-router';
import { Dispatch } from 'redux';

import TheMealDBService from 'src/services/themealdb.service';

import * as SearchRecipeActions from './actions';

export const search = (term: string) => (dispatch: Dispatch): void => {
  dispatch(SearchRecipeActions.searchRecipeLoad(term));

  TheMealDBService.search(term)
    .then((res) => dispatch(SearchRecipeActions.searchRecipeSucess(res)))
    .then(() => dispatch(push(`/search?q=${term}`)));
};
