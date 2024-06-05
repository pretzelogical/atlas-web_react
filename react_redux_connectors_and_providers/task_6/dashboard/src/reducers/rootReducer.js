import courseReducer from './courseReducer.js';
import notificationReducer from './notificationReducer.js';
import uiReducer from './uiReducer.js';
import { combineReducers } from 'redux';

export default combineReducers({
  courses: courseReducer,
  notifications: notificationReducer,
  ui: uiReducer,
});
