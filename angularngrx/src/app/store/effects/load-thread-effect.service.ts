import { Injectable } from '@angular/core';
import { Action } from '@ngrx/store';
import { Actions, Effect } from '@ngrx/effects';
import { switchMap } from 'rxjs/operators/switchMap';
import { map } from 'rxjs/operators/map';
// import { tap } from 'rxjs/operators/tap';

import { ThreadsService } from '../../services/threads.service';
import { LOAD_USER_THREADS_ACTION, UserThreadsLoadedAction, SELECT_USER_ACTION, LoadUserThreadsAction, SelectUserAction } from '../actions';
import { debug } from '../../shared/operators/debugOperator';
import { Observable } from 'rxjs/Observable';


@Injectable()
export class LoadThreadEffectService {

  constructor(
    private actions$: Actions,
    private threadsService: ThreadsService) { }

  @Effect() userThreads$: Observable<Action> = this.actions$
    .ofType(LOAD_USER_THREADS_ACTION)
    .pipe(
    // tap(val => console.log('received action', val)),
    debug('action received'),
    switchMap((action: LoadUserThreadsAction) =>
      this.threadsService.loadUserThreads(action.payload)),
    // tap(val => console.log('received data', val)),
    debug('data received through HTTP'),
    map(allUserData => new UserThreadsLoadedAction(allUserData)),
  );

  @Effect() newUserSelected$: Observable<Action> = this.actions$
    .ofType(SELECT_USER_ACTION)
    .pipe(
    debug('New user selected'),
    map((action: SelectUserAction) =>
      new LoadUserThreadsAction(action.payload))
    );

}
