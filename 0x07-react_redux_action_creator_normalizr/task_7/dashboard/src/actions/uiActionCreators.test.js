// Importing constants and action creators related to UI actions
import {
    LOGIN,
    LOGOUT,
    DISPLAY_NOTIFICATION_DRAWER,
    HIDE_NOTIFICATION_DRAWER,
    LOGIN_SUCCESS,
    LOGIN_FAILURE,
} from './uiActionTypes';
import {
    login,
    logout,
    hideNotificationDrawer,
    displayNotificationDrawer,
    loginSuccess,
    loginFailure,
    loginRequest,
} from './uiActionCreators';
import configureStore from 'redux-mock-store';
import thunk from 'redux-thunk';
import fetchMock from 'fetch-mock';

// Configuring middleware for the mock store
const middleWares = [thunk];
const mockStore = configureStore(middleWares);

// Test suite for UI notification action creators
describe('tests for UI notification action creators', () => {
    it('should create proper action for login', () => {
        // Given email and password
        const email = 'james@gmail.com';
        const password = 'heheheh';

        // Expecting the login action to match the specified structure
        expect(login(email, password)).toEqual({
            type: LOGIN,
            user: { email: 'james@gmail.com', password: 'heheheh' },
        });
    });

    it('should create proper action for logout', () => {
        // Expecting the logout action to match the specified structure
        expect(logout()).toEqual({ type: LOGOUT });
    });

    it('should create proper action for displaying notification drawer', () => {
        // Expecting the displayNotificationDrawer action to match the specified structure
        expect(displayNotificationDrawer()).toEqual({
            type: DISPLAY_NOTIFICATION_DRAWER,
        });
    });

    it('should create proper action for hiding notification drawer', () => {
        // Expecting the hideNotificationDrawer action to match the specified structure
        expect(hideNotificationDrawer()).toEqual({
            type: HIDE_NOTIFICATION_DRAWER,
        });
    });
});
