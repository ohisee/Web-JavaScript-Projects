import { combineReducers } from 'redux';
import commentsReducer from './comments';
import authReducer from './auth';

const reducers = combineReducers({
  comments: commentsReducer,
  auth: authReducer,
});

export default reducers;