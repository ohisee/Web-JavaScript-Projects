/**
 * Middleware, a function that returns a function that returns a function
 * @param {*} param0 
 */
// function asyncMiddleWare({ dispatch }) {
//   return function (next) {
//     return function (action) {
//     }
//   }
// }

const asyncMiddleWare = ({ dispatch }) =>
  next =>
    action => {
      // Check to see if the action has a promise on its payload property
      // if it does, then wait for it to resolve
      // if it does not, then send the action onto the next middleware
      if (!action.payload || !action.payload.then) {
        return next(action);
      }
      action.payload.then(function (response) {
        const newAction = { ...action, payload: response };
        dispatch(newAction);
      });
    };

export default asyncMiddleWare;