import './App.css';
import Notifications from '../Notifications/Notifications.js';
import React from 'react';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';


function App({ isLoggedin = false }) {
  return (
    <>
      <div className="root-notifications">
      </div>
      <div className='App-header'>
        <Header />
        <Notifications />
      </div>
      <div className="App-body">
          <main>
            {isLoggedin ? <CourseList /> : <Login />}
          </main>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedin: PropTypes.bool
};

export default App;
