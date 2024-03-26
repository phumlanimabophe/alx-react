import React from 'react';
import { App, mapStateToProps } from './App';
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { shallow } from 'enzyme';
import CourseList from '../CourseList/CourseList';
import { listCourses } from '../CourseList/CourseList.test';
import { StyleSheetTestUtils } from 'aphrodite';
import { listNotifications } from '../Notifications/Notifications.test';
import { fromJS } from 'immutable';

// Suppress Aphrodite styles injection before each test
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// Clear Aphrodite styles buffer and resume injection after each test
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  jest.restoreAllMocks();
});

// Shallow render the App component
let wrapper = shallow(<App />);

// Test suite for the App component
describe('App Component', () => {
  // Test if the component renders without crashing
  it('renders without crashing', () => {
    expect(wrapper.exists()).toBe(true);
  });

  // Test if Header component is rendered
  it('should contain the Header component', () => {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true);
  });

  // Test if Login component is rendered
  it('should contain the Login component', () => {
    expect(wrapper.containsMatchingElement(<Login />)).toEqual(true);
  });

  // Test if Footer component is rendered
  it('should contain the Footer component', () => {
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true);
  });

  // Test if CourseList component is not rendered initially
  it('does not render CourseList component', () => {
    expect(wrapper.containsMatchingElement(<CourseList />)).toEqual(false);
  });

  // Test state update after calling logIn method
  it('state is updated accordingly after calling logIn', () => {
    wrapper.instance().logIn('jack', 'badpassword');
    expect(wrapper.state('user')).toEqual({ email: 'jack', isLoggedIn: true, password: 'badpassword' });
  });

  // Test state update after calling logOut method
  it('state is updated accordingly after calling logOut', () => {
    wrapper.instance().logOut();
    expect(wrapper.state('user')).toEqual({ email: '', isLoggedIn: false, password: '' });
  });

  // Test state update after calling markNotificationAsRead method
  it('listNotifications state is updated accordingly after calling markNotificationAsRead', () => {
    wrapper.setState({ listNotifications: listNotifications });
    wrapper.instance().markNotificationAsRead(1);
    expect(wrapper.state('listNotifications').length).toEqual(2);
  });
});

// Test suite for the App component when isLoggedIn is true
describe('App Component when isLoggedIn is true', () => {
  it('does not render Login component', () => {
    wrapper.setState({ user: { email: '', password: '', isLoggedIn: true } });
    expect(wrapper.containsMatchingElement(<Login />)).toEqual(false);
  });

  it('renders CourseList component', () => {
    expect(wrapper.containsMatchingElement(<CourseList listCourses={listCourses} />)).toEqual(true);
  });
});

// Test mapStateToProps function
describe('mapStateToProps function', () => {
  it('maps state to props correctly', () => {
    // Create an Immutable.js state
    let state = fromJS({
      isUserLoggedIn: true,
      isNotificationDrawerVisible: true
    });

    // Call mapStateToProps function
    const props = mapStateToProps(state);

    // Verify the mapping
    expect(props).toEqual({ isLoggedIn: true, displayDrawer: true });
  });
});
