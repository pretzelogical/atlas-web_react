import * as NotificationActionTypes from "./notificationActionTypes.js";
import { bindActionCreators } from "redux";
import { store } from "../index.js";
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

export const markAsRead = (index) => ({
  type: NotificationActionTypes.MARK_AS_READ,
  index,
});

export const setNotificationFilter = (filter) => ({
  type: NotificationActionTypes.SET_TYPE_FILTER,
  filter,
});

export const fetchNotificationsSuccess = (data) => ({
  type: NotificationActionTypes.FETCH_NOTIFICATIONS_SUCCESS,
  data,
});

export const boundMarkAsRead = bindActionCreators(markAsRead, store.dispatch);
export const boundSetNotificationsFilter = bindActionCreators(
  setNotificationFilter,
  store.dispatch
);
