import { createStore, applyMiddleware } from 'redux';
import rootReducer from './reducers/rootReducer.js';
import { thunk } from 'redux-thunk';
import { composeWithDevTools } from '@redux-devtools/extension';

const store = createStore(
  rootReducer,
  undefined,
  composeWithDevTools(applyMiddleware(thunk)),
);
export default store;
