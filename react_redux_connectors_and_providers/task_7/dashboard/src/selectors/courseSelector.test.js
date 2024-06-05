import { getCourses } from "./courseSelector.js";
import { initialCourseState } from '../utils/test_utils.js';

test('get courses', () => {
  expect(getCourses(initialCourseState))
    .toEqual(initialCourseState.courses.getIn(['entities', 'courses']).valueSeq());
});