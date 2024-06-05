import * as NOTIFICATION_ACTION_TYPES from '../actions/notificationActionTypes.js';
import { Map as ImmutableMap, List as ImmutableList, fromJS, mergeDeep } from 'immutable';
import { notificationsNormalizer } from '../schema/notifications.js';

const initialState = fromJS({
  notifications: {},
  isLoading: false,
  filter: NOTIFICATION_ACTION_TYPES.NotificationTypeFilters.DEFAULT,
});

export default function notificationReducer(state = initialState, action) {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case NOTIFICATION_ACTION_TYPES.FETCH_NOTIFICATIONS_SUCCESS:
      return state.set('notifications', mergeDeep(fromJS(notificationsNormalizer(action.data)), state.notifications));
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
    case NOTIFICATION_ACTION_TYPES.SET_LOADING_STATE:
      return state.set('isLoading', action.state);
    default:
      return state;
  }
}
