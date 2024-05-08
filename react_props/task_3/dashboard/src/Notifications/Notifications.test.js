import React from "react";
import Notifications from "./Notifications.js";
import { shallow } from "../../config/setupTests.mjs";


test('Notification renders', () => {
  shallow(<Notifications />);
});


test.skip('Notification renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.exists('NotificationItem')).toBe(true);
});

test(
  'Notification paragraph contains "Here is the list of notifications"',
  () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text())
      .toBe('Here is the list of notifications');
});
