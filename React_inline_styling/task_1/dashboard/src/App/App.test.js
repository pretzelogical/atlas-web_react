import React from "react";
import App from "./App.js";
import { shallow, jest } from "../../config/setupTests.mjs";
import { render, fireEvent } from '@testing-library/react';
import { StyleSheetTestUtils } from "aphrodite";


beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


jest.spyOn(window, 'alert').mockImplementation(() => {});


test('App renders', () => {
  shallow(<App />);
});


test('App renders with component Header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('Header').length).toBe(1);
});

test('App renders with component BodySection', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find("BodySection").exists()).toBe(true);
});

test('App renders a div with class App-footer', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-footer').length).toBe(1);
});

test('App does not display courselist when isLoggedIn = false', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists('CourseList')).toBe(false);
});

test('App does not display Login when isLoggedIn = true', () => {
  const wrapper = shallow(<App isLoggedin={true} />);
  expect(wrapper.exists('Login')).toBe(false);
});

test('App displays CourseList when isLoggedIn = true', () => {
  const wrapper = shallow(<App isLoggedin={true} />);
  expect(wrapper.exists('CourseList')).toBe(true);
});

test('App logs out after crtl+h is pressed', () => {
  const logOutMock = jest.fn();
  const { container } = render(<App isLoggedIn={true} logOut={logOutMock}/>);

  fireEvent.keyDown(container, { key: 'h', ctrlKey: true });

  expect(window.alert).toHaveBeenCalledWith('Logging you out');
  expect(logOutMock).toHaveBeenCalled();
});
