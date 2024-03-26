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
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from '../actions/uiActionCreators';

// Component styles
const styles = StyleSheet.create({
  AppBody: {
    fontSize: '1.1rem',
    paddingLeft: 10,
    margin: 0,
    minHeight: 350
  }
});

// App component class
export class App extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      user: defaultUser,
      listCourses: [
        { id: 1, name: 'ES6', credit: 60 },
        { id: 2, name: 'Webpack', credit: 20 },
        { id: 3, name: 'React', credit: 40 }
      ]
    };
  }

  // PropTypes definition
  static propTypes = {
    isLoggedIn: PropTypes.bool,
    displayDrawer: PropTypes.bool,
    displayNotificationDrawer: PropTypes.func,
    hideNotificationDrawer: PropTypes.func,
    login: PropTypes.func
  };

  // Default props definition
  static defaultProps = {
    isLoggedIn: false,
    displayDrawer: false,
    displayNotificationDrawer: () => {},
    hideNotificationDrawer: () => {},
    login: () => {}
  };

  // Lifecycle method: componentDidMount
  componentDidMount() {
    this.alert();
  }

  // Event listener to log out when Ctrl+H is pressed
  alert() {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.code === 'KeyH') {
        e.preventDefault();
        alert('Logging you out');
      }
    });
  }

  // Lifecycle method: componentWillUnmount
  componentWillUnmount() {
    window.removeEventListener('keydown', alert);
  }

  // Render method
  render() {
    const currentUser = this.state.user;
    const showDrawer = this.props.displayNotificationDrawer;
    const hideDrawer = this.props.hideNotificationDrawer;

    // Function to determine login status and render appropriate content
    const LoginStatus = () => {
      if (this.props.isLoggedIn) {
        return (
          <BodySectionWithMarginBottom title="Course List">
            <CourseList listCourses={this.state.listCourses} />
          </BodySectionWithMarginBottom>
        );
      } else {
        return (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login logIn={this.props.login} />
          </BodySectionWithMarginBottom>
        );
      }
    };

    return (
      <AppContext.Provider value={{ currentUser }}>
        <Notifications displayDrawer={this.props.displayDrawer} showDrawer={showDrawer} hideDrawer={hideDrawer} />
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

// Mapping state to props
export const mapStateToProps = (state) => {
  return {
    isLoggedIn: state.ui.get("isUserLoggedIn"),
    displayDrawer: state.ui.get("isNotificationDrawerVisible")
  };
};

// Mapping dispatch to props
export const mapDispatchToProps = (dispatch) => {
  return {
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
    login: (email, password) => dispatch(loginRequest(email, password))
  };
};

// Connecting component to Redux store
export default connect(mapStateToProps, mapDispatchToProps)(App);
