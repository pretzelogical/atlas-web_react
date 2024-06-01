import Notifications from "../Notifications/Notifications.js";
import React from "react";
import { connect } from "react-redux";
import Footer from "../Footer/Footer.js";
import Header from "../Header/Header.js";
import PropTypes from "prop-types";
import Login from "../Login/Login.js";
import { Map as ImmutableMap } from "immutable";
import CourseList from "../CourseList/CourseList.js";
import AppContext from "./AppContext.js";
import BodySectionWithMarginBottom from "../BodySection/BodySectionWithMarginBottom.js";
import BodySection from "../BodySection/BodySection.js";
import { StyleSheet, css } from "aphrodite";

const listCourses = [
  {
    id: 1,
    name: "ES6",
    credit: 60,
  },
  {
    id: 2,
    name: "Webpack",
    credit: 20,
  },
  {
    id: 3,
    name: "React",
    credit: 40,
  },
];

const defaultListNotifications = [
  {
    id: 1,
    type: "default",
    value: "Default Notification",
  },
  {
    id: 2,
    type: "urgent",
    value: "Urgent Notification",
  },
  {
    id: 3,
    type: "urgent",
    html: { __html: "<b>Html</b> notification" },
  },
];

const appStyle = StyleSheet.create({
  appHeader: {
    borderBottom: "3px solid #dd283f",
    display: "flex",
    alignItems: "center",
    paddingBottom: "16px",
  },
  appBody: {
    margin: "4rem",
    marginBottom: "auto",
  },
});

class App extends React.Component {
  static defaultProps = {
    isLoggedIn: false,
  }

  constructor(props) {
    super(props);
    this.state = {
      user: {
        email: "",
        password: "",
        isLoggedIn: props.user.isLoggedIn
      },
      logOut: () => void 0,
      displayDrawer: false,
      listNotifications: Array.from(defaultListNotifications),
    };
  }

  handleDisplayDrawer = () => {
    this.setState({
      displayDrawer: true,
    });
  };

  handleHideDrawer = () => {
    this.setState({
      displayDrawer: false,
    });
  };

  logIn = (email, password) => {
    this.setState({
      user: {
        email,
        password,
        isLoggedIn: true,
      },
    });
  };

  logOut = () => {
    this.setState({
      user: {
        email: "",
        password: "",
        isLoggedIn: false,
      },
    });
  };

  markNotificationAsRead = (id) => {
    this.setState({
      listNotifications: this.state.listNotifications.filter(
        (notif) => id !== notif.id
      ),
    });
  };

  componentDidMount() {
    document.addEventListener("keydown", (e) => {
      if (e.ctrlKey && e.key === "h") {
        alert("Logging you out");
        this.logOut();
      }
    });
  }

  componentWillUnmount() {
    document.removeEventListener("keydown", document);
  }

  render() {
    return (
      <AppContext.Provider
        value={{
          user: this.state.user,
          logOut: this.logOut,
        }}
      >
        <div className={css(appStyle.appHeader)}>
          <Header />
          <Notifications
            listNotifications={this.state.listNotifications}
            displayDrawer={this.state.displayDrawer}
            handleDisplayDrawer={this.handleDisplayDrawer}
            handleHideDrawer={this.handleHideDrawer}
            markAsRead={this.markNotificationAsRead}
            key={this.state.listNotifications.length}
          />
        </div>
        <div className={css(appStyle.appBody)}>
          <main>
            <p>{this.state.displayDrawer}</p>
            <BodySectionWithMarginBottom>
              {this.state.user.isLoggedIn ? (
                <CourseList listCourses={listCourses} />
              ) : (
                <Login logIn={this.logIn} />
              )}
            </BodySectionWithMarginBottom>
            <BodySection>
              <h2>News from the School</h2>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Illo
                provident possimus numquam autem.
              </p>
            </BodySection>
          </main>
        </div>
        <div className="App-footer">
          <Footer />
        </div>
      </AppContext.Provider>
    );
  }
}

App.propTypes = {
  user: PropTypes.shape({
    isLoggedIn: PropTypes.bool,
  }),
};

/**
 * Maps the state to props
 * @param {ImmutableMap} state
 * @returns {Object}
 */
export const mapStateToProps = (state) => ({
  user: {
    isLoggedIn: state.get('isUserLoggedIn')
  }
});

export default connect(mapStateToProps)(App);
