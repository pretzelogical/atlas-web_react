import './Notifications.css';
import { getLatestNotification } from '../utils/utils.js';
import NotificationItem from './NotificationItem.js';
import React from 'react';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer = false }) {
  return (
    <div className="notifications-display">
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      {displayDrawer ? (
        <div
          className="notifications"
          // style={{ display: displayDrawer ? 'default' : 'none' }}
        >
          <button
            style={{
              background: 'none',
              border: 'none',
              fontSize: '20px',
              cursor: 'pointer',
              marginLeft: 'auto',
              marginBottom: '0',
              color: 'gray'
            }}
            aria-label="close"
            onClick={() => console.log('Close button has been clicked')}
          >
            x
          </button>
          <p>Here is the list of notifications</p>
          <ul>
            <NotificationItem type="default" value="New course available" />
            <NotificationItem type="urgent" value="New resume available" />
            <NotificationItem
              type="urgent"
              html={{ __html: getLatestNotification() }}
            />
          </ul>
        </div>
      ) : null}
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool,
};

export default Notifications;
