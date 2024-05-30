const objectToMap = (obj) => {
  const newMap = new Map();
  for (const [key, val] of Object.entries(obj)) {
    newMap.set(key, val);
  }
  return newMap
}

const filterUnread = (notifs) => {
  const unreadNotifs = {};
  for (const [key, val] of Object.entries(notifs)) {
    val.isRead ? null : unreadNotifs[key] = val
  }
  return unreadNotifs;
}

export const filterTypeSeleced = (state) => state.get('filter');
export const getNotifications = (state) => objectToMap(state.getIn(['data', 'entities', 'notifications']));
export const getUnreadNotifications = (state) => objectToMap(filterUnread(state.getIn(['data', 'entities', 'notifications'])));