import * as CourseActionCreators from './courseActionCreators.js';


test('Selecting a course', () => {
  expect(CourseActionCreators.selectCourse(1)).toEqual({
    type: 'SELECT_COURSE',
    index: 1
  })
});

test('Unselecting a course', () => {
  expect(CourseActionCreators.unselectCourse(1)).toEqual({
    type: 'UNSELECT_COURSE',
    index: 1
  })
});