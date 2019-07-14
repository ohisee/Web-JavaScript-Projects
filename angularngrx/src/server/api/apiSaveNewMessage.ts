import { Application } from 'express';
import * as _ from 'lodash';

import { dbMessages, dbMessagesQueuePerUser } from '../db-data';
import { Message } from '../../app/shared/model/message';
import { findThreadById } from '../persistence/findThreadById';

let messageIdCounter = 20;

export function apiSaveNewMessage(app: Application) {

  app.route('/api/threads/:id').post((req, res) => {

    const payload = req.body;

    const threadId = parseInt(req.params.id, 10);
    // participantId = parseInt(req.headers['userid'], 10);
    const participantId = parseInt(req.header('userid'), 10);

    console.log(`Received message ---${JSON.stringify(payload, null, 2)}--- `);
    console.log(`by participant --${participantId}-- of thread ${threadId}`);

    const message: Message = {
      id: messageIdCounter++,
      threadId,
      timestamp: new Date().getTime(),
      text: payload.text,
      participantId
    };

    // save the new message, it's
    // already linked to a thread
    dbMessages[message.id] = message;

    const thread = findThreadById(threadId);
    thread.messageIds.push(message.id);

    const otherParticipantIds = _.keys(thread.participants)
      .filter(id => parseInt(id, 10) !== participantId);

    // pid is participant id
    otherParticipantIds.forEach(pid => {
      thread.participants[pid] += 1;
      dbMessagesQueuePerUser[pid].push(message.id);
    });

    thread.participants[participantId] = 0;

    res.status(200).send();

    // res.status(500).send();
  });

}
