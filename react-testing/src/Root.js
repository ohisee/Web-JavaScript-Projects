import React from 'react';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
// import reduxPromise from 'redux-promise';
import reducers from './reducers';
import asyncMiddleware from './middlewares/async';
import stateValidator from './middlewares/stateValidator';
import passThrough from './middlewares/passThrough';
import addOneComment from './middlewares/addOneComment';

/**
 * Use ES6 object destructure and a default parameter value
 * @param {*} param0 
 */
const root = ({ children, initialState = {} }) => {
  const store = createStore(
    reducers,
    initialState,
    applyMiddleware(asyncMiddleware, stateValidator, passThrough, addOneComment));

  return (
    <Provider store={store}>
      {children}
    </Provider>
  );
};

export default root;