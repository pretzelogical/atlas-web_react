import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux';
import { fromJS } from 'immutable';
import uiReducer from '../reducers/uiReducer';

export const initialAppState = fromJS({
  isNotificationDrawerVisible: false,
  user: {
    email: "",
    password: "",
    isLoggedIn: false
  },
});

/**
 * Renders the given UI component with the provided Redux store and initial state.
 *
 * @param {React.Component} ui - The UI component to render.
 * @param {Object} [initialState=initialAppState] - The initial state for the Redux store.
 * @param {Function} [reducer=uiReducer] - The Redux reducer function.
 * @param {Object} [renderOptions={}] - Additional options to pass to the RTL render function.
 * @return {Object} An object containing the Redux store and all of RTL's query functions.
 */
export function renderWithProviders(ui, initialState = initialAppState, reducer = uiReducer, renderOptions = {}) {
  const store = createStore(reducer, initialState);

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