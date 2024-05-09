import React from 'react';
import PropTypes from 'prop-types';


function NotificationItem({type = 'default', value, html}) {
  if (!html) {
    return <li
    className={`notification-${type}`}
    data-priority={type}
    >{value}</li>
  } else {
    return <li
    data-priority={type}
    className={`notification-${type}`}
    dangerouslySetInnerHTML={html}></li>
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string
};

export default NotificationItem;