import * as ACTION_TYPES from "./courseActionTypes";

export const selectCourse = (index) => {
  return {
    type: ACTION_TYPES.SELECT_COURSE,
    index
  }
};

export const unselectCourse = (index) => {
  return {
    type: ACTION_TYPES.UNSELECT_COURSE,
    index
  }
}