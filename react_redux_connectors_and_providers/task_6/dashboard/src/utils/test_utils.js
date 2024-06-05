import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { fromJS } from 'immutable';
import rootReducer from '../reducers/rootReducer.js';
import { applyMiddleware } from 'redux';
import { thunk } from 'redux-thunk';
import fs from 'fs';
import { notificationsNormalizer } from '../schema/notifications.js';

export const initialAppState = {
  courses: fromJS([]),
  notifications: fromJS({}),
  ui: fromJS({
    isNotificationDrawerVisible: false,
    user: {
      email: '',
      password: '',
      isLoggedIn: false
    },
  }),
};

export const initialNotificationState = (() => {
  let newAppState = { ...initialAppState };
  const data = JSON.parse(fs.readFileSync('./src/dist/notifications.json', 'utf8'));
  newAppState.notifications = fromJS({ notifications: notificationsNormalizer(data) });
  return newAppState;
})();

/**
 * Renders the given UI component with the provided Redux store and initial state.
 *
 * @param {React.Component} ui - The UI component to render.
 * @param {Object} [initialState=initialAppState] - The initial state for the Redux store.
 * @param {Function} [reducer=rootReducer] - The Redux reducer function.
 * @param {Object} [renderOptions={}] - Additional options to pass to the RTL render function.
 * @return {Object} An object containing the Redux store and all of RTL's query functions.
 */
export function renderWithProviders(ui, initialState = undefined, reducer = rootReducer, renderOptions = {}) {
  const store = createStore(reducer, initialState, applyMiddleware(thunk));

  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  )

  // Return an object with the store and all of RTL's query functions
  const renderReturn = render(ui, { wrapper: Wrapper, ...renderOptions });
  return {
    store,
    rerenderWithStore: (ui) => renderReturn.rerender(<Provider store={store}>{ui}</Provider>),
    ...renderReturn
  }
}