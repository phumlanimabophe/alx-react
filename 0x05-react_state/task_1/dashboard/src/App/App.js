import React from 'react';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Notification from '../Notifications/Notifications';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom';
import BodySection from '../BodySection/BodySection';
import { getLatestNotification } from '../utils/utils';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

// Main application component
class App extends React.Component {
  constructor(props) {
    super(props);

    // Properties and state initialization
    this.isLoggedIn = props.isLoggedIn;
    this.logOut = props.logOut;
    this.handleKeyDown = this.handleKeyDown.bind(this);
    this.listCourses = [
      { id: 1, name: 'ES6', credit: 60 },
      { id: 2, name: 'Webpack', credit: 20 },
      { id: 3, name: 'React', credit: 40 }
    ];

    this.listNotifications = [
      { id: 1, value: "New course available", type: "default" },
      { id: 2, value: "New resume available", type: "urgent" },
      { id: 3, html: { __html: getLatestNotification() }, type: "urgent" },
    ];

    this.state = {
      displayDrawer: false
    };

    this.handleDisplayDrawer = this.handleDisplayDrawer.bind(this);
    this.handleHideDrawer = this.handleHideDrawer.bind(this);
  }

  // Handles the display of the drawer
  handleDisplayDrawer() {
    this.setState({
      displayDrawer: true
    });
  }

  // Handles the hiding of the drawer
  handleHideDrawer() {
    this.setState({
      displayDrawer: false
    });
  }

  // Handles keydown event for a specific key combination
  handleKeyDown(e) {
    if (e.ctrlKey && e.key === 'h') {
      e.preventDefault();
      alert("Logging you out");
      this.logOut();
    }
  }

  // Lifecycle method to add event listener for keydown
  componentDidMount() {
    window.addEventListener('keydown', this.handleKeyDown);
  }

  // Lifecycle method to remove event listener when the component unmounts
  componentWillUnmount() {
    window.removeEventListener('keydown', this.handleKeyDown);
  }

  // Renders the App component
  render() {
    return (
      <React.Fragment>
        <Notification
          listNotifications={this.listNotifications}
          displayDrawer={this.state.displayDrawer}
          handleDisplayDrawer={this.handleDisplayDrawer}
          handleHideDrawer={this.handleHideDrawer}
        />
        <div className={css(bodyStyles.App)}>
          <Header />
          {this.props.isLoggedIn ?
            <BodySectionWithMarginBottom title="Course list"><CourseList listCourses={this.listCourses} /></BodySectionWithMarginBottom>
            :
            <BodySectionWithMarginBottom title="Log in to continue"><Login /></BodySectionWithMarginBottom>
          }
          <BodySection title="News from the School">
            <p>Random Text</p>
          </BodySection>
          <div className={css(footerStyles.footer)}>
            <Footer />
          </div>
        </div>
      </React.Fragment>
    );
  }
}

// Aphrodite styles for the component
const bodyStyles = StyleSheet.create({
  App: {
    position: 'relative',
    minHeight: '100vh'
  }
});

const footerStyles = StyleSheet.create({
  footer: {
    display: 'flex',
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
    borderTop: '3px solid #E11D3F',
    padding: '1rem',
    fontStyle: 'italic',
  }
});

// Default props and propTypes for the App component
App.defaultProps = {
  isLoggedIn: false,
  logOut: () => { }
};

App.propTypes = {
  isLoggedIn: PropTypes.bool,
  logOut: PropTypes.func
};

export default App;
