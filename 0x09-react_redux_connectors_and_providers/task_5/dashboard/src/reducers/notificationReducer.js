// Importing necessary dependencies and action types
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_LOADING_STATE, SET_TYPE_FILTER } from "../actions/notificationActionTypes";
import { Map, setIn } from "immutable";

// Initial state for the notification reducer
export const initialState = Map({
  notifications: {}, // Stores notifications data
  filter: "DEFAULT", // Filter for notifications
  loading: false // Loading state indicator
})

// Reducer function for notifications
export function notificationReducer(state = initialState, action){
  switch(action.type){
    // Case for successful notifications fetch
    case FETCH_NOTIFICATIONS_SUCCESS:
      return state.mergeDeep({notifications: action.data}) // Merging new notifications data with existing state
    // Case for marking notification as read
    case MARK_AS_READ:
      return setIn(state.toJS(), ["notifications", action.index, "isRead"], true) // Updating isRead property for the specified notification
    // Case for setting type filter for notifications
    case SET_TYPE_FILTER:
      return state.set("filter", action.filter) // Setting filter value in state
    // Case for setting loading state
    case SET_LOADING_STATE:
      return state.set("loading", action.loading) // Setting loading state in state
    default:
      return state // Returning current state for unrecognized actions
  }
}
