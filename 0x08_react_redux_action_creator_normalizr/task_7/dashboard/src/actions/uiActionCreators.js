import * as ACTION_TYPES from './uiActionTypes.js';
import { bindActionCreators } from 'redux';
import store from '../store.js';

export const login = (email, password) => {
  return {
    type: ACTION_TYPES.LOGIN,
    user: { email, password }
  }
}

export const logout = () => {
  return {
    type: ACTION_TYPES.LOGOUT,
  }
}

export const displayNotificationDrawer = () => {
  return {
    type: ACTION_TYPES.DISPLAY_NOTIFICATION_DRAWER
  }
}

export const hideNotificationDrawer = () => {
  return {
    type: ACTION_TYPES.HIDE_NOTIFICATION_DRAWER
  }
}

export const boundLogin = bindActionCreators(login, store.dispatch);
export const boundLogout = bindActionCreators(logout, store.dispatch);
export const boundDisplayNotificationDrawer = bindActionCreators(displayNotificationDrawer, store.dispatch);
export const boundHideNotificationDrawer = bindActionCreators(hideNotificationDrawer, store.dispatch);