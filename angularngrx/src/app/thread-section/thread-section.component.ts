import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
// import { skip } from 'rxjs/operators/skip';
import { Observable } from 'rxjs/Observable';
// import { map } from 'rxjs/operators/map';

// import { ThreadsService } from '../services/threads.service';
// import { AllUserData } from '../shared/to/all-user-data';
// import * as ActionCreators from '../store/actions';
import * as fromAppState from '../store/reducerMap';
import { ThreadSummaryVM } from './thread-summary.vm';
import { userNameSelector } from './userNameSelector';
import { stateToUnreadMessagesCounterSelector } from './stateToUnreadMessagesCounterSelector';
import { stateToThreadSummariesSelector } from './stateToThreadSummariesSelector';
import { ThreadSelectedAction } from '../store/actions';
import { UiState } from '../store/ui-state';
import * as _ from 'lodash';

@Component({
  selector: 'app-thread-section',
  templateUrl: './thread-section.component.html',
  styleUrls: ['./thread-section.component.css']
})
export class ThreadSectionComponent implements OnInit {

  userName$: Observable<string>;
  unreadMessagesCounter$: Observable<number>;
  threadSummaries$: Observable<ThreadSummaryVM[]>;
  currentSelectedThreadId$: Observable<number>;

  uiState: UiState;

  constructor(
    // private threadService: ThreadsService,
    private store: Store<fromAppState.AppState>) { }

  ngOnInit() {
    // Skip the initial state which is undefined using skip(1)
    // this.userName$ = this.store.pipe(
    //   skip(1),
    //   map(mapStateToUserName));
    this.userName$ = this.store.select(userNameSelector);

    // this.unreadMessagesCounter$ = this.store.pipe(
    //   skip(1),
    //   map(mapStateToUnreadMessagesCounter));
    this.unreadMessagesCounter$ = this.store.select(stateToUnreadMessagesCounterSelector);

    this.threadSummaries$ = this.store.select(
      (state: fromAppState.AppState) => stateToThreadSummariesSelector(state));

    this.currentSelectedThreadId$ = this.store.select(
      state => state.uiState.currentThreadId);

    this.store.select(state => state.uiState).subscribe(
      uiState => this.uiState = _.cloneDeep(uiState));

    // this.threadService.loadUserThreads().subscribe(
    //   (allUserData: AllUserData) => {
    //     this.store.dispatch(new ActionCreators.UserThreadsLoadedAction(allUserData));
    //   },
    //   (error: any) => {
    //     console.log(error);
    //   }
    // );

    // No need to dispatch this action after adding select user option feature in user select component
    // this.store.dispatch(new ActionCreators.LoadUserThreadsAction());
  }

  /**
   * Thread list component's threadSelected event emitter listener
   * @param selectedThreadId
   */
  onThreadSelected(selectedThreadId: number) {
    // console.log(`Thread section ${selectedThreadId}`);
    // console.log(`Thread section current user id ${this.uiState.userId}`);
    this.store.dispatch(new ThreadSelectedAction({
      selectedThreadId, currentUserId: this.uiState.userId}));
  }

}
