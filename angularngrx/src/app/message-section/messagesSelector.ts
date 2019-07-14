import { ApplicationState } from '../store/application-state';
import { MessageVM } from './message.vm';
import { Message } from '../shared/model/message';
import * as _ from 'lodash';
import { Participant } from '../shared/model/participant';
import { createSelector } from 'reselect';

/**
 * Apply functional programming memoization
 */
export const messagesSelector = createSelector(
  getParticipants, getMessagesForCurrentThread, mapMessagesToMessageVM
);

/**
 * Getter to get message array
 * @param state
 * @returns {Message[]}
 */
function getMessagesForCurrentThread(state: ApplicationState): Message[] {
  if (!state.uiState.currentThreadId) {
    return [];
  }
  const currentThread = state.storeData.threads[state.uiState.currentThreadId];
  if (!currentThread) {
    return [];
  }
  return currentThread.messageIds.map(messageId => state.storeData.messages[messageId]);
}

/**
 * Get participants
 * @param state
 */
function getParticipants(state: ApplicationState): { [key: number]: Participant } {
  return state.storeData.participants;
}

/**
 * Map messages to Message view modal array
 * @param participants
 * @param messages
 */
function mapMessagesToMessageVM(
  participants: { [key: number]: Participant }, messages: Message[]): MessageVM[] {
  return messages.map(message => {
    const participantName = participants[message.participantId].name;
    return mapMessageToMessageVM(participantName, message);
  });
}

/**
 * Map message to message view modal
 * @param participantName
 * @param message
 */
const mapMessageToMessageVM = _.memoize(
  (participantName: string, message: Message): MessageVM => {
    return {
      id: message.id,
      text: message.text,
      timestamp: message.timestamp,
      participantName: participantName
    };
  },
  // resolver to return a key
  (participantName: string, message: Message) => message.id + participantName
);

/**
 * Message selector
 * @param state
 */
export function messagesSelectorBefore(state: ApplicationState): MessageVM[] {
  const currentThreadId = state.uiState.currentThreadId;
  if (!currentThreadId) {
    return [];
  }
  const currentThread = state.storeData.threads[state.uiState.currentThreadId];
  if (!currentThread) {
    return [];
  }
  // const messageIds = state.storeData.threads[state.uiState.currentThreadId].messageIds;
  // const messages = messageIds.map(messageId => state.storeData.messages[messageId]);
  const messages = getMessagesForCurrentThread(state);
  const participants = getParticipants(state);
  // return messages.map(_.partial(mapMessageToMessageVM, state));
  // return messages.map(message => mapMessageToMessageVM(participants, message));
  return mapMessagesToMessageVM(participants, messages);
}
