import React from 'react';
import PropTypes from 'prop-types';


function NotificationItem({type = 'default', value, html, markAsRead = () => void(0) }) {
  if (!html) {
    return <li
    className={`notification-${type}`}
    data-priority={type}
    onClick={() => markAsRead()}
    >{value}</li>
  } else {
    return <li
    data-priority={type}
    className={`notification-${type}`}
    onClick={() => markAsRead()}
    dangerouslySetInnerHTML={html}></li>
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func
};

export default NotificationItem;