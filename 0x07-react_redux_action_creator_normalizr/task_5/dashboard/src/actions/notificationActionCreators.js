// Importing constants related to notification actions
import {
    NotificationTypeFilters,
    MARK_AS_READ,
    SET_TYPE_FILTER,
} from './notificationActionTypes';

// Action creator for marking a notification as read
export const markAsRead = (index) => {
    // Returns an action object with type and index properties
    return {
        type: MARK_AS_READ,
        index,
    };
};

// Action creator for setting the notification type filter
export const setNotificationFilter = (filter) => {
    // Returns an action object with type and filter properties
    return {
        type: SET_TYPE_FILTER,
        filter,
    };
};
