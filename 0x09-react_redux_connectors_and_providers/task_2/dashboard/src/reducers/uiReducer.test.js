import { initialState, uiReducer } from './uiReducers';
import { SELECT_COURSE } from "../actions/courseActionTypes";
import { LOGOUT, DISPLAY_NOTIFICATION_DRAWER, LOGIN, LOGIN_FAILURE } from '../actions/uiActionTypes'
import { fromJS } from "immutable";

// Initial state for testing purposes
const initState = {
  isNotificationDrawerVisible: false,
  isUserLoggedIn: true,
  user: {}
}

// Describe block for uiReducer function testing
describe("test uiReducer function", () => {
  // Test case: uiReducer returns state equal to the initial state when no action is passed
  it("(uiReducer function) returns state equal to the initial state when no action is passed", () => {
    const currentState = uiReducer(undefined, {})
    expect(currentState).toEqual(initialState)
  })

  // Test case: uiReducer returns state equal to the initial state when action SELECT_COURSE is passed
  it("(uiReducer function) returns state equal to the initial state when action SELECT_COURSE is passed", () => {
    const currentState = uiReducer(undefined, { type: SELECT_COURSE })
    expect(currentState).toEqual(initialState)
  })

  // Test case: uiReducer returns state with isNotificationDrawerVisible set to true when action DISPLAY_NOTIFICATION_DRAWER is passed
  it("(uiReducer function) returns state with isNotificationDrawerVisible set to true when action DISPLAY_NOTIFICATION_DRAWER is passed", () => {
    const currentState = uiReducer(undefined, { type: DISPLAY_NOTIFICATION_DRAWER })
    const expectedState = { isNotificationDrawerVisible: true, isUserLoggedIn: false, user: {} }
    expect(currentState.toJS()).toEqual(expectedState)
  })

  // Test case: uiReducer updates isUserLoggedIn to false when action LOGIN_FAILURE is passed
  it("returns state with isUserLoggedIn set to false when action LOGIN_FAILURE is passed", () => {
    const currentState = uiReducer(fromJS(initState), { type: LOGIN_FAILURE })
    const expectedState = { isNotificationDrawerVisible: false, isUserLoggedIn: false, user: {} }
    expect(currentState.toJS()).toEqual(expectedState)
  })

  // Test case: uiReducer updates isUserLoggedIn to false and sets user to null when action LOGOUT is passed
  it("returns state with isUserLoggedIn set to false and user set to null when action LOGOUT is passed", () => {
    const currentState = uiReducer(fromJS(initState), { type: LOGOUT })
    const expectedState = { isNotificationDrawerVisible: false, isUserLoggedIn: false, user: null }
    expect(currentState.toJS()).toEqual(expectedState)
  })

  // Test case: uiReducer updates isUserLoggedIn to true and sets user with provided email and password when action LOGIN is passed
  it("returns state with isUserLoggedIn set to true and user with provided email and password when action LOGIN is passed", () => {
    const email = "jack@test.com"
    const password = "strongpwd"
    const currentState = uiReducer(fromJS(initState), { type: LOGIN, user: { email, password } })
    const expectedState = { isNotificationDrawerVisible: false, isUserLoggedIn: true, user: { email, password } }
    expect(currentState.toJS()).toEqual(expectedState)
  }) 
})
