import React from 'react';
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';
import { fromJS } from 'immutable';
import { App, mapStateToProps } from "./App";
import Header from '../Header/Header';
import Footer from '../Footer/Footer';
import Login from '../Login/Login';
import CourseList from '../CourseList/CourseList';
import { listCourses } from '../CourseList/CourseList.test';
import { listNotifications } from '../Notifications/Notifications.test';

// Suppress Aphrodite style injection before each test
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// Clear Aphrodite style buffer and resume style injection after each test
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  jest.restoreAllMocks();
});

// Describe block for App Component
describe('App Component', () => {
  let wrapper = shallow(<App />);
  
  // Test case: App component renders without crashing
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true)
  });

  // Test case: App component contains Header component
  it("should contain the Header component", () => {
    expect(wrapper.containsMatchingElement(<Header/>)).toEqual(true)
  });

  // Test case: App component contains Login component
  it("should contain the Login component", () => {
    expect(wrapper.containsMatchingElement(<Login/>)).toEqual(true)
  });

  // Test case: App component contains Footer component
  it("should contain the Footer component", () => {
    expect(wrapper.containsMatchingElement(<Footer/>)).toEqual(true)
  });

  // Test case: App component does not render CourseList component
  it("does not render CourseList component", () => {
    expect(wrapper.containsMatchingElement(<CourseList/>)).toEqual(false)
  });
});

// Describe block for App Component when isLoggedin is true
describe('App Component when isLoggedin is true', () => {
  const wrapper = shallow(<App isLoggedIn={true}/>);

  // Test case: App component does not render Login component
  it("does not render Login component", () => {
    expect(wrapper.containsMatchingElement(<Login/>)).toEqual(false)
  });

  // Test case: App component renders CourseList component with listCourses prop
  it("renders CourseList component", () => {
    expect(wrapper.containsMatchingElement(<CourseList listCourses={listCourses}/>)).toEqual(true)
  });
});

// Describe block for mapStateToProps function
describe("mapStateToProps function", () => {
  test("mapStateToProps function", () => {
    // Mock state with immutable structures
    let state = {
      ui: fromJS({
        isUserLoggedIn: true,
        isNotificationDrawerVisible: true
      })
    };  
    // Call mapStateToProps function
    const obj = mapStateToProps(state)
    // Assert the result
    expect(obj).toEqual({ isLoggedIn: true, displayDrawer: true })
  });
});
