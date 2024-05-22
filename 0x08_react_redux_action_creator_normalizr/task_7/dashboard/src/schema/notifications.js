import notificationsJSON from '../dist/notifications.json';
import { normalize, schema } from 'normalizr';

const user = new schema.Entity('users');
const message = new schema.Entity(
  'messages',
  {},
  { idAttribute: 'guid' }
);
const notification = new schema.Entity('notifications', {
  author: user,
  context: message
});
const notifications = normalize(notificationsJSON, [notification]);

/**
 * Returns a list containing all the context objects with matching
 * userIds
 *
 * @param {string} userId
 * @returns {array}
 */
export function getAllNotificationsByUser(userId) {
  const newArr = [];
  Object.entries(notifications.entities.notifications).forEach(([notifKey, notifVal]) => {
    if (notifVal.author === userId) {
      newArr.push(notifications.entities.messages[notifVal.context]);
    }
  });
  return newArr;
  // return notificationsJSON.filter((notifItem) => notifItem.author.id === userId)
  //   .map((notifItem) => notifItem.context);
}

export default notifications;
