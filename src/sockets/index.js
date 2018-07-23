import * as types from '../constants/actionTypes';
import {addUser, messageReceived, populateList} from '../actions';

// Setting up WebSocket on Client side
const setUpSocket = (dispatch, username) => {

  // Establish connection between client and server
  const socket = new WebSocket(((window.location.protocol === "https:") ? "wss://" : "ws://") + window.location.host + "/ws")

  // As soon as someone opens the app, send the ADD_USER
  // action to the server along with the username.
  socket.onopen = () => {
      socket.send(JSON.stringify({
        type: types.ADD_USER,
        name: username
      }))
  }

  // Once the connected Client socket recieves an action, it runs this function.
  socket.onmessage = (event) => {

    // Parse the JSON file to figure out which action to dispatch.
    const data = JSON.parse(event.data)
    switch (data.type){

      case types.ADD_MESSAGE:
        dispatch(messageReceived(data.message, data.user))
        break

      case types.ADD_USER:
        dispatch(addUser(data.name))
        break

      case types.USERS_LIST:
        dispatch(populateList(data.users))
        break

      default:
        break
    }
  }
  return socket;
}

export default setUpSocket;
