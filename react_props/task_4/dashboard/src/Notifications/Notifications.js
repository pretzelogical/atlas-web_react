import './Notifications.css';
import { getLatestNotification } from '../utils/utils.js';
import NotificationItem from './NotificationItem.js';
import React from 'react';

export default function Notifications() {
  return (
    <div className="notifications">
      <div>
        <p>Here is the list of notifications</p>
        <ul>
          <NotificationItem
            type="default"
            value="New course available"
          />
          <NotificationItem
            type="urgent"
            value="New resume available"
          />
          <NotificationItem
            type="urgent"
            html={{ __html: getLatestNotification() }}
          />
        </ul>
      </div>
      <button
        style={{
          background: 'none',
          border: 'none',
          fontSize: '25px',
          alignSelf: 'start',
          marginLeft: 'auto',
          cursor: 'pointer',
        }}
        aria-label="close"
        onClick={() => console.log('Close button has been clicked')}
      >
        x
      </button>
    </div>
  );
}
