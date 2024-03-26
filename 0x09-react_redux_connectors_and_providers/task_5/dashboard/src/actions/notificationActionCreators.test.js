import { fetchNotifications, markAsRead, setLoadingState, setNotificationFilter, setNotifications } from './notificationActionCreators';
import { MARK_AS_READ, SET_TYPE_FILTER, NotificationTypeFilters, SET_LOADING_STATE, FETCH_NOTIFICATIONS_SUCCESS } from './notificationActionTypes'
import thunk from "redux-thunk";
import configureStore from "redux-mock-store";
import fetchMock from "fetch-mock-jest"

const mockStore = configureStore([thunk])

// Restore fetch mock after each test
afterEach(() => {
  fetchMock.restore();
});

// Test for markAsRead action creator
test('markAsRead()', ()=>{
  // Dispatch markAsRead action with index 1
  const action = markAsRead(1)
  // Assert the action object
  expect(action).toEqual({ type: MARK_AS_READ, index: 1 })
})

// Test for setNotificationFilter action creator
test('setNotificationFilter()', ()=>{
  // Dispatch setNotificationFilter action with NotificationTypeFilters.DEFAULT
  const action = setNotificationFilter(NotificationTypeFilters.DEFAULT)
  // Assert the action object
  expect(action).toEqual({ type: SET_TYPE_FILTER, filter:"DEFAULT" })
})

// Test for setLoadingState action creator when loading is true
test("setLoadingState(true) returns right action object", () => {
  // Dispatch setLoadingState action with loading set to true
  const action = setLoadingState(true)
  // Assert the action object
  expect(action).toEqual({ type: SET_LOADING_STATE, loading: true})
})

// Test for setNotifications action creator
test("setNotifications()", () => {
  // Dispatch setNotifications action with undefined data
  const action = setNotifications(undefined)
  // Assert the action object
  expect(action).toEqual({ type: FETCH_NOTIFICATIONS_SUCCESS, data: []})
})

// Test for fetchNotifications async action creator
test("fetchNotifications()", () =>{
  // Create a mock Redux store
  const store = mockStore({})
  // Expected actions to be dispatched
  const expectedActions = [
    { type: 'SET_LOADING_STATE', loading: true },
    { type: 'FETCH_NOTIFICATIONS_SUCCESS', data: [] },
    { type: 'SET_LOADING_STATE', loading: false }
  ]
  // Mock the fetch request
  fetchMock.get("/notifications.json", [])
  // Dispatch the fetchNotifications async action
  return store.dispatch(fetchNotifications()).then(()=>{
    // Get the actions dispatched to the mock store
    const actions = store.getActions()
    // Assert the dispatched actions
    expect(actions).toEqual(expectedActions)
  })
})
