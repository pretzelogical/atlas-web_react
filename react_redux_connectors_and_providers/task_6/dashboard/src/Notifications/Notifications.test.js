import React from "react";
import Notifications from "./Notifications.js";
import { shallow } from "../../config/setupTests.mjs";
import { render, fireEvent, screen } from "@testing-library/react";
import { jest } from "../../config/setupTests.mjs";
import { StyleSheetTestUtils } from "aphrodite";
import { renderWithProviders, initialAppState } from "../utils/test_utils.js";
import { notificationsNormalizer } from "../schema/notifications.js";
import { fromJS } from 'immutable';
import fs from 'fs';

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const initialNotificationState = (() => {
  let newAppState = { ...initialAppState };
  const data = JSON.parse(fs.readFileSync('./src/dist/notifications.json', 'utf8'));
  newAppState.notifications = fromJS({ notifications: notificationsNormalizer(data) });
  console.log(newAppState.notifications.toJS(), newAppState);
  return newAppState;
})();

test("Notification renders", () => {
  renderWithProviders(<Notifications/>);
});

test("Notification renders list items", () => {
  renderWithProviders(<Notifications displayDrawer />, initialNotificationState);
  expect(screen.getAllByRole("listitem")).toBeTruthy();
});

test('Notification paragraph contains "Here is the list of notifications"', () => {
  renderWithProviders(<Notifications displayDrawer />, initialNotificationState);
  expect(screen.getByText('Here is the list of notifications')).toBeTruthy();
});

test("Notification title para is being displayed when displayDrawer is false", () => {
  renderWithProviders(<Notifications />, initialNotificationState);
  expect(screen.getByText('Your notifications')).toBeTruthy();
});

test("check div.notifications is not being displayed when displayDrawer is false", () => {
  renderWithProviders(<Notifications />, initialNotificationState);
  expect(() => screen.getByText('Here is the list of notifications')).toThrow();
});

test("Notifications renders correctly when not passed listNotifications", () => {
  renderWithProviders(<Notifications />, initialAppState);
});

test("Notifications renders correct empty text", () => {
  renderWithProviders(<Notifications displayDrawer />, initialAppState);
  expect(screen.getByText('No new notification for now')).toBeTruthy();
});

test.skip("markAsRead function is called when a notification is clicked", () => {
  const markAsReadMock = jest.fn();
  render(
    <Notifications
      displayDrawer={true}
      listNotifications={listNotifications}
      markAsRead={markAsReadMock}
    />
  );
  const li_elems = screen.getAllByRole("listitem");

  li_elems.forEach((li) => {
    fireEvent.click(li);
  });

  expect(markAsReadMock).toHaveBeenCalledTimes(3);
});


test.skip("Does rerender when updating with a longer notification list", () => {
  const { rerenderWithStore, container } = renderWithProviders(<Notifications displayDrawer />, initialNotificationState);
  // console.log(container.innerHTML);
  const li_count = screen.getAllByRole("listitem").length;
  console.log(li_count);
});

test.skip("Notifications calls handleDisplayDrawer when menu item is clicked", () => {
  const mockHandleDisplayDrawer = jest.fn();
  render(<Notifications handleDisplayDrawer={mockHandleDisplayDrawer} />);
  const menuItem = screen.getByText("Your notifications");

  fireEvent.click(menuItem);

  expect(mockHandleDisplayDrawer).toHaveBeenCalled();
});

test.skip("Notifications calls handleHideDrawer when close button is clicked", () => {
  const mockHandleHideDrawer = jest.fn();
  render(
    <Notifications handleHideDrawer={mockHandleHideDrawer} displayDrawer />
  );
  const button = screen.getByText("x");

  fireEvent.click(button);

  expect(mockHandleHideDrawer).toHaveBeenCalled();
});
