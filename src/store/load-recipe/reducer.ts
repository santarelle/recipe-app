import {
  LoadRecipeState,
  LoadRecipeActionTypes,
  LOAD_REQUEST,
  LOAD_SUCCESS,
} from 'src/store/load-recipe/types';

const INITIAL_STATE: LoadRecipeState = {
  recipe: undefined,
  loading: false,
};

export const loadRecipe = (
  state = INITIAL_STATE,
  action: LoadRecipeActionTypes,
): LoadRecipeState => {
  switch (action.type) {
    case LOAD_REQUEST:
      return { ...state, loading: true };

    case LOAD_SUCCESS:
      return { ...state, loading: false, recipe: action.payload.recipe };

    default:
      return state;
  }
};
