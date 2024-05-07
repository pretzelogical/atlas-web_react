import React from 'react';
import ReactDOM from 'react-dom';
import App from './App/App.js';

const root = document.getElementById('root');

function Root () {
  return (
    <React.StrictMode>
      <App />
    </React.StrictMode>
  )
}


ReactDOM.render(<Root />, root);
