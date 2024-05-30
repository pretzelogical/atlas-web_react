import * as COURSE_ACTION_TYPES from '../actions/courseActionTypes.js'
import { List as ImmutableList } from 'immutable';


export default function courseReducer(state = ImmutableList(), action) {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case COURSE_ACTION_TYPES.FETCH_COURSE_SUCCESS:
      return ImmutableList(action.data).map((course) => ({...course, isSelected: false}));

    case COURSE_ACTION_TYPES.UNSELECT_COURSE:
      return state.map((course) => course.id === action.index ? { ...course, isSelected: false } : course);

    case COURSE_ACTION_TYPES.SELECT_COURSE:
      return state.map((course) => course.id === action.index ? { ...course, isSelected: true } : course);

    default:
      return state;
  }
}