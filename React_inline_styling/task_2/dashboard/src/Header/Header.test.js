import React from 'react';
import { shallow } from "../../config/setupTests.mjs";
import Header from './Header.js';
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('Header renders', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.exists()).toBe(true);
});

test('Header renders img and h1 tags', () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.children().find('img').exists()).toBe(true);
  expect(wrapper.children().find('h1').exists()).toBe(true);
});
