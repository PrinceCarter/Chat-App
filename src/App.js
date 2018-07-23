import React, { Component } from 'react';
import './App.css';
import Header from './components/header';
import {RegisterUser} from './components/registeruser';
import Chat from './components/chat.js';
import { connect } from 'react-redux';

function RenderContent(props) {
  const name = props.name;
  if (name !== ''){
    return (
      <Chat />
    )
  }
  return (
    <RegisterUser/>
  )
}

class App extends Component {
  constructor(props){
    super(props);
    this.state = {
      name: '',
    }
  }
  render() {
    return (
      <div>
        <div>
          <Header />
        </div>
        <RenderContent name={this.props.user}/>
      </div>
    );
  }
}

const mapStateToProps = (state) => ({
  user: state.user,
})

export default connect(mapStateToProps)(App);
