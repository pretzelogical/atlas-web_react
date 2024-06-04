import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
import './index.css';
import { createStore, applyMiddleware, compose } from 'redux';
import { Map as ImmutableMap } from 'immutable';
import rootReducer from './reducers/rootReducer.js';
import { Provider } from 'react-redux';
import { thunk } from 'redux-thunk';

const reduxDevTools =
  (typeof window !== 'undefined' && window.__REDUX_DEVTOOLS_EXTENSION__) ||
  (() => (noop) => noop);

const store = createStore(
  rootReducer,
  undefined,
  // {
  //   courses: ImmutableMap(),
  //   notifications: ImmutableMap(),
  //   ui: ImmutableMap()
  // },
  compose(applyMiddleware(thunk), reduxDevTools()),
);
export { store };

const root = document.getElementById('root');

function Root() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  );
}

ReactDOM.render(<Root />, root);
