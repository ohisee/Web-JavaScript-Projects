import { Application } from 'express';
import { dbThreads } from '../db-data';
import * as _ from 'lodash';
import { Thread } from '../../app/shared/model/thread';


export function apiUpdateThread(app: Application) {

  app.route('/api/threads/:id').patch((req, res) => {

    // const participantId = req.headers['userid'];

    const participantId = parseInt(req.header('userid'), 10);

    const threadId = parseInt(req.params['id'], 10);

    console.log(`apiUpdateThread received threadid ${threadId}`);

    const updatedProps = req.body;

    const allThreads: Thread[] = <any>_.values(dbThreads);

    const thread = _.find(allThreads, th => th.id === threadId);

    console.log(thread);

    if (thread && updatedProps.hasOwnProperty('read')) {
      thread.participants[participantId] = 0;
    }

    res.status(200).send();

  });

}
