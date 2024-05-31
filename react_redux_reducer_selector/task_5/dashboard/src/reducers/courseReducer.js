import * as COURSE_ACTION_TYPES from '../actions/courseActionTypes.js';
import { Map as ImmutableMap, fromJS } from 'immutable';
import courseNormalizer from '../schema/courses.js';

export default function courseReducer(state = ImmutableMap(), action) {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case COURSE_ACTION_TYPES.FETCH_COURSE_SUCCESS:
      const normalized = courseNormalizer(action.data);
      for (const res of normalized.result) {
        normalized.entities.courses[res].isSelected = false;
      }
      return fromJS(normalized);

    case COURSE_ACTION_TYPES.SELECT_COURSE:
      return state.setIn(
        ['entities', 'courses', String(action.index), 'isSelected'],
        true,
      );
    case COURSE_ACTION_TYPES.UNSELECT_COURSE:
      return state.setIn(
        ['entities', 'courses', String(action.index), 'isSelected'],
        false,
      );

    default:
      return state;
  }
}
