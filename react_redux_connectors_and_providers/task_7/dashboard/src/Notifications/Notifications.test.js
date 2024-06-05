import React from "react";
import Notifications from "./Notifications.js";
import { shallow } from "../../config/setupTests.mjs";
import { render, fireEvent, screen } from "@testing-library/react";
import { jest } from "../../config/setupTests.mjs";
import { StyleSheetTestUtils } from "aphrodite";
import { renderWithProviders, initialAppState, initialNotificationState } from "../utils/test_utils.js";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

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

test("markAsRead function is called when a notification is clicked", async () => {
  // Mock the markAsRead dispatch
  const { rerenderWithStore, store } = renderWithProviders(<Notifications displayDrawer />, initialNotificationState);
  const li_elems = screen.getAllByRole("listitem");
  console.log(li_elems);
  console.log(store.getState().notifications.toJS());

  li_elems.forEach((li) => {
    fireEvent.click(li);
  });

  rerenderWithStore(<Notifications displayDrawer />);

  expect(screen.getByText('No new notification for now')).toBeTruthy();
});


test.skip("Does rerender when updating with a longer notification list", () => {
  renderWithProviders(<Notifications displayDrawer />, initialNotificationState);
  // console.log(container.innerHTML);
  const li_count = screen.getAllByRole("listitem").length;
  console.log(li_count);
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
