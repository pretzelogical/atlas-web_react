import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
import './index.css';
import { createStore, applyMiddleware } from "redux";
import { fromJS } from 'immutable';
import uiReducer from './reducers/uiReducer.js';
import { Provider } from "react-redux";
import { thunk } from 'redux-thunk';

const store = createStore(uiReducer, fromJS({
  isNotificationDrawerVisible: false,
  user: {
    email: "",
    password: "",
    isLoggedIn: false
  },
}), applyMiddleware(thunk));
export { store };

store.subscribe(() => console.log(store.getState().toJS()));

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

ReactDOM.render(<Root />, root);
