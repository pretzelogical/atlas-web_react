import React from "react";
import CourseListRow from "./CourseListRow.js";
import { shallow } from "../../config/setupTests.mjs";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test(
  'CourseListRow correctly renders one cell when isHeader = true',
  () => {
    const wrapper = shallow(<CourseListRow isHeader={true} />);
    expect(wrapper.is('tr')).toBe(true);
    expect(wrapper.find('th').length).toBe(1);
});


test(
  'CourseListRow correctly renders two cells when isHeader = true & textSecondCell is present',
  () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={true}
        textSecondCell={'test'}
      />
    );
    expect(wrapper.is('tr')).toBe(true);
    expect(wrapper.find('th').length).toBe(2);
});


test(
  'CourseListRow correctly renders two td elements within a tr element',
  () => {
    const wrapper = shallow(
      <CourseListRow
        isHeader={false}
      />
    );
    expect(wrapper.is('tr')).toBe(true);
    expect(wrapper.find('td').length).toBe(2);
});
