import courseReducer from './courseReducer.js';
import * as COURSE_ACTION_CREATORS from '../actions/courseActionCreators.js';
import { Map as ImmutableMap } from 'immutable';

const sampleData = [
  {
    id: 1,
    name: 'ES6',
    credit: 60,
  },
  {
    id: 2,
    name: 'Webpack',
    credit: 20,
  },
  {
    id: 3,
    name: 'React',
    credit: 40,
  },
];

const initalizedSampleData = [
  {
    id: 1,
    name: 'ES6',
    isSelected: false,
    credit: 60,
  },
  {
    id: 2,
    name: 'Webpack',
    isSelected: false,
    credit: 20,
  },
  {
    id: 3,
    name: 'React',
    isSelected: false,
    credit: 40,
  },
];

const initializedAndNormalizedSampleData = courseReducer(
  ImmutableMap(),
  COURSE_ACTION_CREATORS.fetchCourseSuccess(sampleData),
);

console.log(
  JSON.stringify(
    initializedAndNormalizedSampleData.toJS(),
    null,
    2,
  ),
);

test('courseReducer returns an empty ImmutableMap as its default state when no action is passed', () => {
  expect(courseReducer()).toEqual(ImmutableMap());
});

test('courseReducer returns the fetched courses when the fetchCourseSuccess action creator is used', () => {
  const courses = courseReducer(
    ImmutableMap(),
    COURSE_ACTION_CREATORS.fetchCourseSuccess(sampleData),
  ).toJS();

  for (const res of courses.result) {
    expect(courses.entities.courses[res]).toEqual(
      initalizedSampleData[res - 1],
    );
  }
});

test('courseReducer returns a list of courses with the correct one selected when the selectCourse action creator is used', () => {
  const courses = courseReducer(
    initializedAndNormalizedSampleData,
    COURSE_ACTION_CREATORS.selectCourse(1),
  );
  expect(courses.getIn(['entities', 'courses', '1', 'isSelected'])).toBe(true);
});

test('courseReducer returns a list of courses with the correct one unselected when the unselectCourse action creator is used', () => {
  const courses = courseReducer(
    initializedAndNormalizedSampleData,
    COURSE_ACTION_CREATORS.unselectCourse(1),
  );
  expect(courses.getIn(['entities', 'courses', '1', 'isSelected'])).toBe(false);
});
