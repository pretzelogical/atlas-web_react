import React from 'react';
import { shallow } from '../../config/setupTests.mjs';
import CourseList from './CourseList.js';
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const listCourses = [
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

describe('CourseList', () => {
  test('Check that CourseList renders', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  test('Check that CourseList renders the 5 different rows', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('CourseListRow').length).toBe(5);
  });

  test('Check that CourseList renders', () => {
    const wrapper = shallow(<CourseList />);
    expect(wrapper.exists()).toBe(true);
  });

  test('Check that CourseList renders when listCourses is passed', () => {
    const wrapper = shallow(<CourseList listCourses={listCourses} />);
    expect(wrapper.exists()).toBe(true);
    expect(wrapper.find('CourseListRow').length).toBe(5);
  });
})