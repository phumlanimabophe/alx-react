// Import necessary modules
import React from 'react';
import App, { mapStateToProps } from "./App";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { shallow } from 'enzyme';
import CourseList from '../CourseList/CourseList';
import { listCourses } from '../CourseList/CourseList.test';
import { StyleSheetTestUtils } from 'aphrodite';
import { listNotifications } from '../Notifications/Notifications.test'
import { fromJS } from 'immutable';

// Before each test, suppress Aphrodite style injection
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// After each test, clear Aphrodite style buffer and resume injection
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  jest.restoreAllMocks();
});

// Shallow render the App component
let wrapper = shallow(<App />);

// Describe test suite for the App component
describe('App Component', () => {
  // Test if App component renders without crashing
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true)
  })

  // Test if App component contains the Header component
  it("should contain the Header component", () => {
    expect(wrapper.containsMatchingElement(<Header />)).toEqual(true)
  })

  // Test if App component contains the Login component
  it("should contain the Login component", () => {
    expect(wrapper.containsMatchingElement(<Login />)).toEqual(true)
  })

  // Test if App component contains the Footer component
  it("should contain the Footer component", () => {
    expect(wrapper.containsMatchingElement(<Footer />)).toEqual(true)
  })

  // Test if App component does not render CourseList component
  it("does not render CourseList component", () => {
    expect(wrapper.containsMatchingElement(<CourseList />)).toEqual(false)
  })

  // Test if default state for displayDrawer is false and is updated to true after calling handleDisplayDrawer
  it("default state for displayDrawer is false and is updated to true after calling handleDisplayDrawer", () => {
    expect(wrapper.state('displayDrawer')).toBe(false)
    wrapper.instance().handleDisplayDrawer()
    expect(wrapper.state('displayDrawer')).toBe(true)
  })

  // Test if state is updated to be false, after calling handleHideDrawer
  it("state is updated to be false, after calling handleHideDrawer", () => {
    wrapper.setState({ displayDrawer: true })
    wrapper.instance().handleHideDrawer()
    expect(wrapper.state('displayDrawer')).toBe(false)
  })

  // Test if state is updated accordingly, after calling logIn
  it("state is updated accordingly, after calling logIn", () => {
    wrapper.instance().logIn("jack", "badpassword")
    expect(wrapper.state('user')).toEqual({ "email": "jack", "isLoggedIn": true, "password": "badpassword" })
  })

  // Test if state is updated accordingly, after calling logOut
  it("state is updated accordingly, after calling logOut", () => {
    wrapper.instance().logOut()
    expect(wrapper.state('user')).toEqual({ "email": "", "isLoggedIn": false, "password": "" })
  })

  // Test if listNotifications state is updated accordingly, after calling markNotificationAsRead
  it("listNotifications state is updated accordingly, after calling markNotificationAsRead", () => {
    wrapper.setState({ listNotifications: listNotifications })
    wrapper.instance().markNotificationAsRead(1)
    expect(wrapper.state('listNotifications').length).toEqual(2)
  })
})

// Shallow render the App component with isLoggedIn set to true
const wrapper_isLoggedIn = shallow(<App />);
// Describe test suite for the App component when isLoggedIn is true
describe('App Component when isLoggedin is true', () => {
  // Test if App component does not render Login component
  it("does not render Login component", () => {
    wrapper_isLoggedIn.setState({ user: { email: '', password: '', isLoggedIn: true } })
    expect(wrapper_isLoggedIn.containsMatchingElement(<Login />)).toEqual(false)
  })

  // Test if App component renders CourseList component
  it("renders CourseList component", () => {
    expect(wrapper_isLoggedIn.containsMatchingElement(<CourseList listCourses={listCourses} />)).toEqual(true)
  })
})

// Test mapStateToProps function
test("mapStateToProps function", () => {
  let state = fromJS({
    isUserLoggedIn: true
  });
  const obj = mapStateToProps(state)
  expect(obj).toEqual({ isLoggedIn: true })
})
