import React from "react";

// No styling for this component :P

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
          <input type="email" name="email" id="email" />
        </div>
        <div>
          <label
            htmlFor="password"
            onClick={() => document.getElementById('password').focus()}
          >
            Password:
          </label>
          <input type="password" name="password" id="password" />
        </div>
        <div>
          <button id="confirm">OK</button>
        </div>
      </div>
    </>
  );
}
