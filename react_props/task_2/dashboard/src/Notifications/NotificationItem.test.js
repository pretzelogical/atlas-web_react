import React from "react";
import NotificationItem from "./NotificationItem.js";
import { shallow } from "../../config/setupTests.mjs";


test('NotificationItem renders', () => {
  const wrapper = shallow(<NotificationItem />);
  expect(wrapper.exists()).toBe(true);
});

test('NotificationItem renders the right html', () => {
  const wrapper = shallow(
  <NotificationItem
    html={'<p>Test<p>'}
    type='basic'
  />);
  expect(wrapper.html()).toBe(
    '<li data-priority="basic" class="notification-basic"><p>Test<p></li>'
  );
});