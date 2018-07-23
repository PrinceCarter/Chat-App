import React, { Component } from 'react';
import Input from '@material-ui/core/Input';
import { connect } from 'react-redux'
import { createUser } from '../actions';

class RegisterUserComponent extends Component {
  constructor(props){
    super(props);
    this.sendUserName = this.sendUserName.bind(this);
  }

  sendUserName(e){
    if (e.key === 'Enter'){
      const username = e.target.value;
      this.props.dispatch(username);
    }
  }

  render(){
    return (
      <div id='register-user'>
        <h6 id='heading'>Welcome!</h6>
        <div id='user-input'>
          <Input
            id='input'
            onKeyPress={ e => this.sendUserName(e) }
            placeholder='Enter a cool name to join the chat!'
          />
        </div>
      </div>
    )
  }
}


const mapDispatchToProps = (dispatch) => (
    {
    dispatch: username => {
      dispatch(createUser(username))
    }
  }
)

export const RegisterUser = connect(() => ({}), mapDispatchToProps)(RegisterUserComponent);
