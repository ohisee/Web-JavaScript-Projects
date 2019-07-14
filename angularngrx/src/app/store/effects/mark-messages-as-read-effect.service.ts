import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators/switchMap';
import { catchError } from 'rxjs/operators/catchError';
import { map } from 'rxjs/operators/map';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/of';

import { ThreadsService } from '../../services/threads.service';
import {
  THREAD_SELECTED_ACTION,
  ThreadSelectedAction,
  ErrorOccurredAction,
  BlankAction
} from '../actions';



@Injectable()
export class MarkMessagesAsReadEffectService {

  constructor(
    private actions$: Actions,
    private threadsService: ThreadsService) { }

  @Effect()
  markMessagesAsRead$: Observable<Action> = this.actions$.ofType(THREAD_SELECTED_ACTION).pipe(
    switchMap((action: ThreadSelectedAction) =>
      this.threadsService.markMessagesAsRead(
        action.payload.currentUserId, action.payload.selectedThreadId)),
    map(() => new BlankAction()), // must use map operator to dispatch an action
    catchError((error) =>
      Observable.of(new ErrorOccurredAction('Error Occurred while working on message')))
  );

}
