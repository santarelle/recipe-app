import {
  TOGGLE,
  MenuCategoryToggleAction,
} from 'src/store/menu-category/types';

export const toggle = (): MenuCategoryToggleAction => ({
  type: TOGGLE,
});
