// Importing reducers from their respective files
import { courseReducer } from "./courseReducer";
import { notificationReducer } from "./notificationReducer";
import { uiReducer } from "./uiReducers";
import { combineReducers } from "redux";

// Combining reducers into a single rootReducer using combineReducers function
export const rootReducer = combineReducers({
  // Reducer for managing course-related state
  courses: courseReducer,
  // Reducer for managing notification-related state
  notifications: notificationReducer,
  // Reducer for managing UI-related state
  ui: uiReducer
})
