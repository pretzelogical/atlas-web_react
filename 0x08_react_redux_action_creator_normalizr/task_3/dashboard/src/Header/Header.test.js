import React from "react";
import { shallow, jest } from "../../config/setupTests.mjs";
import Header from "./Header.js";
import { StyleSheetTestUtils } from "aphrodite";
import { render, screen, fireEvent } from "@testing-library/react";
import App from "../App/App.js";
import AppContext from "../App/AppContext.js";

beforeEach(() => {
  StyleSheetTestUtils.suppressStyleInjection();
});

afterEach(() => {
  StyleSheetTestUtils.clearBufferAndResumeStyleInjection();
});

test("Header renders", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.exists()).toBe(true);
});

test("Header renders img and h1 tags", () => {
  const wrapper = shallow(<Header />);
  expect(wrapper.children().find("img").exists()).toBe(true);
  expect(wrapper.children().find("h1").exists()).toBe(true);
});

test("Header does not render logout section with default context value", () => {
  render(<Header />);

  // Logout text is not rendered
  expect(() => screen.getByText("(logout)")).toThrow();
});

test("Header does render logout section with user.email set and user.isLoggedIn = true in the context", () => {
  render(
    <AppContext.Provider
      value={{
        user: {
          email: "test",
          password: "",
          isLoggedIn: true,
        },
      }}
    >
      <Header />
    </AppContext.Provider>
  );

  // Logout text is rendered
  expect(screen.getByText("(logout)")).toBeTruthy();
});


test("Header does render logout section with user.email set and user.isLoggedIn = true in the context", () => {
  const logOutMock = jest.fn();
  render(
    <AppContext.Provider
      value={{
        user: {
          email: "test",
          password: "",
          isLoggedIn: true,
        },
        logOut: logOutMock
      }}
    >
      <Header />
    </AppContext.Provider>
  );
  const logOutButton = screen.getByText("(logout)");

  fireEvent.click(logOutButton);

  expect(logOutMock).toHaveBeenCalled();
});
