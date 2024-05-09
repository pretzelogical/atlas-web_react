import './App.css';
import Notifications from '../Notifications/Notifications.js';
import React from 'react';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';

function App({ isLoggedin = false }) {
  const listCourses = [
    {
      id: 1,
      name: 'ES6',
      credit: 60,
    },
    {
      id: 2,
      name: 'Webpack',
      credit: 20,
    },
    {
      id: 3,
      name: 'React',
      credit: 40,
    },
  ];
  return (
    <>
      <div className="root-notifications"></div>
      <div className="App-header">
        <Header />
        <Notifications />
      </div>
      <div className="App-body">
        <main>
          {isLoggedin ? <CourseList listCourses={listCourses} /> : <Login />}
        </main>
      </div>
      <div className="App-footer">
        <Footer />
      </div>
    </>
  );
}

App.propTypes = {
  isLoggedin: PropTypes.bool,
};

export default App;
