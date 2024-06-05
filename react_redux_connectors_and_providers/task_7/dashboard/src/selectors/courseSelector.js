import { Map as ImmutableMap } from 'immutable';

export const getCourses = (state) => {
  if (!state.courses || !state.courses.getIn(['entities', 'courses'])) {
    return ImmutableMap().valueSeq();
  }
  return state.courses.getIn(['entities', 'courses']).valueSeq();
};
