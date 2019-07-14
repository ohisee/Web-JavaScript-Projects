/**
 *@fileoverview tooltip web component
 */
import {Component, Prop, State} from '@stencil/core';

@Component({
  tag: 'app-tooltip',
  shadow: true,
  styleUrl: './tool-tip.css'
})
export class TooltipComponent {

  @Prop() text: string;
  // @Prop({mutable: true}) showTooltipText = false;
  @State() showTooltipText = false;

  onShowTooltipText() {
    this.showTooltipText = !this.showTooltipText;
  }

  render() {
    let tooltopText = null;
    if (this.showTooltipText) {
      tooltopText = <div class="tooltip-text">{this.text}</div>;
    }
    return (
      <div class="tooltip">
        <slot />
        <span
          class="tooltip-icon"
          onClick={this.onShowTooltipText.bind(this)}>(?)</span>
        {tooltopText}
      </div>
    );
  }
}