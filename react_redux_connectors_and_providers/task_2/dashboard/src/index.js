import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
import './index.css';
import { createStore } from "redux";
import { fromJS } from 'immutable';
import uiReducer from './reducers/uiReducer.js';
import { Provider } from "react-redux";

const store = createStore(uiReducer, fromJS({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
}));

store.subscribe(() => console.log(store.getState().toJS()));

export { store };
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
