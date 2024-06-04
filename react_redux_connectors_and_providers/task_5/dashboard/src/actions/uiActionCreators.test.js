import * as UiActionCreators from './uiActionCreators.js';
import * as UiActionTypes from './uiActionTypes.js';
import { thunk } from 'redux-thunk';
import { configureStore, fetchMock } from '../../config/setupTests.mjs';
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const mockStore = configureStore([thunk]);

test('login returns the correct action object', () => {
  expect(UiActionCreators.login('joemail@joemail.joe', 'joe')).toEqual({
    type: UiActionTypes.LOGIN,
    user: {
      email: 'joemail@joemail.joe',
      password: 'joe',
    },
  });
});

test('logout returns the correct action object', () => {
  expect(UiActionCreators.logout()).toEqual({
    type: UiActionTypes.LOGOUT,
  });
});

test('displayNotificationDrawer returns the correct action object', () => {
  expect(UiActionCreators.displayNotificationDrawer()).toEqual({
    type: UiActionTypes.DISPLAY_NOTIFICATION_DRAWER,
  });
});

test('hideNotificationDrawer returns the correct action object', () => {
  expect(UiActionCreators.hideNotificationDrawer()).toEqual({
    type: UiActionTypes.HIDE_NOTIFICATION_DRAWER,
  });
});

test('loginRequest updates the store with LOGIN and LOGIN_SUCCESS if the api return correct', () => {
  const store = mockStore({});
  fetchMock.enableMocks();
  fetchMock.mockResponseOnce(JSON.stringify({}));

  store
    .dispatch(UiActionCreators.loginRequest('email', 'password'))
    .then(() =>
      expect(store.getActions()).toEqual([
        {
          type: UiActionTypes.LOGIN,
          user: { email: 'email', password: 'password' },
        },
        { type: UiActionTypes.LOGIN_SUCCESS },
      ]),
    );
  fetchMock.disableMocks();
});

test('loginRequest updates the store with LOGIN and LOGIN_FAILURE if the api return correct', () => {
  const store = mockStore({});
  fetchMock.enableMocks();
  fetchMock.mockRejectOnce(JSON.stringify({}));

  store
    .dispatch(UiActionCreators.loginRequest('email', 'password'))
    .then(() =>
      expect(store.getActions()).toEqual([
        {
          type: UiActionTypes.LOGIN,
          user: { email: 'email', password: 'password' },
        },
        { type: UiActionTypes.LOGIN_FAILURE },
      ]),
    );
  fetchMock.disableMocks();
});
