import {
  Component,
  OnInit,
  Input,
  Output,
  EventEmitter,
  ChangeDetectionStrategy
} from '@angular/core';
import { ThreadSummaryVM } from '../thread-section/thread-summary.vm';

@Component({
  selector: 'app-thread-list',
  templateUrl: './thread-list.component.html',
  styleUrls: ['./thread-list.component.css'],
  // detect changes, update thread list only if receive new ThreadSummaryVM
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ThreadListComponent implements OnInit {

  @Input()
  threads: ThreadSummaryVM[];

  @Input()
  currentSelectedThreadId: number;

  @Output()
  threadSelected = new EventEmitter();

  constructor() { }

  ngOnInit() { }

  /**
   * Select a thread, a click handler
   * @param threadId
   */
  selectThread(threadId: number) {
    this.threadSelected.next(threadId);
  }

}
