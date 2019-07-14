import tv4 from 'tv4';
import stateSchema from './stateSchema';

/**
 * State validator middleware
 * @param {*} param0 
 */
const stateValidator = ({ dispatch, getState }) =>
  next =>
    action => { 
      next(action);
      const v = tv4.validate(getState(), stateSchema);
      if (!v) {
        console.warn('Invalid state schema detected');
      }
    };

export default stateValidator;