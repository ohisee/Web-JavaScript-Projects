import { CHANGE_AUTH } from '../actions/types';
/**
 * Authentication reducer
 * @param {*} state 
 * @param {*} action 
 */
const reducer = (state = false, action) => {
  switch (action.type) {
    case CHANGE_AUTH:
      return action.payload;
    default:
      return state;
  }
};

export default reducer;