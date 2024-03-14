import notificationReducer from './notificationReducer'; // Importing the notification reducer
import {
	markAsRead,                // Action creator for marking a notification as read
	setNotificationFilter,     // Action creator for setting notification filter
} from '../actions/notificationActionCreators'; // Importing action creators related to notifications
import { Map } from 'immutable'; // Importing Map from Immutable library

// Test suite for notificationReducer
describe('notificationReducer', () => {
	// Test case to verify default state returned
	it('Verifies default state returned', () => {
		// Initial state before any action
		const myState = notificationReducer(undefined, {});
		// Expecting the state to match the default notification state
		expect(myState.toJS()).toEqual({
			notifications: [],
			filter: 'DEFAULT',
		});
	});

	// Test case to verify MARK_AS_READ returns the data passed
	it('Verifies MARK_AS_READ returns the data passed', () => {
		// Initial state with notifications and filter
		const initialState = {
			filter: 'DEFAULT',
			notifications: [
				{
					id: 1,
					isRead: false,
					type: 'default',
					value: 'New course available',
				},
				{
					id: 2,
					isRead: false,
					type: 'urgent',
					value: 'New resume available',
				},
				{
					id: 3,
					isRead: false,
					type: 'urgent',
					value: 'New data available',
				},
			],
		};
		// State expected after MARK_AS_READ action
		const returnState = {
			filter: 'DEFAULT',
			notifications: [
				{
					id: 1,
					isRead: false,
					type: 'default',
					value: 'New course available',
				},
				{
					id: 2,
					isRead: true,
					type: 'urgent',
					value: 'New resume available',
				},
				{
					id: 3,
					isRead: false,
					type: 'urgent',
					value: 'New data available',
				},
			],
		};
		// Applying MARK_AS_READ action to the reducer
		const myState = notificationReducer(initialState, markAsRead(2));
		// Expecting the state to match the expected return state
		expect(myState.toJS()).toEqual(returnState);
	});

	// Test case to verify SET_TYPE_FILTER returns the data passed
	it('Verifies SET_TYPE_FILTER returns the data passed', () => {
		// Initial state with notifications and filter
		const initialState = {
			filter: 'DEFAULT',
			notifications: [
				{
					id: 1,
					isRead: false,
					type: 'default',
					value: 'New course available',
				},
				{
					id: 2,
					isRead: false,
					type: 'urgent',
					value: 'New resume available',
				},
				{
					id: 3,
					isRead: false,
					type: 'urgent',
					value: 'New data available',
				},
			],
		};
		// State expected after SET_TYPE_FILTER action
		const returnState = {
			filter: 'URGENT',
			notifications: [
				{
					id: 1,
					isRead: false,
					type: 'default',
					value: 'New course available',
				},
				{
					id: 2,
					isRead: false,
					type: 'urgent',
					value: 'New resume available',
				},
				{
					id: 3,
					isRead: false,
					type: 'urgent',
					value: 'New data available',
				},
			],
		};
		// Applying SET_TYPE_FILTER action to the reducer
		const myState = notificationReducer(initialState, setNotificationFilter('URGENT'));
		// Expecting the state to match the expected return state
		expect(myState).toEqual(Map(returnState));
	});
});
