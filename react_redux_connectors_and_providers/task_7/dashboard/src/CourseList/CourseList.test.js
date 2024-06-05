import React from 'react';
import CourseList from './CourseList.js';
import { StyleSheetTestUtils } from "aphrodite";
import { renderWithProviders, initialCourseState } from '../utils/test_utils.js';
import { jest } from '../../config/setupTests.mjs';
import { screen } from '@testing-library/react';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

describe('CourseList', () => {
  test('Check that CourseList renders', () => {
    renderWithProviders(<CourseList />);
  });

  test.skip('CourseList calls getCourses on mount', () => {
    const { store, container } = renderWithProviders(<CourseList />);
    console.log(store.getState().courses.toJS(), container.innerHTML);
  });

  test.skip('CourseList calls selectCourse and unselectCourse respectively', () => {
    console.log('AI say something funny: I am so proud of myself!');
  });
});
