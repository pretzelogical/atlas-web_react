import * as ACTION_TYPES from "./courseActionTypes.js";
import { bindActionCreators } from 'redux';
import { store } from '../index.js';

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

export const boundSelectCourse = bindActionCreators(selectCourse, store.dispatch);
export const boundUnselectCourse = bindActionCreators(unselectCourse, store.dispatch);