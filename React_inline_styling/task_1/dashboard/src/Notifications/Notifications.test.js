import React from 'react';
import Notifications from './Notifications.js';
import { shallow } from '../../config/setupTests.mjs';
import { render, fireEvent, screen } from '@testing-library/react';
import { jest } from '../../config/setupTests.mjs';
import { StyleSheetTestUtils } from "aphrodite";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});


const listNotifications = [
  {
    id: 1,
    type: 'default',
    value: 'Default Notification',
  },
  {
    id: 2,
    type: 'urgent',
    value: 'Urgent Notification',
  },
  {
    id: 3,
    type: 'urgent',
    html: { __html: '<b>Html</b> notification' },
  },
];

test('Notification renders', () => {
  shallow(<Notifications />);
});

test('Notification renders three list items', () => {
  const wrapper = shallow(
    <Notifications
      displayDrawer={true}
      listNotifications={listNotifications}
    />,
  );
  expect(wrapper.exists('NotificationItem')).toBe(true);
});

test('Notification paragraph contains "Here is the list of notifications"', () => {
  const wrapper = shallow(<Notifications displayDrawer />);
  expect(wrapper.find('p').at(1).text()).toBe(
    'Here is the list of notifications',
  );
});

test('Notification title para is being displayed when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications displayDrawer={false} />);
  expect(wrapper.find('p').text()).toBe('Your notifications');
});

test('check div.notifications is not being displayed when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications displayDrawer={false} />);
  expect(wrapper.exists('div.notifications')).toBe(false);
});

test('check div.notifications is not being displayed when displayDrawer is false', () => {
  const wrapper = shallow(<Notifications displayDrawer={false} />);
  expect(wrapper.exists('div.notifications')).toBe(false);
});

test('Notifications renders correctly when not passed listNotifications', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.exists()).toBe(true);
});

test('Notifications renders correctly when not passed listNotifications', () => {
  const wrapper = shallow(<Notifications />);
  expect(wrapper.exists()).toBe(true);
});

test('Notifications renders list of notifications', () => {
  const wrapper = shallow(
    <Notifications listNotifications={listNotifications} />,
  );
  expect(wrapper.exists()).toBe(true);
});

test('Notifications renders correct empty text', () => {
  const wrapper = shallow(<Notifications displayDrawer={true} />);
  expect(wrapper.find('li').length).toBe(1);
  expect(wrapper.find('li').text()).toBe('No new notification for now');
});

test('Console.log function is called when a notification is clicked', () => {
  render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => void(0));
  const li_elems = screen.getAllByRole('listitem');

  li_elems.forEach((li) => {
    fireEvent.click(li);
  });

  expect(mockConsoleLog).toHaveBeenCalledTimes(3);
  mockConsoleLog.mockRestore();
});

test('Check that when simulating a click on the component the spy is called with the right ID argument', () => {
  render(<Notifications displayDrawer={true} listNotifications={listNotifications} />);
  const mockConsoleLog = jest.spyOn(console, 'log').mockImplementation(() => void(0));
  const li_elems = screen.getAllByRole('listitem');

  li_elems.forEach((li) => {
    fireEvent.click(li);
  });

  expect(mockConsoleLog.mock.calls).toEqual([
    ['Notification 1 has been marked as read'],
    ['Notification 2 has been marked as read'],
    ['Notification 3 has been marked as read']
  ]);
  mockConsoleLog.mockRestore();
});

test('Does not rerender when updating with the same notification list', () => {
  const { rerender } = render(
    <Notifications displayDrawer listNotifications={listNotifications} />
  );
  const li_count = screen.getAllByRole('listitem').length;

  rerender(
    <Notifications displayDrawer listNotifications={listNotifications} />
  );

  expect(screen.getAllByRole('listitem').length).toBe(li_count);
});

test('Does rerender when updating with a longer notification list', () => {
  const { rerender } = render(
    <Notifications displayDrawer listNotifications={listNotifications} />
  );
  const li_count = screen.getAllByRole('listitem').length;
  const newListNotifications = Array.from(listNotifications);
  newListNotifications.push({
    id: 4,
    type: 'default',
    value: 'new notification'
  });

  rerender(
    <Notifications displayDrawer listNotifications={newListNotifications} />
  );

  expect(screen.getAllByRole('listitem').length).toBe(li_count + 1);
});