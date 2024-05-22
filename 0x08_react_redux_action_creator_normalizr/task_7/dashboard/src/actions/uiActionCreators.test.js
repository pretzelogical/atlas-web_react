import * as UiActionCreators from './uiActionCreators.js';
import * as UiActionTypes from './uiActionTypes.js';
import ReduxMockStore from 'redux-mock-store';

const configureStore = ReduxMockStore.default;

const mockStore = configureStore();

test('login returns the correct action object', () => {
  expect(UiActionCreators.login('joemail@joemail.joe', 'joe')).toEqual({
    type: UiActionTypes.LOGIN,
    user: {
      email: 'joemail@joemail.joe',
      password: 'joe'
    }
  })
});

test('logout returns the correct action object', () => {
  expect(UiActionCreators.logout()).toEqual({
    type: UiActionTypes.LOGOUT
  })
});

test('displayNotificationDrawer returns the correct action object', () => {
  expect(UiActionCreators.displayNotificationDrawer()).toEqual({
    type: UiActionTypes.DISPLAY_NOTIFICATION_DRAWER
  })
});

test('hideNotificationDrawer returns the correct action object', () => {
  expect(UiActionCreators.hideNotificationDrawer()).toEqual({
    type: UiActionTypes.HIDE_NOTIFICATION_DRAWER
  })
});

test.skip('loginRequest updates the store with LOGIN and LOGIN_SUCCESS if the api return correct', () => {
  const store = mockStore({});

  store.dispatch(UiActionCreators.displayNotificationDrawer());

  console.log(store.getActions());
});