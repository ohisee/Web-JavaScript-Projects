import { INITIAL_APPLICATION_STATE, ApplicationState } from './application-state';
import { Actions } from './actions';
import { uiStateReducer } from './reducers/uiStateReducer';
import { uiStoreDataReducer } from './reducers/uiStoreDataReducer';

/**
 * Reducer function
 * @param state
 * @param action
 */
export function reducer(
  state: ApplicationState = INITIAL_APPLICATION_STATE,
  action: Actions): ApplicationState {

  return {
    storeData: uiStoreDataReducer(state.storeData, action),
    uiState: uiStateReducer(state.uiState, action)
  };
}

/**
 * handle LoadUserThreads action
 * @param state
 * @param action
 * @returns ApplicationState
 */
// function handleUserThreadsLoadedAction(
//   state: ApplicationState,
//   action: UserThreadsLoadedAction): ApplicationState {

//   const userData = action.payload;
//   const newState: ApplicationState = Object.assign({}, state);

//   newState.storeData = {
//     participants: userData.participants.reduce((map, participant) => {
//       map[participant.id] = participant;
//       return map;
//     }, {}),
//     messages: userData.messages.reduce((map, message) => {
//       map[message.id] = message;
//       return map;
//     }, {}),
//     threads: userData.threads.reduce((map, thread) => {
//       map[thread.id] = thread;
//       return map;
//     }, {}),
//   };
//   return newState;
// }
