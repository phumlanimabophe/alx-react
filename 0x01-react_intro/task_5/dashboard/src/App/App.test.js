import { shallow } from 'enzyme';
import React from 'react';
import App from './App';

// Test suite for the App component
describe('<App />', () => {
  // Test case: App renders without crashing
  it('Tests that App renders without crashing', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.exists()).toBe(true);
  });

  // Test case: App renders a <div> with class "App-header"
  it('Tests that App renders a <div> with class "App-header"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-header').length).toBe(1);
  });

  // Test case: App renders a <div> with class "App-body"
  it('Tests that App renders a <div> with class "App-body"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-body').length).toBe(1);
  });

  // Test case: App renders a <div> with class "App-footer"
  it('Tests that App renders a <div> with class "App-footer"', () => {
    const wrapper = shallow(<App />);
    expect(wrapper.find('.App-footer').length).toBe(1);
  });
});
