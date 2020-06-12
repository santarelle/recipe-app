import {
  SearchRecipeState,
  SearchRecipeActionTypes,
  SEARCH_REQUEST,
  SEARCH_SUCCESS,
} from './types';

const INITIAL_STATE: SearchRecipeState = {
  term: '',
  recipes: [],
  loading: false,
};

export const searchRecipe = (
  state = INITIAL_STATE,
  action: SearchRecipeActionTypes,
): SearchRecipeState => {
  switch (action.type) {
    case SEARCH_REQUEST:
      return {
        ...state,
        term: action.payload.term,
        loading: true,
      };

    case SEARCH_SUCCESS:
      return { ...state, recipes: action.payload.recipes, loading: false };

    default:
      return state;
  }
};
