/**
 * State
 */
export interface MenuCategoryState {
  open: boolean;
}

/**
 * Constants
 */
export const TOGGLE = '@menuCategory/TOGGLE';

/**
 * Actions Types
 */
export interface MenuCategoryToggleAction {
  type: typeof TOGGLE;
}
