import './App.css';
import Notifications from '../Notifications/Notifications.js';
import React from 'react';
import Header from '../Header/Header.js';
import Footer from '../Footer/Footer.js';
import Login from '../Login/Login.js';


function App() {
  return (
    <>
      <div className="App-notifications">
        <Notifications />
      </div>
      <div className="App-header">
        <Header />
      </div>
      <div className="App-body">
        <Login />
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}

export default App;
