import {
	markAsRead, /* Action creator for marking a notification as read */
	setNotificationFilter, /* Action creator for setting notification filter */
	fetchNotificationsSuccess, /* Action creator for successful notification fetch */
} from '../actions/notificationActionCreators'; /* Importing action creators related to notifications */
import { notificationReducer } from './notificationReducer'; /* Importing notification reducer function */

describe('tests for notification reducer', () => {
	const defaultState = {
		notifications: [], /* Default state for notifications */
		filter: 'DEFAULT', /* Default filter for notifications */
	};

	/* Test case to verify default state returned when no action is passed */
	it('should return default state when no action is passed', () => {
		expect(notificationReducer(defaultState, 'null')).toEqual(defaultState);
	});

	/* Test case to verify correct notification marked as read */

	it('should mark the correct notification as read', () => {
		const data = {
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

		const output = {
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

		expect(notificationReducer(data, markAsRead(2))).toEqual(output);
	});

	it('should change filter', () => {
		const data = {
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

		const output = {
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

		expect(notificationReducer(data, setNotificationFilter('URGENT'))).toEqual(
			output
		);
	});

	it('should return correct state on successful fetch', () => {
		const data = {
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

		expect(
			notificationReducer(defaultState, fetchNotificationsSuccess())
		).toEqual(data);
	});
});
