import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';
import * as fromAppState from '../store/reducerMap';
import { UiState } from '../store/ui-state';

@Component({
  selector: 'app-messages',
  templateUrl: './messages.component.html',
  styleUrls: ['./messages.component.css']
})
export class MessagesComponent implements OnInit {

  message: string;

  constructor(private store: Store<fromAppState.AppState>) { }

  ngOnInit() {
    this.store.select(state => state.uiState).subscribe(
      (state: UiState) => this.message = state.currentError);
  }

  close() {
    this.message = null;
  }

}
