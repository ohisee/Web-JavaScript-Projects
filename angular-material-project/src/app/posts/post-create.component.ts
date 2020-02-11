/**
 * @fileoverview component
 */
import { Component, EventEmitter, Output } from '@angular/core';

@Component({
  selector: 'app-post-create',
  templateUrl: './post-create.component.html',
  styleUrls: ['./post-create.component.scss']
})
export class PostCreateComponent {
  enteredContent = '';
  enteredTitle = '';
  postContent = '';

  @Output() postCreated = new EventEmitter();

  onAddPost(/*postInput: HTMLTextAreaElement*/) {
    // this.postContent = postInput.value;
    this.postContent = this.enteredContent;
    const post = {
      title: this.enteredTitle,
      content: this.enteredContent,
    };
    this.postCreated.emit(post);
  }
}