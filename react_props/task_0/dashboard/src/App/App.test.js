import React from "react";
import App from "./App.js";
import { shallow } from "enzyme";


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

