import './Notifications.css';
import NotificationItem from './NotificationItem.js';
import React from 'react';
import PropTypes from 'prop-types';
import NotificationItemShape from './NotificationItemShape.js';

// function Notifications({ displayDrawer = false, listNotifications = [] }) {
//   return (
//     <div className="notifications-display">
//       <div className="menuItem">
//         <p>Your notifications</p>
//       </div>
//       {displayDrawer ? (
//         <div className="notifications">
//           <button
//             style={{
//               background: 'none',
//               border: 'none',
//               fontSize: '20px',
//               cursor: 'pointer',
//               marginLeft: 'auto',
//               marginBottom: '0',
//               color: 'gray',
//             }}
//             aria-label="close"
//             onClick={() => console.log('Close button has been clicked')}
//           >
//             x
//           </button>
//           <p>Here is the list of notifications</p>
//           <ul>
//             {listNotifications.length === 0 ? (
//               <li>No new notification for now</li>
//             ) : (
//               listNotifications.map((notif) => {
//                 if (!notif.value) {
//                   return (
//                     <NotificationItem
//                       type={notif.type}
//                       html={notif.html}
//                       key={notif.id}
//                     />
//                   );
//                 }
//                 return (
//                   <NotificationItem
//                     type={notif.type}
//                     value={notif.value}
//                     key={notif.id}
//                   />
//                 );
//               })
//             )}
//           </ul>
//         </div>
//       ) : null}
//     </div>
//   );
// }

class Notifications extends React.Component {
  static defaultProps = {
    displayDrawer: true,
    listNotifications: []
  }

  markAsRead(id) {
    return () => console.log(`Notification ${id} has been marked as read`);
  }

  render() {
    return (
      <div className="notifications-display">
        <div className="menuItem">
          <p>Your notifications</p>
        </div>
        {this.props.displayDrawer ? (
          <div className="notifications">
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
            <ul>
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
                        markAsRead={this.markAsRead(notif.id)}
                      />
                    );
                  }
                  return (
                    <NotificationItem
                      type={notif.type}
                      value={notif.value}
                      key={notif.id}
                      markAsRead={this.markAsRead(notif.id)}
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
