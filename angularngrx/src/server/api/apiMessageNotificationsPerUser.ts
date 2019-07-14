import { Application } from 'express';
// import { dbMessagesQueuePerUser, dbMessages, dbThreads } from '../db-data';
import { dbMessagesQueuePerUser, dbMessages } from '../db-data';

export function apiMessageNotificationsPerUser(app: Application) {

  app.route('/api/notifications/messages').post((req, res) => {

    // const participantId = req.headers['userid'];
    const participantId = req.header('userid');

    if (!participantId) {
      res.status(200).json({ payload: [] });
      return;
    }

    console.log(`Notification messages of participant ${participantId}`);

    const unreadMessageIds = dbMessagesQueuePerUser[participantId];

    const unreadMessages = unreadMessageIds.map(messageId => dbMessages[messageId]);

    dbMessagesQueuePerUser[participantId] = [];

    console.log('unread', JSON.stringify(unreadMessages, null, 2));

    res.status(200).json({ payload: unreadMessages });

  });

}
