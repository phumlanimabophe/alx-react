// Importing necessary dependencies and action types
import { getAllNotificationsByUser, notificationsNormalizer } from '../schema/notifications'
import { FETCH_NOTIFICATIONS_SUCCESS, MARK_AS_READ, SET_LOADING_STATE, SET_TYPE_FILTER } from './notificationActionTypes'

// Action creator to mark a notification as read
export function markAsRead(index) {
  return { type: MARK_AS_READ, index }
}

// Action creator to set notification filter
export function setNotificationFilter(filter) {
  return { type: SET_TYPE_FILTER, filter}
}

// Action creator for successful notification fetch
export function fetchNotificationsSucess() {
  return {
    type: FETCH_NOTIFICATIONS_SUCCESS,
    data: [
      {
        id: 1,
        type: "default",
        value: "New course available"
      },
      {
        id: 2,
        type: "urgent",
        value: "New resume available"
      },
      {
        id: 3,
        type: "urgent",
        value: "New data available"
      }
    ]
  }
}

// Action creator to set loading state
export function setLoadingState(loading){
  return { type: SET_LOADING_STATE, loading }
}

// Action creator to set notifications
export function setNotifications(data=[]){
  return { type: FETCH_NOTIFICATIONS_SUCCESS, data }
}

// Thunk action creator to fetch notifications
export function fetchNotifications() {
  return (dispatch) => {
    dispatch(setLoadingState(true)) // Dispatching loading state true
    return fetch('/notifications.json') // Fetching notifications data
    .then((response) => response.json())
    .then((data) => {
      const normalizedData = notificationsNormalizer(data) // Normalizing data
      const messages = normalizedData.entities.messages
      dispatch(setNotifications(messages)) // Dispatching setNotifications action
      dispatch(setLoadingState(false)) // Dispatching loading state false
    })
  }
}
