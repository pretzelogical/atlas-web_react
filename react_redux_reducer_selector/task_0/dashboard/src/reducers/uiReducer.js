import * as UI_ACTION_TYPES from '../actions/uiActionTypes.js';

const initialState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: false,
  user: {}
};


export default function uiReducer(state = initialState, action) {
  if (!action) {
    return state
  }
  switch (action.type) {
    case UI_ACTION_TYPES.DISPLAY_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: true
      }
    case UI_ACTION_TYPES.HIDE_NOTIFICATION_DRAWER:
      return {
        ...state,
        isNotificationDrawerVisible: false
      }
    case UI_ACTION_TYPES.LOGIN_SUCCESS:
      return {
        ...state,
        isUserLoggedIn: true
      }
    case UI_ACTION_TYPES.LOGIN_FAILURE:
      return {
        ...state,
        isUserLoggedIn: false
      }
    case UI_ACTION_TYPES.LOGOUT:
      return {
        ...state,
        isUserLoggedIn: false
      }
    default:
      return state;
  }
}