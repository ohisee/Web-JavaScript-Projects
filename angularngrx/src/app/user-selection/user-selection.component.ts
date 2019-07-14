import { Component, OnInit } from '@angular/core';
import { Store } from '@ngrx/store';

import * as fromAppState from '../store/reducerMap';
import { SelectUserAction } from '../store/actions';

@Component({
  selector: 'app-user-selection',
  templateUrl: './user-selection.component.html',
  styleUrls: ['./user-selection.component.css']
})
export class UserSelectionComponent implements OnInit {

  constructor(private store: Store<fromAppState.AppState>) { }

  ngOnInit() { }

  /**
   * Handle on select user event from select option drop down
   * @param newUserId
   */
  onSelectUser(newUserId: number) {
    this.store.dispatch(new SelectUserAction(newUserId));
  }

}
