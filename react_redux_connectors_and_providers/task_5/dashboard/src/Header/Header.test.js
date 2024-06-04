import React from "react";
import Header from "./Header.js";
import { StyleSheetTestUtils } from "aphrodite";
import { screen, fireEvent } from "@testing-library/react";
import { renderWithProviders, initialAppState } from "../utils/test_utils.js";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

const loggedInState = (() => {
  const appState = { ...initialAppState };
  appState.ui = appState.ui.setIn(['user', 'isLoggedIn'], true);
  return appState;
})();

test("Header renders", () => {
  renderWithProviders(<Header />);
});

test("Header renders img and h1", () => {
  renderWithProviders(<Header />);
  expect(screen.getByRole('img').localName).toEqual('img');
  expect(screen.getByRole('heading').localName).toEqual('h1');
});

test("Header does not render logout section when not logged in", () => {
  // Default is not logged in
  renderWithProviders(<Header />);

  // Logout text is not rendered
  expect(() => screen.getByText("(logout)")).toThrow();
});

test("Header does render logout section with user.email set and user.isLoggedIn = true in the state", () => {
  renderWithProviders(<Header />, loggedInState);

  // Logout text is rendered
  expect(screen.getByText("(logout)")).toBeTruthy();
});


test("Clicking the logout button logs out the user", () => {
  const { rerenderWithStore } = renderWithProviders(<Header />, loggedInState);

  fireEvent.click(screen.getByText("(logout)"));
  rerenderWithStore(<Header />);

  expect(() => screen.getByText("(logout)")).toThrow();
});
