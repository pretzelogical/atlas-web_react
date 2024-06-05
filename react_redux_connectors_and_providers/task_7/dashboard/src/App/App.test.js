import React from "react";
import App from "./App.js";
import { shallow, jest } from "../../config/setupTests.mjs";
import { render, fireEvent, screen } from '@testing-library/react';
import { StyleSheetTestUtils } from "aphrodite";
import { Provider } from "react-redux";
import { renderWithProviders, initialAppState } from "../utils/test_utils.js";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

jest.spyOn(window, 'alert').mockImplementation(() => {});

test('App renders', () => {
  renderWithProviders(<App />);
});


test('App renders with component Header', () => {
  renderWithProviders(<App />);
  expect(screen.getByRole('heading', { name: 'School Dashboard'})).toBeTruthy();
});

test('App renders with component BodySection', () => {
  renderWithProviders(<App />);
  expect(screen.getByText('News from the School')).toBeTruthy();
});

test('App renders a div with class App-footer', () => {
  renderWithProviders(<App />);
  expect(screen.getByText(/^Copyright 2020 - /)).toBeTruthy();
});

test('App does not display Login when user.isLoggedIn = true', () => {
  const appState = { ...initialAppState };
  appState.ui = appState.ui.setIn(['user', 'isLoggedIn'], true);
  renderWithProviders(<App />, appState);
  expect(() => screen.getByText('Login to access the full dashboard')).toThrow();
});

test('App logs out after crtl+h is pressed', async () => {
  const appState = { ...initialAppState };
  appState.ui = appState.ui.setIn(['user', 'isLoggedIn'], true);
  const { container, rerenderWithStore } = renderWithProviders(<App />, appState);

  fireEvent.keyDown(container, { key: 'h', ctrlKey: true });
  rerenderWithStore(<App />);

  expect(screen.getByText('Login to access the full dashboard')).toBeTruthy();
  expect(window.alert).toHaveBeenCalledWith('Logging you out');
});

test('Apps default displayDrawer state is false', async () => {
  renderWithProviders(<App />);
  expect(() => screen.getByText('Here is the list of notifications')).toThrow();
});

test('Apps changes displayDrawer state to true when calling handleDisplayDrawer', () => {
  renderWithProviders(<App />);

  // Clicking this sets displayDrawer to true
  fireEvent.click(screen.getByText('Your notifications'));

  // If displayDrawer is true, it should display the list of notifications
  expect(screen.getByText('Here is the list of notifications')).toBeTruthy();
});

test('redux user.isLoggedIn is correctly mapped to props', () => {
  const appState = { ...initialAppState };
  appState.ui = appState.ui.setIn(['user', 'isLoggedIn'], true);
  // Render the app
  const { store } = renderWithProviders(<App />, appState);

  // The CourseList should be rendered when the user is logged in
  expect(screen.findByRole('table')).toBeTruthy();
});

test('redux isNotificationDrawerVisible is correctly mapped and displays correctly', () => {
  const { store, rerenderWithStore } = renderWithProviders(<App />);

  // Clicking this sets displayDrawer to true
  fireEvent.click(screen.getByText('Your notifications'));
  rerenderWithStore(<App />);

  // The notifications drawer should be visible
  expect(screen.getByText('Here is the list of notifications')).toBeTruthy();
  expect(store.getState().ui.get('isNotificationDrawerVisible')).toBe(true);

  // Clicking this sets displayDrawer to false
  fireEvent.click(screen.getByText('x'));
  rerenderWithStore(<App />);

  // The notifications drawer should be hidden
  expect(() => screen.getByText('Here is the list of notifications')).toThrow();
  expect(store.getState().ui.get('isNotificationDrawerVisible')).toBe(false);
});
