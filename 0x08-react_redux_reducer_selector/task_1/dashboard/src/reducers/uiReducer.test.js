import uiReducer, { defaultState } from './uiReducer'; /* Importing UI reducer function and default state */
import { selectCourse } from '../actions/courseActionCreators'; /* Importing action creator for selecting course */
import { displayNotificationDrawer } from '../actions/uiActionCreators'; /* Importing action creator for displaying notification drawer */

describe('uiReducer', () => {
	/* Test case to verify initial state when no action is passed to uiReducer */
	it('Verifies initial state returned when no action is passed to uiReducer', () => {
		const myState = uiReducer(defaultState, '');
		expect(myState.toJS()).toEqual(defaultState.toJS());
	});

	/* Test case to verify state equals the initial state when the action SELECT_COURSE is passed */
	it('Verifies the state equals the initial state when the action SELECT_COURSE is passed', () => {
		const myState = uiReducer(defaultState, selectCourse());
		expect(myState.toJS()).toEqual(defaultState.toJS());
	});

	/* Test case to verify property isNotificationDrawerVisible is true when DISPLAY_NOTIFICATION_DRAWER action is passed */
	it('Verifies property isNotificationDrawerVisible is true when DISPLAY_NOTIFICATION_DRAWER passed', () => {
		const myState = uiReducer(defaultState, displayNotificationDrawer());
		expect(myState.toJS().isNotificationDrawerVisible).toEqual(true);
	});
});
