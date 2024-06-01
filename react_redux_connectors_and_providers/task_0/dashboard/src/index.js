import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
import './index.css';
import { createStore } from "redux";
import { Map as ImmutableMap } from 'immutable';
import uiReducer from './reducers/uiReducer.js';
import { Provider } from "react-redux";

export const store = createStore(uiReducer, ImmutableMap({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
}));
const root = document.getElementById('root');

function Root() {
  return (
    <React.StrictMode>
      <Provider store={store}>
        <App />
      </Provider>
    </React.StrictMode>
  )
}

console.log(root);
ReactDOM.render(<Root />, root);
