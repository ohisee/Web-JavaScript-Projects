import { Component, Input } from '@angular/core';

@Component({
  selector: 'app-post-list',
  templateUrl: './post-list.component.html',
  styleUrls: ['./post-list.component.scss']
})
export class PostListComponent {
  @Input() posts = [
    // {
    //   title: "first",
    //   content: "abc"
    // },
    // {
    //   title: "second",
    //   content: "xyc"
    // },
    // {
    //   title: "third",
    //   content: "ijk"
    // }
  ];
}
