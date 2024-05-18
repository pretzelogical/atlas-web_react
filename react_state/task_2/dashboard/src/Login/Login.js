import React, { useState, useEffect } from 'react';
import { StyleSheet, css } from 'aphrodite';

const loginStyles = StyleSheet.create({
  input: {
    border: 'none',
  },

  button: {
    border: '2px solid #f0bf77',
    borderRadius: '4px',
    backgroundColor: 'transparent',
    padding: '4px 8px',
    ':hover': {
      backgroundColor: '#0000002f',
    },
  },
});

export default function Login() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [enableSubmit, setEnableSubmit] = useState(false);
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const handleLoginSubmit = (e) => {
    e.preventDefault();
    setIsLoggedIn(true);
  };
  const handleChangeEmail = (newEmail) => setEmail(newEmail);
  const handleChangePassword = (newPassword) => setPassword(newPassword);

  useEffect(() => {
    setEnableSubmit(email.length > 0 && password.length > 0);
  }, [email, password]);

  return (
    <>
      <p>Login to access the full dashboard</p>
      <form className="App-body-login" onSubmit={(e) => handleLoginSubmit(e)}>
        <div>
          <label
            htmlFor="email"
            onClick={() => document.getElementById('email').focus()}
          >
            Email:
          </label>
          <input
            className={css(loginStyles.input)}
            type="email"
            name="email"
            id="email"
            role="textbox"
            value={email}
            onChange={(e) => handleChangeEmail(e.target.value)}
          />
        </div>
        <div>
          <label
            htmlFor="password"
            onClick={() => document.getElementById('password').focus()}
          >
            Password:
          </label>
          <input
            className={css(loginStyles.input)}
            type="password"
            name="password"
            id="password"
            role="textbox"
            value={password}
            onChange={(e) => handleChangePassword(e.target.value)}
          />
        </div>
        <div>
          <input
            type="submit"
            className={css(loginStyles.button)}
            id="confirm"
            value="OK"
            disabled={!enableSubmit}
          />
        </div>
      </form>
    </>
  );
}
