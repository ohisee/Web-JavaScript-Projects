/**
 * @fileoverview Spinner web component
 */
import {Component} from "@stencil/core";

@Component({
  tag: 'app-spinner',
  styleUrl: './spinner.css',
})
export class SpinnerComponent {
  render() {
    return (<div class="loader"></div>);
  }
}