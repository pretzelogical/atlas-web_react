import React from 'react';


export default function NotificationItem({type, value, html}) {
  if (!html) {
    return <li
    className={`notification-${type}`}
    data-priority={type}
    >{value}</li>
  } else {
    return <li
    data-priority={type}
    className={`notification-${type}`}
    dangerouslySetInnerHTML={{ __html: html }}></li>
  }
}