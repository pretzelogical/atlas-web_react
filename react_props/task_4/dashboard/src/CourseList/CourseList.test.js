import React from "react";
import { shallow } from "../../config/setupTests.mjs";
import CourseList from "./CourseList.js";


test('Check that CourseList renders', () => {
  const wrapper = shallow(<CourseList />);
  expect(wrapper.exists()).toBe(true);
});


test('Check that CourseList renders the 5 different rows', () => {
  const wrapper = shallow(<CourseList />);
  expect(wrapper.find('CourseListRow').length).toBe(5);
});
