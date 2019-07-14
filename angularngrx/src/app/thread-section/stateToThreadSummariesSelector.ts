import { Thread } from '../shared/model/thread';
import { ThreadSummaryVM } from './thread-summary.vm';
import * as fromAppState from '../store/reducerMap';

/**
 * Get thread summaries
 * @param state
 * @returns ThreadSummaryVM[]
 */
export function stateToThreadSummariesSelector(state: fromAppState.AppState)
  : ThreadSummaryVM[] {
  const threads = state.storeData.threads;
  return Object.keys(threads)
    .map((key: string) => threads[key])
    .map((thread: Thread) => mapThreadToThreadSummary(state, thread));
}

/**
 * Map thread to thread summary
 * @param state
 * @param thread
 * @returns ThreadSummaryVM
 */
export function mapThreadToThreadSummary(state: fromAppState.AppState, thread: Thread)
  : ThreadSummaryVM {
  const names = Object.keys(thread.participants).map(
    (participantId: string) => (
      state.storeData.participants[participantId].name
    ));
  const lastMessageId = thread.messageIds.slice(-1)[0];
  const lastMessage = state.storeData.messages[lastMessageId];
  return {
    id: thread.id,
    participantNames: names.join(', '),
    lastMessageText: lastMessage.text,
    timestamp: lastMessage.timestamp,
    read: thread.id === state.uiState.currentThreadId || thread.participants[state.uiState.userId] === 0
  };
}
