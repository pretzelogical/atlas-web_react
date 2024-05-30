import * as NOTIFICATION_ACTION_TYPES from '../actions/notificationActionTypes.js';

const initialState = {
  notifications: [],
  filter: NOTIFICATION_ACTION_TYPES.NotificationTypeFilters.DEFAULT,
};

export default function notificationReducer(state = initialState, action) {
  if (!action) {
    return state;
  }
  switch (action.type) {
    case NOTIFICATION_ACTION_TYPES.FETCH_NOTIFICATIONS_SUCCESS:
      return {
        ...state,
        notifications: action.data.map((notif) => ({
          ...notif,
          isRead: false,
        })),
      };
    case NOTIFICATION_ACTION_TYPES.MARK_AS_READ:
      return {
        ...state,
        notifications: state.notifications.map((notif) =>
          notif.id === action.index ? { ...notif, isRead: true } : notif,
        ),
      };
    case NOTIFICATION_ACTION_TYPES.SET_TYPE_FILTER:
      return Object.values(
        NOTIFICATION_ACTION_TYPES.NotificationTypeFilters,
      ).find((filter) => filter === action.filter)
        ? { ...state, filter: action.filter }
        : state;
    default:
      return state;
  }
}
