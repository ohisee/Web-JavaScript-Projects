import { Injectable } from '@angular/core';
import { Effect } from '@ngrx/effects';
import { Observable } from 'rxjs/Observable';
import 'rxjs/add/observable/interval';
import { switchMap } from 'rxjs/operators/switchMap';
import { withLatestFrom } from 'rxjs/operators/withLatestFrom';
import { filter } from 'rxjs/operators/filter';
import { map } from 'rxjs/operators/map';
import { Store } from '@ngrx/store';

import { ThreadsService } from '../../services/threads.service';
// import { Message } from '../../shared/model/message';
import { NewMessagesReceivedAction } from '../actions';
import * as fromAppState from '../../store/reducerMap';


@Injectable()
export class ServerNotificationsEffectService {

  constructor(
    private threadsService: ThreadsService,
    private store: Store<fromAppState.AppState>) { }

  @Effect()
  newMessages$ = Observable.interval(3000).pipe(
    withLatestFrom(this.store.select(state => state.uiState)),
    map(([any, uiState]) => uiState),
    filter((uiState) => uiState.userId !== undefined),
    switchMap(uiState =>
      this.threadsService.loadNewMessagesForUser(uiState.userId)),
    withLatestFrom(this.store.select(state => state.uiState)),
    map(([messages, uiState]) => new NewMessagesReceivedAction({
      unreadMessages: messages,
      currentThreadId: uiState.currentThreadId,
      currentUserId: uiState.userId
    }))
  );

}
