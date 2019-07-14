/**
 * @fileoverview Tooltip in typescript, transpiled to es5
 */
const tooltipText = Symbol('tooltipText');
const tooltipVisible = Symbol('visiable');
const tooltipIcon = Symbol('tooltipIcon');
const showTooltip = Symbol('showTooltip');
const hideTooltip = Symbol('hideTooltip');
const tooltipContainer = Symbol('tooltipContainer');
const iconContainer = Symbol('iconContainer');
const customCreateDivElement = Symbol('customCreateDivElement');

type ElementAttributes = { id: string, className: string, textContent: string };

class Tooltip extends HTMLElement {
  static readonly is = 'app-tooltip';
  static readonly template = document.createElement('template').innerHTML = `
    <style>
      :host { }

      div.tooltip-container {
        font-family: sans-serif;
        background-color: #800080;
        color: white;
        position: absolute;
        top: 1.5rem;
        left: 0.75rem;
        width: 5rem;
        z-index: 10;
        padding: 0.15rem;
        border-radius: 3px;
        box-shadow: 2px 2px 6px rgba(46, 24, 24, 0.5);
        font-weight: normal;
      }

      div.icon-container {
        display: inline-block;
        position: relative;
      }

      .icon {
        margin: 2rem;
        background-color: #e98be9;
        color: #ffffff;
        padding: 0.15rem 0.20rem;
        text-align: center;
        border-radius: 50%
      }

      ::slotted(*) {
        font-family: sans-serif;
      }
    </style>
    <slot></slot>
    <div class="icon-container">
      <span class="icon">(?)</span>
    </div>
  `;

  [tooltipIcon]: HTMLSpanElement | null;
  [tooltipVisible]: boolean = false;
  [tooltipText]: string = "This is default text";
  [tooltipContainer]: HTMLDivElement | null;
  [iconContainer]: HTMLDivElement | null;

  constructor() {
    super();
    const shadowRoot = this.attachShadow({ mode: 'open' });
    shadowRoot.innerHTML = Tooltip.template;
    this[tooltipIcon] = shadowRoot.querySelector('span');
    this[iconContainer] = shadowRoot.querySelector('div.icon-container');
  }


  connectedCallback() {
    if (this.hasAttribute('text')) {
      let text = this.getAttribute('text');
      if (text) {
        this[tooltipText] = text;
      }
    }
    let tip = this[tooltipIcon];
    if (tip) {
      tip.addEventListener('mouseenter', this[showTooltip]);
      tip.addEventListener('mouseleave', this[hideTooltip]);
    }
    this._render();
  }

  disconnectedCallback() {
    let tip = this[tooltipIcon];
    if (tip) {
      tip.removeEventListener('mouseleave', this[showTooltip]);
      tip.removeEventListener('mouseenter', this[hideTooltip]);
    }
  }

  [showTooltip] = () => {
    this[tooltipVisible] = true;
    this._render();
  }

  [hideTooltip] = () => {
    this[tooltipVisible] = false;
    this._render();
  }

  [customCreateDivElement] = (attr: ElementAttributes): HTMLDivElement => {
    let divElement = document.createElement('div');
    divElement.className = attr.className;
    divElement.id = attr.id;
    divElement.textContent = attr.textContent;
    return divElement;
  }

  _render() {
    if (this[tooltipVisible]) {
      if (!this[tooltipContainer]) {
        this[tooltipContainer] = this[customCreateDivElement]({
          id: 'tooltip-container',
          className: 'tooltip-container',
          textContent: this[tooltipText]
        });
      }
      if (this[iconContainer]) {
        this[iconContainer]!.appendChild(this[tooltipContainer]!);
      }
    } else {
      if (this[tooltipContainer] && this[iconContainer]) {
        this[iconContainer]!.removeChild(this[tooltipContainer]!);
      }
    }
  }

}

window.customElements.define(Tooltip.is, Tooltip);
