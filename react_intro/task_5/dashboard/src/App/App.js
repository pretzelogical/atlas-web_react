import './App.css';
import Notifications from '../Notifications/Notifications.js';
import HolbertonLogo from '../assets/holberton_logo.jpg';
import { getFooterCopy } from '../utils/utils.js';


function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className='App-header'>
        <img
        src={HolbertonLogo}
        alt='Holberton Logo'
        width={256}
        height={256}></img>
        <h1>School Dashboard</h1>
      </div>
      <div className="App-body">
        <p>Login to access the full dashboard</p>
        <div className="App-body-login">
          <div>
            <label
            htmlFor="email"
            onClick={() => document.getElementById('email').focus()}
            >Email:</label>
            <input type="email" name="email" id="email" />
          </div>
          <div>
            <label
            htmlFor="password"
            onClick={() => document.getElementById('password').focus()}
            >Password:</label>
            <input type="password" name="password" id="password" />
          </div>
          <div>
            <button id='confirm'>OK</button>
          </div>
        </div>
      </div>
      <div className="App-footer">
        <p>Copyright 2020 - {getFooterCopy(true)}</p>
      </div>
    </>
  );
}

export default App;
