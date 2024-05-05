import React from "react";
import Notifications from "./Notifications";
import { shallow } from "enzyme";


test('Notification renders', () => {
  shallow(<Notifications />);
});


test('Notification renders three list items', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.find('li').length).toBe(3);
});

test(
  'Notification paragraph contains "Here is the list of notifications"',
  () => {
    const wrapper = shallow(<Notifications />);
    expect(wrapper.find('p').text())
      .toBe('Here is the list of notifications');
});
