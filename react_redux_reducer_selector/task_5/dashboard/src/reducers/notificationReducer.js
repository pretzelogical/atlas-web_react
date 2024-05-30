import * as NOTIFICATION_ACTION_TYPES from '../actions/notificationActionTypes.js';
import { Map as ImmutableMap } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications.js';

const initialState = ImmutableMap({
  data: [],
  filter: NOTIFICATION_ACTION_TYPES.NotificationTypeFilters.DEFAULT,
});

export default function notificationReducer(state = initialState, action) {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case NOTIFICATION_ACTION_TYPES.FETCH_NOTIFICATIONS_SUCCESS:
      const normalizedNotifs = notificationsNormalizer(action.data);
      for (const res of normalizedNotifs.result) {
        normalizedNotifs.entities.notifications[res].isRead = false;
      }
      return state.set('data', normalizedNotifs);
    case NOTIFICATION_ACTION_TYPES.MARK_AS_READ:
      return state.setIn(
        ['data', 'entities', 'notifications', action.index, 'isRead'],
        true,
      );
    case NOTIFICATION_ACTION_TYPES.SET_TYPE_FILTER:
      return Object.values(
        NOTIFICATION_ACTION_TYPES.NotificationTypeFilters,
      ).find((filter) => filter === action.filter)
        ? state.set('filter', action.filter)
        : state;
    default:
      return state;
  }
}
