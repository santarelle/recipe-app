import {
  MenuCategoryState,
  MenuCategoryToggleAction,
  TOGGLE,
} from 'src/store/menu-category/types';

const initialState: MenuCategoryState = {
  open: true,
};

export const menuCategory = (
  state = initialState,
  action: MenuCategoryToggleAction,
): MenuCategoryState => {
  if (action.type === TOGGLE) {
    return { open: !state.open };
  }
  return state;
};
