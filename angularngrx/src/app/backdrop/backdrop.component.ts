import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';

@Component({
  selector: 'app-backdrop',
  templateUrl: './backdrop.component.html',
  styleUrls: ['./backdrop.component.css']
})
export class BackdropComponent implements OnInit {

  @Input()
  show: boolean;

  @Output()
  backdropClicked = new EventEmitter<boolean>();

  constructor() { }

  ngOnInit() { }

  onClick() {
    this.backdropClicked.next(this.show);
  }

}
