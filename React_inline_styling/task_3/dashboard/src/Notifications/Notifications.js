import NotificationItem from './NotificationItem.js';
import React from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape.js';
import { StyleSheet, css } from 'aphrodite';

const notificationsStyles = StyleSheet.create({
  notificationsDisplay: {
    display: 'flex',
    flexFlow: 'column',
    justifyContent: 'flex-end',
    alignItems: 'flex-end',
    marginLeft: 'auto',
    marginRight: '2rem',
    marginBottom: 'auto'
  },

  notifications: {
    display: 'flex',
    flexFlow: 'column',
    padding: '1rem',
    paddingBottom: '0.3rem',
    border: '2px dashed black',
    width: 'min(30vw, 400px)',
    alignSelf: 'flex-end'
  },

  notifcationsUl: {
    marginTop: 0
  },

  menuItem: {
    display: 'inline'
  }
});


class Notifications extends React.Component {
  static defaultProps = {
    displayDrawer: false,
    listNotifications: []
  }

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
        <div className={css(notificationsStyles.menuItem)}>
          <p>Your notifications</p>
        </div>
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
            <ul className={css(notificationsStyles.notifcationsUl)}>
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
