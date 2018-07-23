import React from 'react';
import PropTypes from 'prop-types';
import Message from './message';
import { connect } from 'react-redux';

const MessagesListComponent = ({ messages }) => (
  <section id='messages-list'>
    <ul>
      {messages.map(message => (
        <Message
          key={message.id}
          {...message}
          />
      ))}
    </ul>
  </section>
)

MessagesListComponent.propTypes = {
  messages: PropTypes.arrayOf(
    PropTypes.shape({
      id:PropTypes.number.isRequired,
      message: PropTypes.string.isRequired,
      user: PropTypes.string.isRequired,
    }).isRequired
  ).isRequired
}

export const MessagesList = connect(state => ({
	messages: state.messages
}), {})(MessagesListComponent)
