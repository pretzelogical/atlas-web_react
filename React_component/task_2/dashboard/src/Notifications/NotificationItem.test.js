import React from "react";
import NotificationItem from "./NotificationItem.js";
import { shallow } from "../../config/setupTests.mjs";
import { fireEvent, render, screen } from "@testing-library/react";
import { jest } from "../../config/setupTests.mjs";


test('NotificationItem renders', () => {
  const wrapper = shallow(<NotificationItem
    value={'test'}
    type={'basic'}
  />);
  expect(wrapper.exists()).toBe(true);
});

test('NotificationItem renders the right html', () => {
  const wrapper = shallow(
  <NotificationItem
    html={{ __html: '<p>Test</p>' }}
    type='basic'
  />);
  expect(wrapper.html()).toBe(
    '<li data-priority="basic" class="notification-basic"><p>Test</p></li>'
  );
});


test('NotificationItem calls markAsRead when clicked on', () => {
  const spyMarkAsRead = jest.fn();
  render(<NotificationItem value={'test'} type={'basic'} markAsRead={spyMarkAsRead} />);
  const li_elems = screen.getAllByRole('listitem');

  li_elems.forEach((li) => {
    fireEvent.click(li);
  });

  expect(spyMarkAsRead).toHaveBeenCalled();
});


test('NotificationItem calls markAsRead with correct id argument when clicked on', () => {
  const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => void(0));
  render(<NotificationItem value={'test'} type={'basic'} markAsRead={() => console.log('ID')} />);
  const li_elems = screen.getAllByRole('listitem');

  li_elems.forEach((li) => {
    fireEvent.click(li);
  });

  expect(mockConsoleLog).toHaveBeenCalledWith('ID');
});