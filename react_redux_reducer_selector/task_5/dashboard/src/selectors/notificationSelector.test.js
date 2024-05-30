import notificationReducer from '../reducers/notificationReducer.js';
import * as NOTIFICATION_ACTION_TYPES from '../actions/notificationActionTypes.js';
import * as NOTIFICATION_ACTION_CREATORS from '../actions/notificationActionCreators.js';
import { notificationsNormalizer } from '../schema/notifications.js';
import { Map as ImmutableMap } from 'immutable';
import * as NotificationSelectors from './notificationSelector.js';


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

const notifs = notificationReducer(
  initialState,
  NOTIFICATION_ACTION_CREATORS.fetchNotificationsSuccess(testData)
)

test('filterTypeSelected returns the value of the filter', () => {
  expect(
    NotificationSelectors.filterTypeSeleced(
      notifs
  )).toBe(NOTIFICATION_ACTION_TYPES.NotificationTypeFilters.DEFAULT);
});

test('getNotifications returns the notifications', () => {
  const notifsMap = NotificationSelectors.getNotifications(
    notifs
  );
  expect(notifsMap.constructor.name).toBe('Map');
  expect(notifsMap.get('1').id).toBe(1);
});

test('getUnreadNotifications returns the unread notifications', () => {
  const markedReadNotifs = notifs.setIn(['data', 'entities', 'notifications', 2, 'isRead'], true);
  const notifsMap = NotificationSelectors.getUnreadNotifications(
    markedReadNotifs
  );
  expect(notifsMap.constructor.name).toBe('Map');
  expect(notifsMap.get('1').isRead).toBe(false);
  expect(notifsMap.get('2')).toBe(undefined);
});