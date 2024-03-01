// Import necessary modules and dependencies
import notificationData from '../../../../notifications.json';
import { normalize, schema } from 'normalizr';

// Define schema entities for normalization
const user = new schema.Entity('users');
const message = new schema.Entity('messages', {}, { idAttribute: 'guid' });
const notification = new schema.Entity('notification', {
    author: user,
    context: message,
});

// Normalize the notification data using the defined schema
const normalized = normalize(notificationData, [notification]);

/**
 * Retrieves all notifications for a given user.
 * @param {string} userId - The unique identifier of the user.
 * @returns {string[]} - An array of notification contexts for the user.
 */
export default function getAllNotificationsByUser(userId) {
    // Uncomment the following line for debugging or logging normalized data
    // console.log(normalized);

    // Filter notifications based on the user's ID and extract notification contexts
    return notificationData
        .filter((notification) => notification.author.id === userId)
        .map((notification) => notification.context);
}

// Export the normalized data for potential external use
export { normalized };
