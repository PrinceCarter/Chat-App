import React, { Component } from 'react';
import { addMessage } from '../actions';
import { connect } from 'react-redux';
import Input from '@material-ui/core/Input';
import Button from '@material-ui/core/Button';

class AddMessageComponent extends Component {

  constructor(props){
    super(props);
    this.state = {
      inputValue: ''
    };
    this.updateInputValue = this.updateInputValue.bind(this);
    this.sendMessage = this.sendMessage.bind(this);
  }

  updateInputValue(e){
  this.setState({
    inputValue: e.target.value
  });
  }

  sendMessage(e){
    if (e.key === 'Enter'){
      this.props.dispatch(e.target.value, 'Me')
      e.target.value = '';
    }
  }

  render(){
    return (
      <section id='new-message'>
          <Input
            fullWidth={true}
            placeholder='Say "Hello" to the chat!'
            value={this.state.inputValue}
            onChange={ e => this.updateInputValue(e) }
            onKeyPress={ e => this.sendMessage(e) }
            type='text'
            ref={(node) => { this.state.inputValue=node }}
            >
          </Input>
      </section>
    )
  }
}

const mapDispatchToProps = (dispatch) => (
    {
    dispatch: (message, user) => {
      dispatch(addMessage(message, user))
    }
  }
)

export const AddMessage = connect(() => ({}), mapDispatchToProps)(AddMessageComponent);
