import { Component, OnInit, Input, ChangeDetectionStrategy } from '@angular/core';
import { MessageVM } from '../message-section/message.vm';

@Component({
  selector: 'app-chat-message',
  templateUrl: './chat-message.component.html',
  styleUrls: ['./chat-message.component.css'],
  changeDetection: ChangeDetectionStrategy.OnPush
})
export class ChatMessageComponent implements OnInit {

  @Input()
  message: MessageVM;

  constructor() { }

  ngOnInit() { }

}
