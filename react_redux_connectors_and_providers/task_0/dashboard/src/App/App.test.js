import React from "react";
import App from "./App.js";
import { shallow, jest } from "../../config/setupTests.mjs";
import { render, fireEvent, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from "aphrodite";
import { createStore } from "redux";
import { Map as ImmutableMap } from 'immutable';
import uiReducer from '../reducers/uiReducer.js';
import { Provider } from "react-redux";

const store = createStore(uiReducer, ImmutableMap({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
}));

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

jest.spyOn(window, 'alert').mockImplementation(() => {});

test('App renders', () => {
  render(<Provider store={store} ><App /></Provider>);
});


test('App renders with component Header', () => {
  render(<Provider store={store} ><App /></Provider>);
  expect(screen.getByRole('heading', { name: 'School Dashboard'})).toBeTruthy();
});

test('App renders with component BodySection', () => {
  render(<Provider store={store} ><App /></Provider>);
  expect(screen.getByText('News from the School')).toBeTruthy();
});

test('App renders a div with class App-footer', () => {
  render(<Provider store={store} ><App /></Provider>);
  expect(screen.getByText(/^Copyright 2020 - /)).toBeTruthy();
});

test('App does not display courselist when user.isLoggedIn = false', () => {
  const wrapper = shallow(<Provider store={store} ><App /></Provider>);
  expect(wrapper.exists('CourseList')).toBe(false);
});

// TODO: Some of these tests rely on the state of the store which we are not done with yet
//   so we are skipping it for now
test.skip('App does not display Login when user.isLoggedIn = true', () => {
  render(<Provider store={store} ><App /></Provider>);
  const [email, password] = screen.getAllByRole('textbox');

  screen.change(email, { target: { value: 'joemail' }});
  screen.change(password, { target: { value: 'joj' }});
  screen.click(screen.getByText('OK'));

  expect(wrapper.exists('Login')).toBe(false);
});

test.skip('App displays CourseList when isLoggedIn = true', () => {
  const wrapper = shallow(<Provider store={store} ><App /></Provider>);
  const instance = wrapper.instance();

  instance.logIn('fakemail', '0xdeadbeef')

  expect(wrapper.exists('CourseList')).toBe(true);
});

test.skip('App logs out after crtl+h is pressed', async () => {
  const { container } = render(<Provider store={store} ><App /></Provider>);
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

test('Apps default displayDrawer state is false', async () => {
  render(<Provider store={store} ><App /></Provider>);
  expect(() => screen.getByText('Here is the list of notifications')).toThrow();
});

test('Apps changes displayDrawer state to true when calling handleDisplayDrawer', () => {
  render(<Provider store={store} ><App /></Provider>);

  // Clicking this sets displayDrawer to true
  fireEvent.click(screen.getByText('Your notifications'));

  // If displayDrawer is true, it should display the list of notifications
  expect(screen.getByText('Here is the list of notifications')).toBeTruthy();
});

test.skip('App.logIn updates the state correctly', () => {
  const wrapper = shallow(<Provider store={store} ><App /></Provider>);
  const instance = wrapper.instance();

  instance.logIn();

  expect(wrapper.state('user').isLoggedIn).toBe(true);
});

test.skip('App.logOut updates the state correctly', () => {
  const wrapper = shallow(<Provider store={store} ><App /></Provider>);
  const instance = wrapper.instance();

  instance.logIn('email', 'pass');
  expect(wrapper.state('user').isLoggedIn).toBe(true);

  instance.logOut();
  expect(wrapper.state('user').isLoggedIn).toBe(false);
});

test('App.markNotificationAsRead removes the intended notification', () => {
  render(<Provider store={store} ><App /></Provider>);
  
  // Clicking this sets displayDrawer to true
  fireEvent.click(screen.getByText('Your notifications'));
  expect(screen.getByText('Here is the list of notifications')).toBeTruthy();

  // Making sure that that we actually have notifications and not something else
  const firstNotif = screen.getAllByRole('listitem')[0];
  expect(firstNotif.getAttribute('data-priority')).toBeTruthy();
  const firstNotifText = firstNotif.textContent;

  fireEvent.click(firstNotif);

  // The first notification should be removed
  expect(() => screen.getByText(firstNotifText)).toThrow();
});