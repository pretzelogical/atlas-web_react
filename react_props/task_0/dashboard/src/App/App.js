import './App.css';
import Notifications from '../Notifications/Notifications.js';
import HolbertonLogo from '../assets/holberton_logo.jpg';
import { getFooterCopy } from '../utils/utils.js';
import React from 'react';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';


function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <div className='App-header'>
        <Header />
      </div>
      <div className="App-body">
          <main>
            <Login />
          </main>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
