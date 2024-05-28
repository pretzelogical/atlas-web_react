import React from "react";
import { shallow } from "../../config/setupTests.mjs";
import { render, screen } from "@testing-library/react";
import AppContext from "../App/AppContext.js";
import Footer from "./Footer.js";

test("Footer renders", () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.exists()).toBe(true);
});

test('Footer at the very least renders the text "Copyright"', () => {
  const wrapper = shallow(<Footer />);
  expect(wrapper.html().toLowerCase().includes("copyright")).toBe(true);
});

test("Footer does not display contact link when the user is logged out", () => {
  render(<Footer />);

  expect(() => screen.getByText("Contact us")).toThrow();
});

test("Footer does display contact link when the user is logged in", () => {
  render(
    <AppContext.Provider value={{
      user: {
        email: 'email',
        password: '_',
        isLoggedIn: true
      }
    }}>
      <Footer />
    </AppContext.Provider>
  );

  expect(screen.getByText("Contact us")).toBeTruthy();
});
