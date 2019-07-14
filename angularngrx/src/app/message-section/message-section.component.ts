import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import { ApplicationState } from '../store/application-state';
import { Observable } from 'rxjs/Observable';
import { MessageVM } from './message.vm';
import { messageParticipantNamesSelector } from './messageParticipantNamesSelector';
import { messagesSelector } from './messagesSelector';
import { SendNewMessageAction } from '../store/actions';
import { UiState } from '../store/ui-state';

@Component({
  selector: 'app-message-section',
  templateUrl: './message-section.component.html',
  styleUrls: ['./message-section.component.css']
})
export class MessageSectionComponent implements OnInit {

  participantNames$: Observable<string>;
  messages$: Observable<MessageVM[]>;

  // currentThreadId: number;
  uiState: UiState;

  constructor(private store: Store<ApplicationState>) { }

  ngOnInit() {
    this.participantNames$ = this.store.select(messageParticipantNamesSelector);
    this.messages$ = this.store.select(messagesSelector);
    // this.store.subscribe((state: ApplicationState) =>
    //   this.currentThreadId = state.uiState.currentThreadId);
    this.store.subscribe((state: ApplicationState) =>
      this.uiState = Object.assign({}, state.uiState));
  }

  /**
   * Handle on new message event
   * @param input
   */
  onNewMessage(input: any) {
    this.store.dispatch(new SendNewMessageAction(
      {
        text: input.value,
        threadId: this.uiState.currentThreadId,
        participantId: this.uiState.userId
      }
    ));
    input.value = '';
  }

}

