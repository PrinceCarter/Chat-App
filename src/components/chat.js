import React, { Component } from 'react';
import {Sidebar} from './sidebar'
import {MessagesList} from './messageslist';
import {AddMessage} from './addmessage';

export default class Chat extends Component {
  render(){
    return (
      <div id='container'>
        <Sidebar />
        <section id='main'>
          <MessagesList />
          <AddMessage />
        </section>
      </div>
    )
  }
}
