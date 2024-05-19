import React from "react";
import App from "./App.js";
import { shallow, jest } from "../../config/setupTests.mjs";
import { render, fireEvent, screen } from '@testing-library/react';
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

test('App does not display courselist when user.isLoggedIn = false', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.exists('CourseList')).toBe(false);
});

test('App does not display Login when user.isLoggedIn = true', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();

  instance.logIn('fakemail', '0xdeadbeef');

  expect(wrapper.exists('Login')).toBe(false);
});

test('App displays CourseList when isLoggedIn = true', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();

  instance.logIn('fakemail', '0xdeadbeef')

  expect(wrapper.exists('CourseList')).toBe(true);
});

test('App logs out after crtl+h is pressed', async () => {
  const { container } = render(<App />);
  const [email, password] = await screen.findAllByRole('textbox');
  const submitButton = await screen.getByText('OK');

  // Login to the app
  fireEvent.change(email, { target: { value: 'joemail' }});
  fireEvent.change(password, { target: { value: 'joj' }});
  fireEvent.click(submitButton);

  // Check that Login is not present and we are logged in
  expect(() => {
    screen.getByText('Login to access the full dashboard');
  }).toThrow();

  // Logout and check
  fireEvent.keyDown(container, { key: 'h', ctrlKey: true });
  expect(screen.getByText('Login to access the full dashboard')).toBeTruthy();

  expect(window.alert).toHaveBeenCalledWith('Logging you out');
});

test('Apps default displayDrawer state is false', () => {
  const wrapper = shallow(<App />);
  expect(wrapper.state('displayDrawer')).toBe(false);
});

test('Apps changes displayDrawer state to true when calling handleDisplayDrawer', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();

  instance.handleDisplayDrawer();

  expect(wrapper.state('displayDrawer')).toBe(true);
});

test('App.logIn updates the state correctly', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();

  instance.logIn();

  expect(wrapper.state('user').isLoggedIn).toBe(true);
});

test('App.logOut updates the state correctly', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();

  instance.logIn('email', 'pass');
  expect(wrapper.state('user').isLoggedIn).toBe(true);

  instance.logOut();
  expect(wrapper.state('user').isLoggedIn).toBe(false);
});

test('App.markNotificationAsRead removes the intended notification', () => {
  const wrapper = shallow(<App />);
  const instance = wrapper.instance();
  const firstListNotifications = wrapper.state('listNotifications');

  instance.markNotificationAsRead(3);

  expect(wrapper.state('listNotifications')).toStrictEqual(firstListNotifications.slice(0, 2));
});