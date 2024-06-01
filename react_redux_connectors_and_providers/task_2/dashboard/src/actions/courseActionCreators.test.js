import * as CourseActionCreators from './courseActionCreators.js';
import * as CourseActionTypes from './courseActionTypes.js';
import { StyleSheetTestUtils } from "aphrodite";

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