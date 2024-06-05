import NotificationItem from './NotificationItem.js';
import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';
import { connect } from 'react-redux';
import { fetchNotifications, markAsRead } from '../actions/notificationActionCreators.js';
import { getUnreadNotifications } from '../selectors/notificationSelector.js';
import { Map as ImmutableMap } from 'immutable';

const translateKeyFrames = {
  '0%': {
    transform: 'translateY(0)',
  },
  '50%': {
    transform: 'translateY(-6px)',
  },
  '100%': {
    transform: 'translateY(0)',
  },
};

const opacityKeyFrames = {
  '0%': {
    opacity: '1',
  },
  '50%': {
    opacity: '0.50',
  },
  '100%': {
    opacity: '1',
  },
};

const notificationsStyles = StyleSheet.create({
  notificationsDisplay: {
    top: '4px',
    position: 'absolute',
    flexFlow: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    width: '100%',
    zIndex: '1000',
    '@media (min-width: 900px)': {
      marginRight: '2rem',
      marginBottom: 'auto',
      marginLeft: 'auto',
      right: '20px',
      top: '0',
    },
  },

  notifications: {
    display: 'flex',
    position: 'absolute',
    flexFlow: 'column',
    paddingBottom: '0.3rem',
    width: '100vw',
    height: 'calc(95vh + 32px)',
    top: '0',
    backgroundColor: 'white',
    '@media (min-width: 900px)': {
      border: '2px dashed black',
      width: 'min(30vw, 400px)',
      height: 'auto',
      padding: '1rem',
      right: '-20px',
      top: '20px',
    },
  },

  notificationsUl: {
    marginTop: 0,
    paddingLeft: '0px',
    '@media (min-width: 900px)': {
      marginLeft: '20px',
    },
  },

  menuItem: {
    ':hover': {
      animationName: [translateKeyFrames, opacityKeyFrames],
      animationDuration: '0.5s, 1s',
      animationIterationCount: '3',
    },
    cursor: 'pointer',
    position: 'absolute',
    top: '-4px',
    right: '30px',
    whiteSpace: 'nowrap',
    zIndex: '-1',
    '@media (min-width: 900px)': {
      top: '0px',
      right: '-20px',
    },
  },
});

class Notifications extends React.Component {
  static defaultProps = {
    displayDrawer: false,
    listNotifications: [],
    handleDisplayDrawer: () => void(0),
    handleHideDrawer: () => void(0),
    markAsRead: () => void(0)
  };

  componentDidMount() {
    this.props.fetchNotifications();
  }

  constructor(props) {
    super(props);
  }

  render() {
    return (
      <div className={css(notificationsStyles.notificationsDisplay)}>
        {this.props.displayDrawer ? null : (
          <div
            className={css(notificationsStyles.menuItem)}
          >
            <p onClick={() => this.props.handleDisplayDrawer()} >Your notifications</p>
          </div>
        )}
        {this.props.displayDrawer ? (
          <div className={css(notificationsStyles.notifications)}>
            <button
              style={{
                background: 'none',
                border: 'none',
                fontSize: '20px',
                cursor: 'pointer',
                marginLeft: 'auto',
                marginBottom: '0',
                color: 'gray',
              }}
              aria-label="close"
              onClick={() => this.props.handleHideDrawer()}
            >
              x
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(notificationsStyles.notificationsUl)}>
              {!ImmutableMap.isMap(this.props.listNotifications) || this.props.listNotifications.isEmpty() ? (
                <li>No new notification for now</li>
              ) : (
                this.props.listNotifications.valueSeq().map((notif) => {
                  if (!notif.get('value')) {
                    return (
                      <NotificationItem
                        type={notif.get('type')}
                        html={notif.get('html')}
                        key={notif.get('guid')}
                        markAsRead={() => this.props.markAsRead(notif.get('guid'))}
                      />
                    );
                  }
                  return (
                    <NotificationItem
                      type={notif.get('type')}
                      value={notif.get('value')}
                      key={notif.get('guid')}
                      markAsRead={() => this.props.markAsRead(notif.get('guid'))}
                    />
                  );
                })
              )}
            </ul>
          </div>
        ) : null}
      </div>
    );
  }
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
  // NOTE: For some reason (probably the getIn function) this prop is an array on first load
  listNotifications: PropTypes.oneOfType([PropTypes.array, PropTypes.object]),
  handleDisplayDrawer: PropTypes.func,
  handleHideDrawer: PropTypes.func,
  fetchNotifications: PropTypes.func,
  markAsRead: PropTypes.func
};

const mapStateToProps = (state) => ({
  listNotifications: getUnreadNotifications(state),
});

const mapDispatchToProps = (dispatch) => ({
  fetchNotifications: () => dispatch(fetchNotifications()),
  markAsRead: (index) => dispatch(markAsRead(index)),
});

export default connect(mapStateToProps, mapDispatchToProps)(Notifications);
