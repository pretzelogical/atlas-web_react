import React from 'react';
import PropTypes from 'prop-types';


// function NotificationItem({type = 'default', value, html, markAsRead = () => void(0) }) {


class NotificationItem extends React.PureComponent {
  static defaultProps = {
    type: 'default',
    markAsRead: () => void(0)
  }

  render() {
    if (!this.props.html) {
      return <li
      className={`notification-${this.props.type}`}
      data-priority={this.props.type}
      onClick={this.props.markAsRead}
      >{this.props.value}</li>
    } else {
      return <li
      data-priority={this.props.type}
      className={`notification-${this.props.type}`}
      onClick={this.props.markAsRead}
      dangerouslySetInnerHTML={this.props.html}></li>
    }
  }
};

NotificationItem.propTypes = {
  html: PropTypes.shape({
    __html: PropTypes.string
  }),
  type: PropTypes.string.isRequired,
  value: PropTypes.string,
  markAsRead: PropTypes.func
};

export default NotificationItem;