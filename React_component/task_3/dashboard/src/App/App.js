import './App.css';
import Notifications from '../Notifications/Notifications.js';
import React from 'react';
import Footer from '../Footer/Footer.js';
import Header from '../Header/Header.js';
import Login from '../Login/Login.js';
import PropTypes from 'prop-types';
import CourseList from '../CourseList/CourseList.js';
import BodySectionWithMarginBottom from '../BodySection/BodySectionWithMarginBottom.js';
import BodySection from '../BodySection/BodySection.js';

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

const listNotifications = [
  {
    id: 1,
    type: 'default',
    value: 'Default Notification',
  },
  {
    id: 2,
    type: 'urgent',
    value: 'Urgent Notification',
  },
  {
    id: 3,
    type: 'urgent',
    html: { __html: '<b>Html</b> notification' },
  },
];

class App extends React.Component {
  static defaultProps = {
    isLoggedIn: false,
    logOut: () => void(0)
  }

  componentDidMount() {
    document.addEventListener('keydown', (e) => {
      if (e.ctrlKey && e.key === 'h') {
        alert('Logging you out');
        this.props.logOut();
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener('keydown', document);
  }

  render() {
    return (
      <>
        <div className="root-notifications"></div>
        <div className="App-header">
          <Header />
          <Notifications listNotifications={listNotifications} />
        </div>
        <div className="App-body">
          <main>
            <BodySectionWithMarginBottom>
              {this.props.isLoggedin ? <CourseList listCourses={listCourses} /> : <Login />}
            </BodySectionWithMarginBottom>
            <BodySection>
              <h2>News from the School</h2>
              <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo provident possimus numquam autem.</p>
            </BodySection>
          </main>
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </>
    );
  }
}

App.propTypes = {
  isLoggedin: PropTypes.bool,
  logOut: PropTypes.func
};

export default App;
