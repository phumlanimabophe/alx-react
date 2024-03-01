// Importing constants related to UI actions
import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from './uiActionTypes';
import fetch from 'node-fetch';

// Action creator function for user login
export function login(email, password) {
    // Returns an action object with type and user properties
    return {
        type: LOGIN,
        user: { email, password },
    };
}

// Bound action creator for user login
export const boundLogin = (email, password) => dispatch(login(email, password));

// Action creator function for user logout
export const logout = () => ({ type: LOGOUT });

// Bound action creator for user logout
export const boundLogout = () => dispatch(logout());

// Action creator function for displaying the notification drawer
export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER,
});

// Bound action creator for displaying the notification drawer
export const boundDisplayNotificationDrawer = () =>
    dispatch(displayNotificationDrawer());

// Action creator function for hiding the notification drawer
export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
});

// Bound action creator for hiding the notification drawer
export const boundHideNotificationDrawer = () =>
    dispatch(hideNotificationDrawer());

// Action creator function for successful user login
export function loginSuccess() {
    // Returns an action object with type
    return {
        type: LOGIN_SUCCESS,
    };
}

// Action creator function for unsuccessful user login
export function loginFailure() {
    // Returns an action object with type
    return {
        type: LOGIN_FAILURE,
    };
}

// Asynchronous action creator function for initiating user login request
export function loginRequest(email, password) {
    return (dispatch) => {
        // Dispatching the boundLogin action
        boundLogin(email, password);

        // Fetching login success JSON and dispatching loginSuccess or loginFailure accordingly
        return fetch('http://localhost:8564/login-success.json')
            .then((res) => res.json())
            .then((json) => dispatch(loginSuccess()))
            .catch((error) => dispatch(loginFailure()));
    };
}
