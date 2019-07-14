import { StoreData, INITIAL_STORE_DATA } from '../store-data';
import {
  Actions,
  USER_THREADS_LOADED_ACTION,
  UserThreadsLoadedAction,
  SEND_NEW_MESSAGE_ACTION,
  SendNewMessageAction,
  NEW_MESSAGES_RECEIVED_ACTION,
  NewMessagesReceivedAction,
  THREAD_SELECTED_ACTION,
  ThreadSelectedAction
} from '../actions';
import { Message } from '../../shared/model/message';
import { Thread } from '../../shared/model/thread';

const uuid = require('uuid/v4');

/**
 * Ui store data reducer
 * @param state
 * @param action
 * @returns {StoreData}
 */
export function uiStoreDataReducer(
  state: StoreData = INITIAL_STORE_DATA,
  action: Actions): StoreData {

  switch (action.type) {
    case USER_THREADS_LOADED_ACTION:
      return handleUserThreadsLoadedAction(state, action);
    case SEND_NEW_MESSAGE_ACTION:
      return handleSendNewMessageAction(state, action);
    case NEW_MESSAGES_RECEIVED_ACTION:
      return handleNewMessagesReceivedAction(state, action);
    case THREAD_SELECTED_ACTION:
      return handleThreadSelectedAction(state, action);
    default:
      return state;
  }
}

/**
 * handle LoadUserThreads action
 * @param state
 * @param {UserThreadsLoadedAction}
 * @returns {StoreData}
 */
function handleUserThreadsLoadedAction(
  state: StoreData,
  action: UserThreadsLoadedAction): StoreData {

  const userData = action.payload;
  return {
    participants: userData.participants.reduce((map, participant) => {
      map[participant.id] = participant;
      return map;
    }, {}),
    messages: userData.messages.reduce((map, message) => {
      map[message.id] = message;
      return map;
    }, {}),
    threads: userData.threads.reduce((map, thread) => {
      map[thread.id] = thread;
      return map;
    }, {}),
  };
}

/**
 * handle send new message action
 * @param {StoreData}
 * @param {SendNewMessageAction}
 * @returns {StoreData}
 */
function handleSendNewMessageAction(
  state: StoreData,
  action: SendNewMessageAction): StoreData {

  // Consider using lodash _.cloneDeep()
  // const newStoreState: StoreData = {
  //   ...state,
  //   participants: copyIndexedMap(state.participants),
  //   threads: copyThread(state.threads),
  //   messages: copyIndexedMap(state.messages)
  // };

  // Only modify what are needed to take advantage of Angular on change detection
  const newStoreState: StoreData = {
    ...state,
    participants: state.participants,
    threads: Object.assign({}, state.threads),
    messages: Object.assign({}, state.messages),
  };

  newStoreState.threads[action.payload.threadId] =
    Object.assign({}, state.threads[action.payload.threadId]);

  const currentThread = newStoreState.threads[action.payload.threadId];

  const newMessage: Message = {
    text: action.payload.text,
    threadId: action.payload.threadId,
    timestamp: new Date().getTime(),
    participantId: action.payload.participantId,
    id: uuid()
  };

  currentThread.messageIds = currentThread.messageIds.slice(0);
  currentThread.messageIds.push(newMessage.id);

  newStoreState.messages[newMessage.id] = newMessage;
  return newStoreState;
}

export function copyIndexedMap<T>(parts: { [key: number]: T }): { [key: number]: T } {
  return Object.keys(parts)
    .reduce((acc: { [key: number]: T }, curKey: string) => {
      acc[curKey] = { ...parts[curKey] };
      return acc;
    }, {});
}

export function copyThread(threads: { [key: number]: Thread }) {
  return Object.keys(threads).map(key => threads[key])
    .map((thread: Thread) => <Thread>{
      id: thread.id,
      messageIds: thread.messageIds.slice(),
      participants: { ...thread.participants }
    })
    .reduce((acc, cur) => {
      acc[cur.id] = cur;
      return acc;
    }, {});
}

/**
 * Handle new messages received action
 * @param {StoreData}
 * @param {NewMessagesReceivedAction}
 * @returns {StoreData}
 */
function handleNewMessagesReceivedAction(
  state: StoreData, action: NewMessagesReceivedAction): StoreData {

  // Consider using lodash _.cloneDeep()
  // const newStoreState: StoreData = {
  //   ...state,
  //   participants: copyIndexedMap(state.participants),
  //   threads: copyThread(state.threads),
  //   messages: copyIndexedMap(state.messages)
  // };

  // Only modify what are needed to take advantage of Angular on change detection
  const newStoreState: StoreData = {
    ...state,
    participants: state.participants,
    // create a shallow clone
    threads: { ...state.threads },
    messages: { ...state.messages }
  };

  const newMessages = action.payload.unreadMessages;
  const currentThreadId = action.payload.currentThreadId;
  const currentUserId = action.payload.currentUserId;

  for (const message of newMessages) {

    newStoreState.messages[message.id] = message;
    newStoreState.threads[message.threadId] =
      Object.assign({}, state.threads[message.threadId]);
    const messageThread = newStoreState.threads[message.threadId];

    // newStoreState.threads[message.threadId].messageIds =
    //   newStoreState.threads[message.threadId].messageIds.slice(0);
    // newStoreState.threads[message.threadId].messageIds.push(message.id);

    messageThread.messageIds = messageThread.messageIds.slice(0);
    messageThread.messageIds.push(message.id);

    if (message.threadId !== currentThreadId) {
      // newStoreState.threads[message.threadId].participants =
      //   Object.assign({}, newStoreState.threads[message.threadId].participants);
      // newStoreState.threads[message.threadId].participants[currentUserId] += 1;
      messageThread.participants = { ...messageThread.participants };
      messageThread.participants[currentUserId] += 1;
    }
  }

  return newStoreState;
}

/**
 * Handle thread selected action
 * @param {StoreData}
 * @param {ThreadSelectedAction}
 * @returns {StoreData}
 */
export function handleThreadSelectedAction(
  state: StoreData, action: ThreadSelectedAction): StoreData {

  // Consider using lodash _.cloneDeep()
  // const newStoreState: StoreData = {
  //   ...state,
  //   participants: copyIndexedMap(state.participants),
  //   threads: copyThread(state.threads),
  //   messages: copyIndexedMap(state.messages)
  // };

  // Only modify what are needed to take advantage of Angular on change detection
  const newStoreState: StoreData = {
    ...state,
    participants: { ...state.participants },
    threads: { ...state.threads },
    messages: { ...state.messages }
  };

  newStoreState.threads[action.payload.selectedThreadId] =
    Object.assign({}, state.threads[action.payload.selectedThreadId]);

  const currentThread = newStoreState.threads[action.payload.selectedThreadId];
  const currentUserId = action.payload.currentUserId;

  currentThread.participants = Object.assign({}, currentThread.participants);
  currentThread.participants[currentUserId] = 0;

  return newStoreState;
}
