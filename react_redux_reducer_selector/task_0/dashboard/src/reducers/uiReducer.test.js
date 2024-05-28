import uiReducer from './uiReducer.js';
import * as UI_ACTION_TYPES from '../actions/uiActionTypes.js';
import * as COURSE_ACTION_CREATORS from '../actions/courseActionCreators.js';
import * as UI_ACTION_CREATORS from '../actions/uiActionCreators.js';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
};

test('That the state returned by uiReducer when no action is passed is the same as the initial state', () => {
  expect(uiReducer(initialState)).toEqual(initialState);
});

test('That the state returned by uiReducer when SELECT_COURSE is passed is the same as the initial state', () => {
  expect(
    uiReducer(initialState, COURSE_ACTION_CREATORS.selectCourse(0)),
  ).toEqual(initialState);
});

test(
  'That the state returned by uiReducer when DISPLAY_NOTIFICATION_DRAWER ' +
    'is passed that state.isNotificationDrawerVisible === true',
  () => {
    expect(
      uiReducer(initialState, UI_ACTION_CREATORS.displayNotificationDrawer()),
    ).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true
    });
  },
);
