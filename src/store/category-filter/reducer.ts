import {
  CategoryFilterState,
  CategoryFilterActionTypes,
  FILTER_REQUEST,
  FILTER_SUCCESS,
} from 'src/store/category-filter/types';

const INITIAL_STATE: CategoryFilterState = {
  recipes: [],
  categoryName: '',
  loading: false,
};

export const categoryFilter = (
  state = INITIAL_STATE,
  action: CategoryFilterActionTypes,
): CategoryFilterState => {
  switch (action.type) {
    case FILTER_REQUEST:
      return {
        ...state,
        categoryName: action.payload.categoryName,
        loading: true,
      };

    case FILTER_SUCCESS:
      return { ...state, recipes: action.payload.recipes, loading: false };
    default:
      return state;
  }
};
