import * as types from '../constants/actionTypes';

const users = (state = [], action) => {
  switch(action.type){
    case types.ADD_USER:
      return state.concat([
        {
          name: action.user,
          id: action.id
        }
      ])
    case types.USERS_LIST:
      return action.users
    default:
      return state
  }
}

export default users;
