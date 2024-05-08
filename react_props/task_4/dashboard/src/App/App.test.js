import React from "react";
import App from "./App.js";
import { shallow } from "../../config/setupTests.mjs";


test('App renders', () => {
  shallow(<App />);
});


test('App renders a div with class App-header', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-header').length).toBe(1);
});

test('App renders a div with class App-body', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.find('.App-body').length).toBe(1);
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
