import * as fromAppState from '../store/reducerMap';
import { Thread } from '../shared/model/thread';

/**
* Get unread message counter
 * caller using skip(1) to skip the initial state which is undefined
 * for example, this.store.pipe(skip(1), map(mapStateToUnreadMessagesCounter));
 *
* @param state
* @returns unread message counter
*/
export function mapStateToUnreadMessagesCounter(state: fromAppState.AppState): number {
  const currentUserId = state.uiState.userId;
  const threads = state.storeData.threads;
  return Object.keys(threads)
    .map((key: string) => threads[key])
    .reduce((accumlator: number, thread: Thread) =>
      (accumlator + thread.participants[currentUserId]), 0);
}

/**
* Get unread message counter
* @param state
* @returns unread message counter
*/
export function stateToUnreadMessagesCounterSelector(state: fromAppState.AppState): number {
  const currentUserId = state.uiState.userId;
  const threads = state.storeData.threads;
  return Object.keys(threads)
    .map((key: string) => threads[key])
    .reduce((accumlator: number, thread: Thread) => {
      const threadParticipant = thread.participants[currentUserId];
      return (accumlator + (isNaN(threadParticipant) ? 0 : threadParticipant));
    }, 0);
}
