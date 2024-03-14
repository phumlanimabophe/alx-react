import {
	filterTypeSelected,          // Importing selector function for getting filter type selected
	getNotifications,           // Importing selector function for getting notifications
	getUnreadNotifications,     // Importing selector function for getting unread notifications
} from './notificationSelector'; // Importing notification selector functions
import { markAsRead } from '../actions/notificationActionCreators'; // Importing action creator for marking a notification as read
import notificationReducer from '../reducers/notificationReducer'; // Importing notification reducer
import { notificationsNormalizer } from '../schema/notifications'; // Importing notification normalizer from schema
import { Map } from 'immutable'; // Importing Map from Immutable library

// Initial state for notifications
const initialState = Map({
	notifications: [],    // Empty array of notifications
	filter: 'DEFAULT',    // Default filter type
});

// Expected return state
const returnState = {
	filter: 'DEFAULT',   // Default filter
	notifications: [     // Array of notifications
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

// Test suite for notification selector functions
describe('tests for notificationSelector', () => {
	// Test case to verify filter type selected is returned as expected
	it('returns filter as expected', () => {
		const filter = filterTypeSelected(initialState);
		expect(filter).toEqual('DEFAULT');
	});

	// Test case to verify notifications are returned as expected
	it('returns notifications as expected', () => {
		const notifications = notificationsNormalizer(returnState);
		expect(getNotifications(notifications)).toEqual(
			notifications.notifications
		);
	});

});
// Map(notifications.getIn(['notifications', 'entities', 'notifications']))
