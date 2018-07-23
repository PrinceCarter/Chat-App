import React from 'react';
import PropTypes from 'prop-types';

const Message = ({ message, user }) => (
  <p>
    <b>{user}</b>: {message}
  </p>
)

Message.propTypes = {
  message: PropTypes.string.isRequired,
  user: PropTypes.string.isRequired
}

export default Message;
