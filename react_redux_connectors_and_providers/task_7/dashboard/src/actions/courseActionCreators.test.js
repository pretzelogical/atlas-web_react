import * as CourseActionCreators from './courseActionCreators.js';
import * as CourseActionTypes from './courseActionTypes.js';
import { StyleSheetTestUtils } from "aphrodite";
import { jest } from '../../config/setupTests.mjs';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('Selecting a course', () => {
  expect(CourseActionCreators.selectCourse(1)).toEqual({
    type: CourseActionTypes.SELECT_COURSE,
    index: 1
  })
});

test('Unselecting a course', () => {
  expect(CourseActionCreators.unselectCourse(1)).toEqual({
    type: CourseActionTypes.UNSELECT_COURSE,
    index: 1
  })
});

test('fetching course', async () => {
  const fakeDispatch = jest.fn();
  await CourseActionCreators.fetchCourses()(fakeDispatch);
  expect(fakeDispatch).toHaveBeenCalled();
  expect(fakeDispatch).toHaveBeenCalledWith(
    expect.objectContaining({
      type: CourseActionTypes.FETCH_COURSE_SUCCESS,
      data: expect.any(Object)
    })
  );
});