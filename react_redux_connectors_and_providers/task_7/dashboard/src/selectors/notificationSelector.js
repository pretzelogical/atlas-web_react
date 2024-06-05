import { Map as ImmutableMap, fromJS } from "immutable";


/**
 * Filters unread notifications
 *
 * @param {ImmutableMap} notifs
 * @returns {ImmutableMap}
 */
const filterUnread = (notifs) => {
  if (!ImmutableMap.isMap(notifs) || notifs === undefined) {
    return undefined
  }
  let unreadNotifs = ImmutableMap();
  for (const [key, val] of notifs.entries()) {
    if (!val.get('isRead')) {
      unreadNotifs = unreadNotifs.set(key, val);
    }
  }
  return unreadNotifs;
}

export const filterTypeSeleced = (state) => state.get('filter');
export const getNotifications = (state) => state.getIn(['data', 'entities', 'notifications']);
export const getUnreadNotifications = (state) => filterUnread(state.notifications.getIn(['notifications', 'entities', 'messages']));