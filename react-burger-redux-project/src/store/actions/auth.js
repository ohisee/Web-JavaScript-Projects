import * as actionTypes from './actionTypes';

import axios from '../../axiosFireBaseSignin';

const TOKEN = 'token';
const EXPIRATION_DATE = 'expirationDate';
const USERID = 'userid';

const authStart = () => {
  return {
    type: actionTypes.AUTH_START
  };
};

const authSuccess = (token, userId) => {
  return {
    type: actionTypes.AUTH_SUCCESS,
    token: token,
    userId: userId
  };
};

const authFail = (error) => {
  return {
    type: actionTypes.AUTH_FAIL,
    error: error
  };
};

export const logout = () => {
  localStorage.removeItem(TOKEN);
  localStorage.removeItem(EXPIRATION_DATE);
  localStorage.removeItem(USERID);
  return {
    type: actionTypes.AUTH_LOGOUT
  };
};

/**
 * Async actiion creator - logout after 60 mins
 * @param {*} expirationTime - in millisecond
 */
export const checkAuthTimeout = (expirationTime) => {
  return (dispatch) => {
    setTimeout(() => { dispatch(logout()); }, expirationTime * 1000)
  };
};

/**
 * Async action creator - sign in only
 * @param {*} email 
 * @param {*} password 
 * @param {*} isSignup 
 */
export const auth = (email, password, isSignup) => {
  return (dispatch) => {
    dispatch(authStart());
    axios.post('/verifyPassword', {
      email: email,
      password: password,
      returnSecureToken: true
    }).then(response => {
      const expirationDate = new Date((new Date()).getTime() + response.data.expiresIn * 1000);
      localStorage.setItem(TOKEN, response.data.idToken);
      localStorage.setItem(EXPIRATION_DATE, expirationDate);
      localStorage.setItem(USERID, response.data.localId);
      dispatch(authSuccess(response.data.idToken, response.data.localId));
      dispatch(checkAuthTimeout(response.data.expiresIn));
    }).catch(error => {
      // dispatch(authFail(error.response.data.error));
      dispatch(authFail(error));
    });
  };
};

/**
 * Action creator - redirect URI path
 * @param {*} path 
 */
export const setAuthRedirectPath = (path) => {
  return {
    type: actionTypes.SET_AUTH_REDIRECT_PATH,
    path: path
  };
};

/**
 * Async actionc creator
 */
export const authCheckState = () => {
  return (dispatch) => {
    const token = localStorage.getItem(TOKEN);
    const userId = localStorage.getItem(USERID);
    if (token && userId) {
      let expirationDate = localStorage.getItem(EXPIRATION_DATE);
      if (expirationDate) {
        expirationDate = new Date(expirationDate);
        if (expirationDate <= (new Date())) {
          dispatch(logout());
        } else {
          dispatch(authSuccess(token, userId));
          dispatch(checkAuthTimeout((expirationDate.getTime() - (new Date()).getTime()) / 1000));
        }
      }
    } else {
      dispatch(logout());
    }
  };
};

/**
 * Action creator - clear error
 */
export const authClearError = () => {
  return {
    type: actionTypes.AUTH_CLEAR_ERROR
  }
};
