// Importing notification data from the specified file path
import notificationData from '../../../../notifications.json';

/**
 * Retrieves all notifications for a given user.
 * @param {string} userId - The unique identifier of the user.
 * @returns {string[]} - An array of notification contexts for the user.
 */
export default function getAllNotificationsByUser(userId) {
    // Filtering notifications based on the user's ID
    const userNotifications = notificationData.filter((notification) => notification.author.id === userId);
    
    // Extracting notification contexts and creating an array
    const userNotificationContexts = userNotifications.map((notification) => notification.context);
    
    return userNotificationContexts;
}
