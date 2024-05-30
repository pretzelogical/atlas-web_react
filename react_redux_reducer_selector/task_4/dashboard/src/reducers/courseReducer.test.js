import courseReducer from './courseReducer.js';
import * as COURSE_ACTION_CREATORS from '../actions/courseActionCreators.js';
import { List as ImmutableList } from 'immutable';

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

test('courseReducer returns an empty ImmutableList as its default state when no action is passed', () => {
  expect(courseReducer()).toEqual(ImmutableList());
});

test('courseReducer returns the fetched courses when the fetchCourseSuccess action creator is used', () => {
  expect(
    courseReducer(
      ImmutableList(),
      COURSE_ACTION_CREATORS.fetchCourseSuccess(sampleData),
    ).toJS(),
  ).toEqual(initalizedSampleData);
});

test('courseReducer returns a list of courses with the correct one selected when the selectCourse action creator is used', () => {
  expect(
    courseReducer(
      ImmutableList(initalizedSampleData),
      COURSE_ACTION_CREATORS.selectCourse(1),
    ).toJS(),
  ).toEqual(
    initalizedSampleData.map((data) =>
      data.id === 1 ? { ...data, isSelected: true } : data,
    ),
  );
});

test('courseReducer returns a list of courses with the correct one unselected when the unselectCourse action creator is used', () => {
  const selectedSampleData = initalizedSampleData.map((data) => ({
    ...data,
    isSelected: true,
  }));
  expect(
    courseReducer(
      ImmutableList(selectedSampleData),
      COURSE_ACTION_CREATORS.unselectCourse(1),
    ).toJS(),
  ).toEqual(
    selectedSampleData.map((data) =>
      data.id === 1 ? { ...data, isSelected: false } : data,
    ),
  );
});
