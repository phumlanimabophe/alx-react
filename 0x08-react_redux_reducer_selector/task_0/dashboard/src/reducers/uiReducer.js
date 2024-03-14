import {
	DISPLAY_NOTIFICATION_DRAWER, // Action type for displaying notification drawer
	HIDE_NOTIFICATION_DRAWER,    // Action type for hiding notification drawer
	LOGIN_SUCCESS,                // Action type for successful login
	LOGIN_FAILURE,                // Action type for failed login
	LOGOUT,                       // Action type for logout
} from '../actions/uiActionTypes';

const defaultState = {
	isNotificationDrawerVisible: false, // Default state for notification drawer visibility
	isUserLoggedIn: false,               // Default state for user login status
	user: {},                           // Default state for user data
};

// Reducer function for UI actions
export default function uiReducer(state = defaultState, action) {
	switch (action.type) {
		case DISPLAY_NOTIFICATION_DRAWER:
			return { ...state, isNotificationDrawerVisible: true }; // Display notification drawer
		case HIDE_NOTIFICATION_DRAWER:
			return { ...state, isNotificationDrawerVisible: false }; // Hide notification drawer
		case LOGIN_SUCCESS:
			return { ...state, isUserLoggedIn: true }; // Set user as logged in upon successful login
		case LOGIN_FAILURE:
			return { ...state, isUserLoggedIn: false }; // Set user as logged out upon login failure
		case LOGOUT:
			return { ...state, isUserLoggedIn: false }; // Set user as logged out upon logout action
		default:
			return state;
	}
}
