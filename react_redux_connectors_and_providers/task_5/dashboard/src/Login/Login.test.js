import React from 'react';
import { shallow } from "../../config/setupTests.mjs";
import { render, screen, fireEvent } from '@testing-library/react';
import Login from './Login.js';
import { StyleSheetTestUtils } from "aphrodite";

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

test('Submit button is disabled by default', () => {
  render(<Login />);
  const submitButton = screen.getByText('OK');

  expect(submitButton.disabled).toBe(true);
});

test('Submit button is enabled after email and password are filled', () => {
  render(<Login />);
  const submitButton = screen.getByText('OK');
  const [email, password] = screen.getAllByRole('textbox');

  fireEvent.change(email, { target: { value: 'funni@funnimail.com' } });
  fireEvent.change(password, { target: { value: '0xdeadbeef' } });

  expect(submitButton.disabled).toBe(false);
});