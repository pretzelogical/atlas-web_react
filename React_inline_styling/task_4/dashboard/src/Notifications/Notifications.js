import NotificationItem from './NotificationItem.js';
import React from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape.js';
import { StyleSheet, css } from 'aphrodite';

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
  };

  constructor(props) {
    super(props);
    this.markAsRead = this.markAsRead.bind(this);
  }

  markAsRead(id) {
    console.log(`Notification ${id} has been marked as read`);
  }

  shouldComponentUpdate(nextProps) {
    return (
      nextProps.listNotifications.length > this.props.listNotifications.length
    );
  }

  render() {
    return (
      <div className={css(notificationsStyles.notificationsDisplay)}>
        {this.props.displayDrawer ? null : (
          <div className={css(notificationsStyles.menuItem)}>
            <p>Your notifications</p>
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
              onClick={() => console.log('Close button has been clicked')}
            >
              x
            </button>
            <p>Here is the list of notifications</p>
            <ul className={css(notificationsStyles.notificationsUl)}>
              {this.props.listNotifications.length === 0 ? (
                <li>No new notification for now</li>
              ) : (
                this.props.listNotifications.map((notif) => {
                  if (!notif.value) {
                    return (
                      <NotificationItem
                        type={notif.type}
                        html={notif.html}
                        key={notif.id}
                        markAsRead={() => this.markAsRead(notif.id)}
                      />
                    );
                  }
                  return (
                    <NotificationItem
                      type={notif.type}
                      value={notif.value}
                      key={notif.id}
                      markAsRead={() => this.markAsRead(notif.id)}
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
  listNotifications: PropTypes.arrayOf(PropTypes.shape(NotificationItemShape)),
};

export default Notifications;
