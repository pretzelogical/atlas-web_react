import React from "react";
import HolbertonLogo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";
import { useSelector, useDispatch } from "react-redux";
import { logout } from "../actions/uiActionCreators.js";

const headerStyles = StyleSheet.create({
  header: {
    display: "flex",
    alignItems: "center",
  },
  h1: {
    color: "#dd283f",
    margin: "2px 0px",
  },
  logoutSection: {
    margin: "0",
  },
  logOut: {
    textDecoration: "underline",
    cursor: "pointer",
  },
});

export default function Header() {
  const email = useSelector((state) => state.ui.getIn(['user', 'email']));
  const isLoggedIn = useSelector((state) => state.ui.getIn(['user', 'isLoggedIn']));
  const dispatch = useDispatch();

  return (
    <header className={css(headerStyles.header)}>
      <img
        src={HolbertonLogo}
        alt="Holberton Logo"
        width={256}
        height={256}
      ></img>
      <div>
        <h1 className={css(headerStyles.h1)}>School Dashboard</h1>
        {isLoggedIn ? (
          <section
            className={css(headerStyles.logoutSection)}
            id="logoutSection"
          >
            <p>
              Welcome {email}{" "}
              <a className={css(headerStyles.logOut)} onClick={() => dispatch(logout())}>
                (logout)
              </a>
            </p>
          </section>
        ) : null}
      </div>
    </header>
  );
}
