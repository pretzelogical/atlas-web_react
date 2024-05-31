import notificationReducer from './notificationReducer.js';
import * as NOTIFICATION_ACTION_TYPES from '../actions/notificationActionTypes.js';
import * as NOTIFICATION_ACTION_CREATORS from '../actions/notificationActionCreators.js';
import { Map as ImmutableMap } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications.js';

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
  const transformedNotifs = notificationReducer(
    initialState,
    NOTIFICATION_ACTION_CREATORS.fetchNotificationsSuccess(testData),
  ).toJS();
  for (const res of transformedNotifs.data.result) {
    transformedNotifs.data.entities.notifications[res].isRead = false;
  }
  expect(transformedNotifs.data).toEqual(initializedNormalizedTestData);
});

test('notificationReducer correctly marks a notification as read when using markAsRead', () => {
  const notifs = notificationReducer(
    ImmutableMap({ ...initialState, data: initializedNormalizedTestData }),
    NOTIFICATION_ACTION_CREATORS.markAsRead(1),
  ).toJS();
  expect(notifs.data.entities.notifications[1].isRead).toBe(true);
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
