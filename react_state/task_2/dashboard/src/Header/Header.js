import React, { useContext } from "react";
import HolbertonLogo from "../assets/holberton_logo.jpg";
import { StyleSheet, css } from "aphrodite";
import AppContext from "../App/AppContext.js";

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
  const { user, logOut } = useContext(AppContext);
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
        {user.isLoggedIn ? (
          <section
            className={css(headerStyles.logoutSection)}
            id="logoutSection"
          >
            <p>
              Welcome {user.email}{" "}
              <a className={css(headerStyles.logOut)} onClick={logOut}>
                (logout)
              </a>
            </p>
          </section>
        ) : null}
      </div>
    </header>
  );
}
