import React from "react";
import Notifications from "./Notifications.js";
import { shallow } from "../../config/setupTests.mjs";
import NotificationItem from "./NotificationItem.js";


test('Notification renders', () => {
  shallow(<Notifications />);
});


test.skip('Notification renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  const ul_children = wrapper.find('.notifications div ul').children();
  console.log(ul_children);
  // TODO: fix this not working fix this not working fix this not working fix this not working fix this not working fix this not working e
  expect(ul_children.exists(<NotificationItem />)).toBe(true);
});

test(
  'Notification paragraph contains "Here is the list of notifications"',
  () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text())
      .toBe('Here is the list of notifications');
});
