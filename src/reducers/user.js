import * as types from '../constants/actionTypes';

const user = (state = '', action) => {
  switch(action.type){
    case types.CREATE_USER:
      return Object.assign({}, state, {
        user: action.username,
      })
    default:
      return state;
  }
}

export default user;
