import React from 'react';
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
      backgroundColor: '#0000002f'
    }
  },
});

export default function Login() {
  return (
    <>
      <p>Login to access the full dashboard</p>
      <div className="App-body-login">
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
          />
        </div>
        <div>
          <button className={css(loginStyles.button)} id="confirm">
            OK
          </button>
        </div>
      </div>
    </>
  );
}
