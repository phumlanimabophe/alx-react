import React from 'react'; // Import React library for building UI components
import PropTypes from 'prop-types'; // Import PropTypes for type-checking props
import { StyleSheet, css } from 'aphrodite'; // Import Aphrodite for styling
import Header from '../Header/Header'; // Import Header component
import Footer from '../Footer/Footer'; // Import Footer component
import Login from '../Login/Login'; // Import Login component
import Notifications from '../Notifications/Notifications'; // Import Notifications component
import CourseList from '../CourseList/CourseList'; // Import CourseList component
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom'; // Import BodySectionWithMarginBottom component
import BodySection from '../BodySection/BodySection'; // Import BodySection component
import { AppContext, defaultUser } from './AppContext'; // Import AppContext and defaultUser
import { connect } from 'react-redux'; // Import connect function from React Redux for connecting components to Redux store
import { displayNotificationDrawer, hideNotificationDrawer, loginRequest } from '../actions/uiActionCreators'; // Import Redux action creators

// Define CSS styles using Aphrodite
const styles = StyleSheet.create({
  AppBody: {
    fontSize: '1.1rem',
    paddingLeft: 10,
    margin: 0,
    minHeight: 350
  }
})

// Define the main App component
export class App extends React.Component {
  constructor(props) {
    super(props);
    // Initialize component state
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
    hideNotificationDrawer: PropTypes.func,
    login: PropTypes.func
  };

  // Define default prop values
  static defaultProps = {
    isLoggedIn: false,
    displayDrawer: false,
    displayNotificationDrawer: () => { },
    hideNotificationDrawer: () => { },
    login: () => { }
  };

  // Method to mark a notification as read
  markNotificationAsRead = (id) => {
    const Notifications = this.state.listNotifications;
    this.setState({ listNotifications: Notifications.filter((notif) => id != notif.id) });
  };

  // Lifecycle method: componentDidMount
  componentDidMount() {
    this.alert();
  }

  // Method to display alert on keydown event
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
    window.removeEventListener('keydown', this.alert);
  }

  render () {
    const currentUser = this.state.user
    const logOut = this.logOut
    const displayDrawerState = this.state.displayDrawer;
    const showDrawer = this.props.displayNotificationDrawer;
    const hideDrawer = this.props.hideNotificationDrawer;
    const LoginStatus = () => {
      if (this.props.isLoggedIn) {
        return (
          <BodySectionWithMarginBottom title="Course List">
            <CourseList listCourses={this.state.listCourses}/>
          </BodySectionWithMarginBottom>
        )
      } else {
        return (
          <BodySectionWithMarginBottom title="Log in to continue">
            <Login logIn={this.props.login}/>
          </BodySectionWithMarginBottom>
        )
    }
    
  }
  return (
    <AppContext.Provider value={{currentUser, logOut}}>
      <Notifications displayDrawer={this.props.displayDrawer} showDrawer={showDrawer} hideDrawer={hideDrawer}
      listNotifications={this.state.listNotifications} markNotificationAsRead={this.markNotificationAsRead}/>
      <Header/>
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

export const mapStateToProps = (state) => {
  return { 
    isLoggedIn: state.get("isUserLoggedIn"),
    displayDrawer: state.get("isNotificationDrawerVisible") 
  }
}

export const mapDispatchToProps = (dispatch) => {
  return {
    displayNotificationDrawer: () => dispatch(displayNotificationDrawer()),
    hideNotificationDrawer: () => dispatch(hideNotificationDrawer()),
    login: (email, password) => dispatch(loginRequest(email, password))
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App)
// export default App
