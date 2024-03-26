// Import necessary modules
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import Notifications from '../Notifications/Notifications';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { AppContext, defaultUser } from './AppContext';
import { connect } from 'react-redux';
import { displayNotificationDrawer, hideNotificationDrawer } from '../actions/uiActionCreators';

// Define styles using Aphrodite
const styles = StyleSheet.create({
  AppBody: {
    fontSize: '1.1rem',
    paddingLeft: 10,
    margin: 0,
    minHeight: 350
  }
});

// Define the App component
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
      ],
      listNotifications: [
        { id: 1, type: "default", value: "New course available", html: { __html: null } },
        { id: 2, type: "urgent", html: { __html: "Object Oriented Programming intro" } },
        { id: 3, type: "default", value: "Present Javascript project requirements test on Friday" }
      ]
    };
  }

  // Define prop types for the component
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    displayDrawer: PropTypes.bool,
    displayNotificationDrawer: PropTypes.func,
    hideNotificationDrawer: PropTypes.func
  };

  // Define default props for the component
  static defaultProps = {
    isLoggedIn: false,
    displayDrawer: false,
    displayNotificationDrawer: () => {},
    hideNotificationDrawer: () => {}
  };

  // Log out the user
  logOut = () => {
    this.setState({ user: defaultUser });
  };

  // Log in the user
  logIn = (email, password) => {
    const currentUser = { email: email, password: password, isLoggedIn: true };
    this.setState({ user: currentUser });
  };

  // Mark a notification as read
  markNotificationAsRead = (id) => {
    const Notifications = this.state.listNotifications;
    this.setState({ listNotifications: Notifications.filter((notif) => id != notif.id) });
  };

  // Add event listener on mount to handle keydown event
  componentDidMount() {
    this.alert();
  }

  // Remove event listener on unmount
  componentWillUnmount() {
    window.removeEventListener('keydown', this.alert);
  }

  // Alert function to handle keydown event
  alert = () => {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.code === 'KeyH') {
        e.preventDefault();
        this.props.logOut(); // Dispatch log out action
        alert('Logging you out');
      }
    });
  };

  // Render the component
  render() {
    const currentUser = this.state.user;
    const displayDrawerState = this.props.displayDrawer;
    const showDrawer = this.props.displayNotificationDrawer;
    const hideDrawer = this.props.hideNotificationDrawer;

    // Function to render Login status based on user's logged in status
    const LoginStatus = () => {
      if (currentUser.isLoggedIn) {
        return (
          <BodySectionWithMarginBottom title="Course List">
            <CourseList listCourses={this.state.listCourses} />
          </BodySectionWithMarginBottom>
        );
      } else {
        return (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login logIn={this.logIn} />
          </BodySectionWithMarginBottom>
        );
      }
    };

    // Render the component
    return (
      <AppContext.Provider value={{ currentUser, logOut: this.logOut }}>
        <Notifications
          displayDrawer={this.props.displayDrawer}
          showDrawer={showDrawer}
          hideDrawer={hideDrawer}
          listNotifications={this.state.listNotifications}
          markNotificationAsRead={this.markNotificationAsRead}
        />
        <Header />
        <div className={css(styles.AppBody)}>
          {LoginStatus()}
          <BodySection title="News from the School">
            <p>
              News around the school!
              News around the school!
              News around the school!
              News around the school!
              News around the school!
              News around the school!
              News around the school!
              News around the school!
            </p>
          </BodySection>
        </div>
        <Footer />
      </AppContext.Provider>
    );
  }
}

// Map state to props
export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.get("isUserLoggedIn"),
    displayDrawer: state.get("isNotificationDrawerVisible")
  };
};

// Map dispatch to props
export const mapDispatchToProps = (dispatch) => {
  return {
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer())
  };
};

// Connect App component with Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);
