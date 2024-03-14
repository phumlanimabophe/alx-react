import { Map } from 'immutable'; /* Importing Map from Immutable library */

/* Function to get the filter type selected from state */
export const filterTypeSelected = (state) => state.get('filter');

/* Function to get notifications from state */
export const getNotifications = (state) => state.notifications;
// state.getIn(['notifications', 'entities', 'notifications']);

/* Function to get unread notifications from state */
export const getUnreadNotifications = (state) => {
	/* Accessing notifications from state */
	const notifications = state.getIn([
		'notifications',
		'entities',
		'notifications',
	]);
	/* Filtering unread notifications */
	const unreadNotifications = notifications.filter(
		(notification) => !notification.isRead
	);
	/* Converting to Immutable Map */
	return Map(unreadNotifications);
};
