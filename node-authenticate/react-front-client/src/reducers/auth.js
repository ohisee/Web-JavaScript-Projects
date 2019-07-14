import { AUTH_USER, AUTH_ERROR } from '../actions/types';

const INITIAL_STATE = {
  authenticated: null,
  errorMessage: null
};

/**
 * Authentication reducer
 * @param {*} state 
 * @param {*} action 
 */
const authReducer = (state = INITIAL_STATE, action) => {
  switch (action.type) {
    case AUTH_USER:
      return { ...state, authenticated: action.payload, errorMessage: null };
    case AUTH_ERROR:
      return { ...state, authenticated: null, errorMessage: action.payload };
    default:
      return state;
  }
};

export default authReducer;