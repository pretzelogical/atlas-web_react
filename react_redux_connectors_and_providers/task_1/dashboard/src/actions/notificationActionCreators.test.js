import * as NotificationActionCreators from './notificationActionCreators.js';
import * as NotificationActionTypes from './notificationActionTypes.js';
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


test('markAsRead returns the correct action object', () => {
  expect(NotificationActionCreators.markAsRead(1)).toEqual({
    type: NotificationActionTypes.MARK_AS_READ,
    index: 1,
  });
});

test('setNotificationFilter returns the correct action object', () => {
  expect(
    NotificationActionCreators.setNotificationFilter(
      NotificationActionTypes.NotificationTypeFilters['DEFAULT'],
    ),
  ).toEqual({
    type: NotificationActionTypes.SET_TYPE_FILTER,
    filter: NotificationActionTypes.NotificationTypeFilters['DEFAULT'],
  });
});
