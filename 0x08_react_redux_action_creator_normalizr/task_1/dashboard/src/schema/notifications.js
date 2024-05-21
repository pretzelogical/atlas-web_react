import notificationsJSON from '../../notifications.json';
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


/**
 * Returns a list containing all the context objects with matching
 * userIds
 *
 * @param {string} userId
 * @returns {array}
 */
export function getAllNotificationsByUser(userId) {
  return notificationsJSON.filter((notifItem) => notifItem.author.id === userId)
    .map((notifItem) => notifItem.context);
}

const notifications = normalize(notificationsJSON, [notification]);
export default notifications;
