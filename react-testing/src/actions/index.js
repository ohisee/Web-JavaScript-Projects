import axios from 'axios';
import { SAVE_COMMENT, FETCH_COMMENTS, CHANGE_AUTH } from './types';

/**
 * Save comment action
 * @param {*} comment 
 */
export function saveComment(comment) {
  return {
    type: SAVE_COMMENT,
    payload: comment
  };
}

/**
 * Fetch comments
 */
export function fetchComments() {
  const response = axios.get('https://jsonplaceholder.typicode.com/comments');
  // console.log(response.then);
  // response.then(function (re) { console.log(re); });
  return {
    type: FETCH_COMMENTS,
    payload: response
  };
}

/**
 * Change authentication
 * @param {*} isLoggedIn 
 */
export function changeAuth(isLoggedIn) {
  return {
    type: CHANGE_AUTH,
    payload: isLoggedIn
  }
}