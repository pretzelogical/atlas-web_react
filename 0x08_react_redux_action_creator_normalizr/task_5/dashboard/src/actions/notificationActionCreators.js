import * as NotificationActionTypes from './notificationActionTypes.js';


export const markAsRead = (index) => ({
  type: NotificationActionTypes.MARK_AS_READ,
  index
});

export const setNotificationFilter = (filter) => ({
  type: NotificationActionTypes.SET_TYPE_FILTER,
  filter
});