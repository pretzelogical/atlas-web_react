import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';
import './index.css';
import { Provider } from 'react-redux';
import store from './store.js';

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
