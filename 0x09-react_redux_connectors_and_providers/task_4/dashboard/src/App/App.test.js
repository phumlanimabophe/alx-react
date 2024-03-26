// Importing necessary dependencies and components for testing
import React from 'react';
import { App, mapStateToProps } from "./App";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import { shallow } from 'enzyme';
import CourseList from '../CourseList/CourseList';
import { listCourses } from '../CourseList/CourseList.test';
import { StyleSheetTestUtils } from 'aphrodite';
import { listNotifications } from '../Notifications/Notifications.test'
import { fromJS } from 'immutable';

// Suppressing style injection before each test
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// Clearing style buffer and resuming style injection after each test
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection()
  jest.restoreAllMocks();
});

// Testing the App component
describe('App Component', () => {
  // Shallow rendering the App component
  let wrapper = shallow(<App />);
  
  // Test: App renders without crashing
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true)
  })

  // Test: App contains the Header component
  it("should contain the Header component", () => {
    expect(wrapper.containsMatchingElement(<Header/>)).toEqual(true)
  })

  // Test: App contains the Login component
  it("should contain the Login component", () => {
    expect(wrapper.containsMatchingElement(<Login/>)).toEqual(true)
   })

  // Test: App contains the Footer component
  it("should contain the Footer component", () => {
    expect(wrapper.containsMatchingElement(<Footer/>)).toEqual(true)
   })

  // Test: App does not render CourseList component
  it("does not render CourseList component", () => {
    expect(wrapper.containsMatchingElement(<CourseList/>)).toEqual(false)
  })

})

// Testing the App component when isLoggedIn is true
describe('App Component when isLoggedin is true', () => {
  // Shallow rendering the App component with isLoggedIn prop set to true
  const wrapper = shallow(<App isLoggedIn={true}/>);

  // Test: App does not render Login component
  it("does not render Login component", () => {
    expect(wrapper.containsMatchingElement(<Login/>)).toEqual(false)
  })

  // Test: App renders CourseList component with listCourses prop
  it("renders CourseList component", () => {
    expect(wrapper.containsMatchingElement(<CourseList listCourses={listCourses}/>)).toEqual(true)
  })
})

// Testing mapStateToProps function
describe("mapStateToProps function", () => {
    // Mocking Redux state with isUserLoggedIn and isNotificationDrawerVisible
    test("mapStateToProps function", () => {
    let state = {
      ui: fromJS({
        isUserLoggedIn: true,
        isNotificationDrawerVisible: true
      })
    };  
    // Calling mapStateToProps function with mock state
    const obj = mapStateToProps(state)
    // Expecting the return object to match the expected object
    expect(obj).toEqual({ isLoggedIn: true, displayDrawer: true })
  })
})
