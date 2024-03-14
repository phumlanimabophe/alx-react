import uiReducer, { initialState } from './uiReducer'; // Importing UI reducer function and initial state
import { DISPLAY_NOTIFICATION_DRAWER } from '../actions/uiActionTypes'; // Importing action type for displaying notification drawer

describe('reducer', function () {
  // Test case for initial state
  it('initial state', function () {
    const state = uiReducer(undefined, {});
    expect(state).toEqual(initialState);
  });

  // Test case for SELECT_COURSE action
  it('SELECT_COURSE', function () {
    const state = uiReducer(undefined, { type: 'SELECT_COURSE' });
    expect(state).toEqual(initialState);
  });

  // Test case for DISPLAY_NOTIFICATION_DRAWER action
  it('DISPLAY_NOTIFICATION_DRAWER', function () {
    const state = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER });
    expect(state).toEqual({
      ...initialState,
      isNotificationDrawerVisible: true,
    });
  });
});

