/**
 * @fileoverview Verify authencation reducer
 */
import {Actions, Types} from "../actions/actionTypes";

export interface VerifyAuthState {
  verifying: boolean,
  token: string | null,
  error: string | null,
}

const initialState: VerifyAuthState = {
  verifying: false,
  token: null,
  error: null,
};

const reducer = (state = initialState, action: Actions): VerifyAuthState => {
  switch (action.type) {
    case Types.START_SIGNIN:
      return {
        ...state,
        verifying: true,
        token: null,
        error: null,
      }
    case Types.VERIFY_SUCCEEDED:
      return {
        ...state,
        verifying: false,
        token: action.payload,
        error: null,
      };
    case Types.VERIFY_FAILED:
      return {
        ...state,
        verifying: false,
        token: null,
        error: action.payload,
      };
    case Types.INVALDIATE_AUTH:
      return {
        ...state,
        verifying: false,
        token: null,
        error: null,
      };
    default:
      return state;
  }
};

export default reducer;
