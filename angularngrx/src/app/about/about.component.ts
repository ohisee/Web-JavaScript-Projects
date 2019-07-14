import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-about',
  templateUrl: './about.component.html',
  styleUrls: ['./about.component.css']
})
export class AboutComponent implements OnInit {

  showBackdrop = false;

  constructor() { }

  ngOnInit() { }

  onClick() {
    this.showBackdrop = true;
  }

  onBackdropClicked(backdropVisibility: boolean) {
    this.showBackdrop = !backdropVisibility;
  }

}
