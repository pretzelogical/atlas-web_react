import './Notifications.css'
import { getLatestNotification } from '../utils/utils.js';


export default function Notifications () {
  return (
    <div className="notifications">
      <div>
        <p>Here is the list of notifications</p>
        <ul>
          <li
          className="notification-default"
          data-priority="default"
          >New course available</li>
          <li
          className="notification-urgent"
          data-priority="urgent"
          >New resume available</li>
          <li
          className="notification-urgent"
          data-priority="urgent"
          dangerouslySetInnerHTML={{__html: getLatestNotification()}}
          ></li>
        </ul>
      </div>
        <button
        style={{
          background: 'none',
          border: 'none',
          fontSize: '25px',
          alignSelf: 'start',
          marginLeft: 'auto',
          cursor: 'pointer'
        }}
        aria-label='close'
        onClick={() => console.log('Close button has been clicked')}
        >x</button>
    </div>
  )
}