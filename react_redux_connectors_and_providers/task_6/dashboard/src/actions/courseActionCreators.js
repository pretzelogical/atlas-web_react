import * as ACTION_TYPES from "./courseActionTypes.js";

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

export const fetchCourseSuccess = (data) => ({
  type: ACTION_TYPES.FETCH_COURSE_SUCCESS,
  data
});
