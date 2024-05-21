import notifications from '../../notifications.json';


/**
 * Returns a list containing all the context objects with matching
 * userIds
 *
 * @param {string} userId
 * @returns {array}
 */
export function getAllNotificationsByUser(userId) {
  return notifications.filter((notifItem) => notifItem.author.id === userId)
    .map((notifItem) => notifItem.context);
}
