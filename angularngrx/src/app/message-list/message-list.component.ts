import {
  Component,
  OnInit,
  OnChanges,
  Input,
  ViewChild,
  ElementRef,
  SimpleChanges,
  ChangeDetectionStrategy
} from '@angular/core';
import { MessageVM } from '../message-section/message.vm';


@Component({
  selector: 'app-message-list',
  templateUrl: './message-list.component.html',
  styleUrls: ['./message-list.component.css'],
  // detect changes, update message list only if receive new messages
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class MessageListComponent implements OnInit, OnChanges {

  @Input()
  messages: MessageVM[] = [];

  @ViewChild('list')
  list: ElementRef;

  constructor() { }

  ngOnInit() { }

  ngOnChanges(changes: SimpleChanges) {
    if (changes['messages']) {
      const previousMessages = changes['messages'].previousValue;
      const newMessages = changes['messages'].currentValue;
      if (newMessages && previousMessages && (newMessages.length > previousMessages.length)) {
        setTimeout(() => {
          this.scrollLastMessageIntoView();
        });
      }
    }
  }

  scrollLastMessageIntoView() {
    const items: NodeList = this.list.nativeElement.querySelectorAll('li');
    const lastItem: any = items.item(items.length > 0 ? items.length - 1 : 0);
    if (lastItem) {
      lastItem.scrollIntoView();
    }
  }

}
