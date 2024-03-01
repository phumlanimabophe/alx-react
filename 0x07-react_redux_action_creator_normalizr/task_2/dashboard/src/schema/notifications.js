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
 * @returns {object[]} - An array of notification contexts for the user.
 */
export default function getAllNotificationsByUser(userId) {
    // Initialize an array to store the output
    const output = [];
    
    // Extract entities from the normalized data
    const notifications = normalized.entities.notification;
    const messages = normalized.entities.messages;

    // Iterate through the notifications and add matching messages to the output array
    for (const id in notifications) {
        if (notifications[id].author === userId) {
            output.push(messages[notifications[id].context]);
        }
    }

    return output;
}

// Export the normalized data for potential external use
export { normalized };
