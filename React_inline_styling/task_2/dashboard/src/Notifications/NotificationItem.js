import React from 'react';
import PropTypes from 'prop-types';
import { StyleSheet, css } from 'aphrodite';

const notificationItemStyles = StyleSheet.create({
  'notification-default': {
    color: 'blue',
  },
  'notification-urgent': {
    color: 'red',
  },
});

class NotificationItem extends React.PureComponent {
  static defaultProps = {
    type: 'default',
    markAsRead: () => void 0,
  };

  render() {
    if (!this.props.html) {
      return (
        <li
          className={
            this.props.type === 'urgent'
              ? css(notificationItemStyles['notification-urgent'])
              : css(notificationItemStyles['notification-default'])
          }
          data-priority={this.props.type}
          onClick={this.props.markAsRead}
        >
          {this.props.value}
        </li>
      );
    } else {
      return (
        <li
          data-priority={this.props.type}
          className={
            this.props.type === 'urgent'
              ? css(notificationItemStyles['notification-urgent'])
              : css(notificationItemStyles['notification-default'])
          }
          onClick={this.props.markAsRead}
          dangerouslySetInnerHTML={this.props.html}
        ></li>
      );
    }
  }
}

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string,
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func,
};

export default NotificationItem;
