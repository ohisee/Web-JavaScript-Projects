/**
 * @fileoverview Reducer index
 */
import { Actions, Types } from "../actions/actionTypes";

export interface SpinningState {
  spinning: boolean,
  message: string,
};

const initialState: SpinningState = {
  spinning: false,
  message: 'init',
};

/**
 *  Reducer
 */
const reducer = (state = initialState, action: Actions): SpinningState => {
  switch (action.type) {
    case Types.START_SPINNER:
      return {
        ...state,
        spinning: true,
        message: action.payload,
      };
    case Types.STOP_SPINNNER:
      return {
        ...state,
        spinning: false,
        message: action.payload,
      };
    default:
      return state;
  }
};

export default reducer;
