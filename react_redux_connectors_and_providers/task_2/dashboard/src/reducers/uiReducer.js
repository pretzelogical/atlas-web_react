import * as UI_ACTION_TYPES from '../actions/uiActionTypes.js';
import { Map as ImmutableMap } from 'immutable';

const initialState = ImmutableMap({
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {},
});

export default function uiReducer(state = initialState, action) {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case UI_ACTION_TYPES.DISPLAY_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', true);
    case UI_ACTION_TYPES.HIDE_NOTIFICATION_DRAWER:
      return state.set('isNotificationDrawerVisible', false);
    case UI_ACTION_TYPES.LOGIN_SUCCESS:
      return state.setIn(['user', 'isLoggedIn'], true);
    case UI_ACTION_TYPES.LOGIN_FAILURE:
      return state.setIn(['user', 'isLoggedIn'], false);
    case UI_ACTION_TYPES.LOGIN:
      let loggedInState = state.setIn(['user', 'email'], action.user.email);
      loggedInState = loggedInState.setIn(['user', 'password'], action.user.password);
      return loggedInState;
    case UI_ACTION_TYPES.LOGOUT:
      let loggedOutState = state.setIn(['user', 'email'], '');
      loggedOutState = loggedOutState.setIn(['user', 'password'], '');
      return loggedOutState.setIn(['user', 'isLoggedIn'], false);
    default:
      return state;
  }
}
