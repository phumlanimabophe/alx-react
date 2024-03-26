import React from 'react';
import {Notifications} from "./Notifications";
import { shallow } from 'enzyme';
import { StyleSheetTestUtils } from 'aphrodite';

// Suppress Aphrodite style injection before each test
beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

// Clear Aphrodite style buffer and resume injection after each test
afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
  jest.restoreAllMocks();
});

// Define sample notification messages
const messages = [
  {
    guid: "89",
    isRead: true,
    type: "urgent",
    value: "Odio pellentesque"
  }
];

// Calculate the length of the messages array
const notifLength = Object.values(messages).length;

// Shallow render the Notifications component with displayDrawer prop set to true and messages
const wrapper = shallow(<Notifications displayDrawer={true} messages={messages}/>);

// Test suite for Notifications component when displayDrawer prop is true and messages prop is not empty
describe(`Notifications Component when displayDrawer prop is true
and messages prop is not empty`, () => {
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders Notifications div", () => {
    expect(wrapper.find('.Notifications_95aj9m').exists()).toEqual(true);
  });

  it("renders list items", () => {
    expect(wrapper.find('ul').children().length).toEqual(notifLength);
  });

  it("renders the text: 'Here is the list of notifications:'", () => {
    expect(wrapper.containsMatchingElement(<p>Here is the list of notifications:</p>)).toEqual(true);
  });

  it("renders first NotificationItem element with the right html", () => {
    const firstChild = wrapper.find('ul').children().first();
    expect(firstChild.html()).toBe('<li class="urgent_137u7ef-o_O-listItem_mdjmz6" data-notification-type="urgent">\
Odio pellentesque</li>');
  });

  it("call fetchNotifications action creator when component is mounted", ()=>{
    const fetchNotifications = jest.fn();
    const wrapper = shallow(<Notifications fetchNotifications={fetchNotifications}/>);
    expect(fetchNotifications).toHaveBeenCalled();
  });

  it("calls setNotificationFilter with DEFAULT when 'default' button is clicked ", ()=> {
    const setNotificationFilter = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true}  messages={messages} 
      setNotificationFilter={()=>setNotificationFilter("DEFAULT")}/>);
    const defaultbtn = wrapper.find({id:"default"});
    defaultbtn.simulate("click");
    expect(setNotificationFilter).toHaveBeenCalledWith("DEFAULT");
  });

  it("calls setNotificationFilter with URGENT when 'urgent' button is clicked ", ()=> {
    const setNotificationFilter = jest.fn();
    const wrapper = shallow(<Notifications displayDrawer={true}  messages={messages} 
      setNotificationFilter={()=>setNotificationFilter("URGENT")}/>);
    const urgentbtn = wrapper.find({id:"urgent"});
    urgentbtn.simulate("click");
    expect(setNotificationFilter).toHaveBeenCalledWith("URGENT");
  });

});

// Test suite for Notifications component when displayDrawer prop is true and messages prop is empty
describe(`Notifications Component when displayDrawer prop is true
and messages prop is empty (or not used)`, () => {
  const wrapper = shallow(<Notifications displayDrawer={true}/>);
  it("renders without crashing", () => {
    expect(wrapper.exists()).toBe(true);
  });

  it("renders the text: 'No new notification for now'", () => {
    expect(wrapper.containsMatchingElement(<p>No new notification for now</p>)).toEqual(true);
  });

});

// Test suite for Notifications component when displayDrawer prop is false
describe('Notifications Component when displayDrawer prop is false', () => {
  it("calls handleDisplayDrawer() when menuItem is clicked", () => {
    const showDrawer = jest.fn();
    const comp = shallow(<Notifications showDrawer={showDrawer} displayDrawer={false}/>);
    const menuItem = comp.find('.menuItem_1ron99v');
    menuItem.simulate('click');
    expect(showDrawer).toHaveBeenCalled();
  });

  it("calls handleHideDrawer() when close-btn is clicked", () => {
    const hideDrawer = jest.fn();
    const comp = shallow(<Notifications hideDrawer={hideDrawer} displayDrawer={true}/>);
    const menuItem = comp.find({id: "close-btn"});
    menuItem.simulate('click');
    expect(hideDrawer).toHaveBeenCalled();
  });

  const component = shallow(<Notifications displayDrawer={false}/>);
  it("renders div with menuItem class", () => {
    expect(component.find('.menuItem_1ron99v').exists()).toEqual(true);
  });

  it("does not render Notifications div", () => {
    expect(component.find('.Notifications').exists()).toEqual(false);
  });
});
