import {
	FETCH_NOTIFICATIONS_SUCCESS, // Action type for successful notifications fetch
	MARK_AS_READ,                 // Action type for marking a notification as read
	SET_TYPE_FILTER,              // Action type for setting type filter
  } from '../actions/notificationActionTypes'; // Importing action types related to notifications
  
  // Initial state for notifications
  export const initialNotificationState = {
	notifications: [], // Array to hold notifications
	filter: 'DEFAULT', // Default filter value
  };
  
  // Reducer function for handling notification state
  const notificationReducer = (state = initialNotificationState, action) => {
	switch (action.type) {
	  /*
	  case FETCH_NOTIFICATIONS_SUCCESS:
		return {
		  ...state,
		  notifications: action.data.map((notification) => {
			return {
			  ...notification,
			  isRead: false,
			};
		  }),
		};
		*/
  
	  // Case for marking a notification as read
	  case MARK_AS_READ:
		return {
		  ...state,
		  notifications: state.notifications.map((notification) => {
			const current = {
			  ...notification,
			};
			if (notification.id == action.index) current.isRead = true;
  
			return current;
		  }),
		};
  
	  // Case for setting type filter
	  case SET_TYPE_FILTER:
		return {
		  ...state,
		  filter: action.filter,
		};
  
	  // Default case returns the current state
	  default:
		break;
	}
	return state;
  };
  
  // Exporting the notificationReducer function as default
  export default notificationReducer;
  