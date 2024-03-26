import { NotifContainer } from "./NotificationsContainer"; // Import the component to be tested
import { shallow } from 'enzyme'; // Import shallow renderer from Enzyme
import React from 'react'; // Import React

// Test case: fetchNotifications action creator should be called when the component mounts
it("calls fetchNotifications action creator when component is mounted", () => {
  // Mock the fetchNotifications action creator
  const fetchNotifications = jest.fn();
  // Render the component using shallow rendering and pass the mocked fetchNotifications function as prop
  shallow(<NotifContainer fetchNotifications={fetchNotifications} />);
  // Expect the fetchNotifications function to have been called
  expect(fetchNotifications).toHaveBeenCalled();
});
