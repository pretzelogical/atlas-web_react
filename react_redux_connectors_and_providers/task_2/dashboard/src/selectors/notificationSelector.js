import { Map as ImmutableMap, fromJS } from "immutable";


/**
 * Filters unread notifications
 *
 * @param {ImmutableMap} notifs
 * @returns {ImmutableMap}
 */
const filterUnread = (notifs) => {
  let unreadNotifs = ImmutableMap();
  console.log(ImmutableMap.isMap(notifs));
  console.log(notifs.toJS());
  for (const [key, val] of notifs.entries()) {
    if (!val.get('isRead')) {
      unreadNotifs = unreadNotifs.set(key, val);
    }
  }
  return unreadNotifs;
}

export const filterTypeSeleced = (state) => state.get('filter');
export const getNotifications = (state) => state.getIn(['data', 'entities', 'notifications']);
export const getUnreadNotifications = (state) => filterUnread(state.getIn(['data', 'entities', 'notifications']));