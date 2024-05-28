import notificationReducer from './notificationReducer.js';
import * as NOTIFICATION_ACTION_TYPES from '../actions/notificationActionTypes.js';
import * as NOTIFICATION_ACTION_CREATORS from '../actions/notificationActionCreators.js';

const initialState = {
  notifications: [],
  filter: NOTIFICATION_ACTION_TYPES.NotificationTypeFilters.DEFAULT,
};

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

test('notificationReducer correctly fetches and transforms notifications when using fetchNotificationsSuccess', () => {
  expect(
    notificationReducer(
      initialState,
      NOTIFICATION_ACTION_CREATORS.fetchNotificationsSuccess(testData),
    ),
  ).toEqual({
    ...initialState,
    notifications: initializedTestData,
  });
});

test('notificationReducer correctly marks a notification as read when using markAsRead', () => {
  expect(
    notificationReducer(
      { ...initialState, notifications: initializedTestData },
      NOTIFICATION_ACTION_CREATORS.markAsRead(1),
    ),
  ).toEqual({
    ...initialState,
    notifications: initializedTestData.map((notificationData) =>
      notificationData.id === 1
        ? { ...notificationData, isRead: true }
        : notificationData,
    ),
  });
});

test('notificationReducer correctly sets the type filter', () => {
  expect(
    notificationReducer(
      { ...initialState, notifications: initializedTestData },
      NOTIFICATION_ACTION_CREATORS.setNotificationFilter(
        NOTIFICATION_ACTION_TYPES.NotificationTypeFilters.URGENT,
      ),
    ),
  ).toEqual({
    notifications: initializedTestData,
    filter: NOTIFICATION_ACTION_TYPES.NotificationTypeFilters.URGENT,
  });
});
