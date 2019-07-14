/**
 * Pass through middleware for logging
 * @param {*} store 
 */
const passThroughMiddleWare = (store) =>
  next =>
    action => {
      console.log('First parameter', store);
      console.log('Second parameter', next);
      console.log('Third parameter', action);
      next(action);
    };

export default passThroughMiddleWare;