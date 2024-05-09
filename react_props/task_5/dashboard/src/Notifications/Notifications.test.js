import React from "react";
import Notifications from "./Notifications.js";
import { shallow } from "../../config/setupTests.mjs";


test('Notification renders', () => {
  shallow(<Notifications />);
});


test('Notification renders three list items', () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  expect(wrapper.exists('NotificationItem')).toBe(true);
});

test(
  'Notification paragraph contains "Here is the list of notifications"',
  () => {
    const wrapper = shallow(<Notifications displayDrawer={true} />);
    expect(wrapper.find('.notifications p').text())
      .toBe('Here is the list of notifications');
});


test(
  'Notification menu item is being displayed when displayDrawer is false',
  () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(wrapper.exists('.menuItem')).toBe(true);
});


test(
  'check div.notifications is not being displayed when displayDrawer is false',
  () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(
      wrapper.exists('div.notifications')
    ).toBe(false);
});


test(
  'check div.notifications is not being displayed when displayDrawer is false',
  () => {
    const wrapper = shallow(<Notifications displayDrawer={false} />);
    expect(
      wrapper.exists('div.notifications')
    ).toBe(false);
});
