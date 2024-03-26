import React from "react";
import { Notifications } from './Notifications'
import { fetchNotifications, markAsRead, setNotificationFilter } from '../actions/notificationActionCreators';
import { connect } from "react-redux"
import { getUnreadNotificationsByType } from "../selectors/notificationSelector";
import PropTypes from 'prop-types';

// Container component for managing notifications
export class NotifContainer extends React.Component {
  // PropTypes for component props
  static propTypes = {
    messages: PropTypes.arrayOf(PropTypes.object), // Array of notification objects
    setNotificationFilter: PropTypes.func, // Function to set notification filter
    displayDrawer: PropTypes.bool, // Boolean indicating whether to display drawer
    showDrawer: PropTypes.func, // Function to show drawer
    hideDrawer: PropTypes.func, // Function to hide drawer
    markNotificationAsRead: PropTypes.func, // Function to mark notification as read
    fetchNotifications: PropTypes.func // Function to fetch notifications
  }

  // Default props for component props
  static defaultProps = {
    messages: [], // Default empty array for notifications
    displayDrawer: false, // Default display drawer to false
    showDrawer: () => {}, // Default show drawer function
    hideDrawer: () => {}, // Default hide drawer function
    setNotificationFilter: () => {}, // Default set notification filter function
    markNotificationAsRead: () => {}, // Default mark notification as read function
    fetchNotifications: () => {} // Default fetch notifications function
  }

  // Lifecycle method to fetch notifications when component mounts
  componentDidMount() {
    this.props.fetchNotifications()
  }

  // Render Notifications component passing props
  render () {
    return <Notifications {...this.props}/>
  }
}

// Map state to props to retrieve notifications
const mapStateToProps = (state) => {
  return { messages: getUnreadNotificationsByType(state).toJS() }
}

// Map dispatch to props to dispatch actions
const mapDispatchToProps = (dispatch) => {
  return {
    fetchNotifications: () => dispatch(fetchNotifications()), // Dispatch action to fetch notifications
    markNotificationAsRead: (index) => dispatch(markAsRead(index)), // Dispatch action to mark notification as read
    setNotificationFilter: (filter) => dispatch(setNotificationFilter(filter)) // Dispatch action to set notification filter
  }
}

// Connect NotifContainer to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(NotifContainer)
