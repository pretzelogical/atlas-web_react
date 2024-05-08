import './Notifications.css';
import { getLatestNotification } from '../utils/utils.js';
import NotificationItem from './NotificationItem.js';
import React from 'react';
import PropTypes from 'prop-types';

function Notifications({ displayDrawer = false }) {
  return (
    <div className='notifications-display'>
      <div className="menuItem">
        <p>Your notifications</p>
      </div>
      <div
        className="notifications"
        style={{ display: displayDrawer ? 'default' : 'none' }}
      >
        <button
          style={{
            background: 'none',
            border: 'none',
            fontSize: '25px',
            alignSelf: 'end',
            textAlign: 'right',
            cursor: 'pointer',
          }}
          aria-label="close"
          onClick={() => console.log('Close button has been clicked')}
        >
          x
        </button>
        <div>
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
      </div>
    </div>
  );
}

Notifications.propTypes = {
  displayDrawer: PropTypes.bool
};

export default Notifications;