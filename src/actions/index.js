import * as types from '../constants/actionTypes'

let nextMessageId = 0;
let nextUserId = 0;

export const addMessage = (message, user) => ({
  type: types.ADD_MESSAGE,
  id: nextMessageId++,
  message,
  user
})

export const addUser = user => ({
  type: types.ADD_USER,
  id: nextUserId++,
  user
})

export const messageReceived = (message, user) => ({
  type: types.MESSAGE_RECEIVED,
  id: nextMessageId++,
  message,
  user
})

export const populateList = users => ({
  type: types.USERS_LIST,
  users
})

export const createUser = username => ({
  type: types.CREATE_USER,
  username
})
