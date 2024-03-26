// Importing necessary dependencies and reducers
import { isImmutable, Map } from "immutable"
import { courseReducer } from "./courseReducer";
import { notificationReducer } from "./notificationReducer";
import { uiReducer } from "./uiReducers";
import { combineReducers } from "redux";

// Test: Ensure that the root reducer's initial state contains immutable objects
test("root reducer’s initial state contains immutable objects", () => {
  // Creating root reducer by combining individual reducers
  const rootReducer = combineReducers({
    courses: courseReducer,
    notifications: notificationReducer,
    ui: uiReducer
  })

  // Getting the initial state from the root reducer
  const state = rootReducer(undefined, {})
  
  // Asserting that each slice of the state is immutable
  expect(isImmutable(state.ui)).toEqual(true)
  expect(isImmutable(state.courses)).toEqual(true)
  expect(isImmutable(state.notifications)).toEqual(true)
})
