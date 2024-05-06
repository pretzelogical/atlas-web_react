import './App.css';
import Notifications from '../Notifications/Notifications.js';
import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';


function App() {
  return (
    <>
      <div className="root-notifications">
        <Notifications />
      </div>
      <Header />
      <div className="App-body">
        <Login />
      </div>
      <Footer />
    </>
  );
}

export default App;
