import { UiState, INITIAL_UI_STATE } from '../ui-state';
import {
  Actions,
  THREAD_SELECTED_ACTION,
  SELECT_USER_ACTION,
  SelectUserAction,
  ERROR_OCCURRED_ACTION,
  ErrorOccurredAction
} from '../actions';

/**
 * Ui State reducer
 * @param state
 * @param action
 * @returns {UiState}
 */
export function uiStateReducer(
  state: UiState = INITIAL_UI_STATE,
  action: Actions): UiState {

  switch (action.type) {
    case THREAD_SELECTED_ACTION:
      const newState = Object.assign({}, state);
      newState.userId = action.payload.currentUserId;
      newState.currentThreadId = action.payload.selectedThreadId;
      return newState;
    case SELECT_USER_ACTION:
      return handleSelectUserAction(state, action);
    case ERROR_OCCURRED_ACTION:
      return handleErrorOccurredAction(state, action);
    default:
      return state;
  }
}

/**
 * Handle select user action
 * @param {UiState}
 * @param {SelectUserAction}
 * @returns {UiState}
 */
function handleSelectUserAction(state: UiState, action: SelectUserAction): UiState {
  const newUiState = Object.assign({}, state);
  newUiState.userId = action.payload;
  newUiState.currentThreadId = null;
  return newUiState;
}

/**
 * Handle error occurred action
 * @param {UiState}
 * @param {ErrorOccurredAction}
 * @returns {UiState}
 */
function handleErrorOccurredAction(state: UiState, action: ErrorOccurredAction): UiState {
  const newState = <UiState>{
    ...state,
    currentError: action.payload
  };
  return newState;
}
