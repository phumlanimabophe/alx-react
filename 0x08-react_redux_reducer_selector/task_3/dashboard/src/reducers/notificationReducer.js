import {
	FETCH_NOTIFICATIONS_SUCCESS, /* Action type for successful notifications fetch */
	MARK_AS_READ,                 /* Action type for marking a notification as read */
	SET_TYPE_FILTER,              /* Action type for setting type filter */
} from '../actions/notificationActionTypes'; /* Importing action types related to notifications */

const initialState = {
	notifications: [], /* Initial state for notifications */
	filter: 'DEFAULT', /* Initial filter for notifications */
};

/* Reducer function for handling notifications */
export function notificationReducer(state = initialState, action) {
	switch (action.type) {
		/* Case for successful notifications fetch */
		case FETCH_NOTIFICATIONS_SUCCESS:
			return {
				...state,
				notifications: action.data.map((notification) => ({
					...notification,
					isRead: false,
				})),
			};
		/* Case for marking a notification as read */
		case MARK_AS_READ:
			return {
				...state,
				notifications: state.notifications.map((notification) => {
					if (action.index === notification.id) {
						return { ...notification, isRead: true };
					}
					return { ...notification };
				}),
			};
		/* Case for setting type filter */
		case SET_TYPE_FILTER:
			return {
				...state,
				filter: action.filter,
			};
		/* Default case returns the current state */
		default:
			return state;
	}
}
