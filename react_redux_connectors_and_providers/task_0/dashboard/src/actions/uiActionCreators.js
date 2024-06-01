import * as ACTION_TYPES from './uiActionTypes.js';
import { bindActionCreators } from 'redux';
import { store } from '../index.js';

export const login = (email, password) => {
  return {
    type: ACTION_TYPES.LOGIN,
    user: { email, password },
  };
};

export const logout = () => {
  return {
    type: ACTION_TYPES.LOGOUT,
  };
};

export const displayNotificationDrawer = () => {
  return {
    type: ACTION_TYPES.DISPLAY_NOTIFICATION_DRAWER,
  };
};

export const hideNotificationDrawer = () => {
  return {
    type: ACTION_TYPES.HIDE_NOTIFICATION_DRAWER,
  };
};

export const loginSuccess = () => ({
  type: ACTION_TYPES.LOGIN_SUCCESS,
});

export const loginFailure = () => ({
  type: ACTION_TYPES.LOGIN_FAILURE,
});

export const loginRequest = (email, password) => {
  return async (dispatch) => {
    try {
      dispatch(login(email, password));
      const res = await fetch(
        'http://localhost:8080/static/login-success.json',
      );
      if (res.status === 200) {
        dispatch(loginSuccess());
      } else {
        dispatch(loginFailure());
      }
    } catch (error) {
      dispatch(loginFailure());
    }
  };
};

export const boundLogin = bindActionCreators(login, store.dispatch);
export const boundLogout = bindActionCreators(logout, store.dispatch);
export const boundDisplayNotificationDrawer = bindActionCreators(
  displayNotificationDrawer,
  store.dispatch,
);
export const boundHideNotificationDrawer = bindActionCreators(
  hideNotificationDrawer,
  store.dispatch,
);
