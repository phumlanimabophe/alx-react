// Importing constants related to UI actions
import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
} from './uiActionTypes';

// Action creator for user login
export function login(email, password) {
    return {
        type: LOGIN,
        user: { email, password },
    };
}

// Bound action creator for user login
export const boundLogin = (email, password) => dispatch(login(email, password));

// Action creator for user logout
export const logout = () => ({ type: LOGOUT });

// Bound action creator for user logout
export const boundLogout = () => dispatch(logout());

// Action creator for displaying notification drawer
export const displayNotificationDrawer = () => ({
    type: DISPLAY_NOTIFICATION_DRAWER,
});

// Bound action creator for displaying notification drawer
export const boundDisplayNotificationDrawer = () =>
    dispatch(displayNotificationDrawer());

// Action creator for hiding notification drawer
export const hideNotificationDrawer = () => ({
    type: HIDE_NOTIFICATION_DRAWER,
});

// Bound action creator for hiding notification drawer
export const boundHideNotificationDrawer = () =>
    dispatch(hideNotificationDrawer());
