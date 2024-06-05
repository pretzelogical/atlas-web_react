import * as NOTIFICATION_ACTION_TYPES from './notificationActionTypes.js';

export const markAsRead = (index) => ({
  type: NOTIFICATION_ACTION_TYPES.MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: NOTIFICATION_ACTION_TYPES.SET_TYPE_FILTER,
  filter,
});

export const fetchNotificationsSuccess = (data) => ({
  type: NOTIFICATION_ACTION_TYPES.FETCH_NOTIFICATIONS_SUCCESS,
  data,
});

export const setLoadingState = (state) => ({
  type: NOTIFICATION_ACTION_TYPES.SET_LOADING_STATE,
  state,
});

export const setNotifications = (data = []) => ({
  type: NOTIFICATION_ACTION_TYPES.FETCH_NOTIFICATIONS_SUCCESS,
  data,
});

export const fetchNotifications = () => {
  return async (dispatch) => {
    dispatch(setLoadingState(true));
    try {
      const data = await (await fetch(
        'http://localhost:8080/static/notifications.json',
      )).json();
      console.log(data);
      dispatch(setNotifications(data));
    } catch (error) {
      console.log(error);
    }
    dispatch(setLoadingState(false));
  };
};

