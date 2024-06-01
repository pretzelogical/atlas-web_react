import React from 'react'
import { render } from '@testing-library/react'
import { Provider } from 'react-redux'
import { createStore } from 'redux';

/**
 * Renders the given UI component with the provided Redux store and initial state.
 *
 * @param {React.Component} ui - The UI component to render.
 * @param {Function} reducer - The Redux reducer function.
 * @param {Object} [initialState={}] - The initial state for the Redux store.
 * @param {Object} [renderOptions={}] - Additional options to pass to the RTL render function.
 * @return {Object} An object containing the Redux store and all of RTL's query functions.
 */
export function renderWithProviders(ui, reducer, initialState = {}, renderOptions = {}) {
  const store = createStore(reducer, initialState);

  const Wrapper = ({ children }) => (
    <Provider store={store}>{children}</Provider>
  )

  // Return an object with the store and all of RTL's query functions
  return {
    store,
    ...render(ui, { wrapper: Wrapper, ...renderOptions })
  }
}