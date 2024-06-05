import React from "react";
import { shallow } from "../../config/setupTests.mjs";
import { render, screen } from "@testing-library/react";
import AppContext from "../App/AppContext.js";
import Footer from "./Footer.js";
import { Provider } from "react-redux";
import { renderWithProviders, initialAppState } from "../utils/test_utils.js";

test("Footer renders", () => {
  renderWithProviders(<Footer />);
});

test('Footer at the very least renders the text "Copyright"', () => {
  renderWithProviders(<Footer />);
  expect(screen.getByText(/^Copyright 2020 - /)).toBeTruthy();
});

test("Footer does not display contact link when the user is logged out", () => {
  renderWithProviders(<Footer />);

  expect(() => screen.getByText("Contact us")).toThrow();
});

test("Footer does display contact link when the user is logged in", () => {
  const appState = { ...initialAppState };
  appState.ui = appState.ui.setIn(['user', 'isLoggedIn'], true);
  renderWithProviders(<Footer />, appState);

  expect(screen.getByText("Contact us")).toBeTruthy();
});
