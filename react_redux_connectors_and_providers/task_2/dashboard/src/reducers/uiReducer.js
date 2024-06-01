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
      return state
        .setIn(['user', 'email'], action.user.email)
        .setIn(['user', 'password'], action.user.password);
    case UI_ACTION_TYPES.LOGOUT:
      return state
        .setIn(['user', 'isLoggedIn'], false)
        .setIn(['user', 'email'], '')
        .setIn(['user', 'password'], '');
    default:
      return state;
  }
}
