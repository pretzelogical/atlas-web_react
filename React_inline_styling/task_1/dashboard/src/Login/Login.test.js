import React from 'react';
import { shallow } from "../../config/setupTests.mjs";
import Login from './Login.js';
import { StyleSheetTestUtils } from 'aphrodite';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test('Login renders', () => {
  const wrapper = shallow(<Login />);
  expect(wrapper.exists()).toBe(true);
});

test('Login renders 2 input tags and 2 label tags', () => {
  const wrapper = shallow(<Login />);
  for (let i = 0; i <= 1; i++) {
    expect(wrapper.find('.App-body-login div').at(i)
      .find('input').length).toBe(1);
    expect(wrapper.find('.App-body-login div').at(i)
      .find('label').length).toBe(1);
  }
});