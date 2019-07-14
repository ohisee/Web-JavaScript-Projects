import axios from 'axios';
import { AUTH_USER, AUTH_ERROR } from './types';

const API_INSTANCE = axios.create({ baseURL: 'http://localhost:3100' });

/**
 * Sign up action
 * @param {*} param0 
 * @param {*} callback 
 */
export const signup = ({ email, password }, callback) =>
  async dispatch => {
    try {
      const response = await API_INSTANCE.post('/signup', { email, password });
      dispatch({
        type: AUTH_USER,
        payload: response.data.token
      });
      localStorage.setItem('token', response.data.token);
      callback();
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: 'Incorrect input, try again'
      });
    }
  };

/**
 * Sign in action
 * @param {*} param0 
 * @param {*} callback 
 */
export const signin = ({ email, password }, callback) =>
  async dispatch => {
    try {
      const response = await API_INSTANCE.post('/signin', { email, password });
      dispatch({
        type: AUTH_USER,
        payload: response.data.token
      });
      localStorage.setItem('token', response.data.token);
      callback();
    } catch (error) {
      dispatch({
        type: AUTH_ERROR,
        payload: 'Invalid credentials'
      });
    }
  };

/**
 * Sign out action, reuse Auth User action
 */
export const signout = () => {
  localStorage.removeItem('token');

  return {
    type: AUTH_USER,
    payload: null
  }
};