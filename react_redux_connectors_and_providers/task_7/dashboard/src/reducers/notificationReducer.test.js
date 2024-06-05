import notificationReducer from './notificationReducer.js';
import * as NOTIFICATION_ACTION_TYPES from '../actions/notificationActionTypes.js';
import * as NOTIFICATION_ACTION_CREATORS from '../actions/notificationActionCreators.js';
import { Map as ImmutableMap } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications.js';
import { StyleSheetTestUtils } from "aphrodite";
import fs from 'fs';
import { initialNotificationState } from '../utils/test_utils.js';
import { fromJS } from 'immutable';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const initialState = ImmutableMap({
  data: [],
  filter: NOTIFICATION_ACTION_TYPES.NotificationTypeFilters.DEFAULT,
});

const testData = [
  {
    id: 1,
    type: 'default',
    value: 'New course available',
  },
  {
    id: 2,
    type: 'urgent',
    value: 'New resume available',
  },
  {
    id: 3,
    type: 'urgent',
    value: 'New data available',
  },
];

const initializedTestData = testData.map((notificationData) => ({
  ...notificationData,
  isRead: false,
}));

const initializedNormalizedTestData =
  notificationsNormalizer(initializedTestData);

test('notificationReducer correctly fetches and transforms notifications when using fetchNotificationsSuccess', () => {
  const data = JSON.parse(fs.readFileSync('./src/dist/notifications.json', 'utf8'));
  const transformedNotifs = notificationReducer(
    initialState,
    NOTIFICATION_ACTION_CREATORS.fetchNotificationsSuccess(data),
  ).toJS();
});

test('notificationReducer correctly marks a notification as read when using markAsRead', () => {
  let testNotifState = { ...initialNotificationState };
  testNotifState = testNotifState.notifications;
  testNotifState.setIn(
    ['notifications', 'messages', 'testMessage'],
    fromJS({
      guid: 'testMessage',
      value: 'test',
      priority: 'default',
      isRead: false,
    })
  );
  const result = notificationReducer(
    testNotifState,
    NOTIFICATION_ACTION_CREATORS.markAsRead('testMessage'),
  ).toJS();
  expect(result.notifications.entities.messages['testMessage'].isRead).toBe(true);
});

test('notificationReducer correctly sets the type filter', () => {
  const notifs = notificationReducer(
    ImmutableMap({ ...initialState, notifications: initializedNormalizedTestData }),
    NOTIFICATION_ACTION_CREATORS.setNotificationFilter(
      NOTIFICATION_ACTION_TYPES.NotificationTypeFilters.URGENT,
    ),
  ).toJS();
  expect(notifs.filter).toBe(
    NOTIFICATION_ACTION_TYPES.NotificationTypeFilters.URGENT,
  );
});
