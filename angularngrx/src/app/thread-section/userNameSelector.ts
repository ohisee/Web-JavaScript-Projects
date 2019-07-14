import * as fromAppState from '../store/reducerMap';

/**
 * Get user name,
 * caller using skip(1) to skip the initial state which is undefined
 * for example, this.userName$ = this.store.pipe(skip(1), map(mapStateToUserName));
 *
 * @param state fromAppState.AppState
 * @returns user name
 */
export function mapStateToUserName(state: fromAppState.AppState): string {
  return state.storeData.participants[state.uiState.userId].name;
}


/**
 * Get user name
 * @param state fromAppState.AppState
 * @returns user name
 */
export function userNameSelector(state: fromAppState.AppState): string {
  const currentUserId = state.uiState.userId;
  if (currentUserId) {
    const currentParticipant = state.storeData.participants[currentUserId];
    if (currentParticipant) {
      return currentParticipant.name;
    }
  }
  return '';
}
