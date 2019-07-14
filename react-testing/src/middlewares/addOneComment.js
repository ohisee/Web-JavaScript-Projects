/**
 * Add one comment middleware
 * @param {*} store 
 */
const addOneComment = ({ dispatch, getState }) =>
  next =>
    action => {
      console.log('Add one comment', action);
      console.log('Add one comment', getState());
      next(action);
      if (typeof (action.payload) === 'string') {
        next({ ...action, payload: 'next new comment' });
      }
    };

export default addOneComment;