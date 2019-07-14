import { Injectable } from '@angular/core';
import { Actions, Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
// import { Action } from '@ngrx/store';

import { ThreadsService } from '../../services/threads.service';
import { SEND_NEW_MESSAGE_ACTION, SendNewMessageAction } from '../actions';
import { switchMap } from 'rxjs/operators/switchMap';

@Injectable()
export class WriteNewMessageEffectService {

  constructor(
    private actions$: Actions,
    private threadsService: ThreadsService) { }

  @Effect({dispatch: false}) // No need to dispatch any action after sending message to server
  newMessages$: Observable<any> = this.actions$
    .ofType(SEND_NEW_MESSAGE_ACTION)
    .pipe(
    switchMap((action: SendNewMessageAction) =>
      this.threadsService.saveNewMessage(action.payload))
    );

}
