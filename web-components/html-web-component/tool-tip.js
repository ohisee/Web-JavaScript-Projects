/**
 * @fileoverview Tool tip
 */
class Tooltip extends HTMLElement {
  constructor() {
    super();
    // this._tooltipContainer;
    this._tooltipText = 'This is default text tooltip';
    this._tooltipIcon;
    this._tooltipVisible = false;
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        div {
          background-color: #800080;
          color: white;
          position: absolute;
          top: 1.5rem;
          left: 0.75rem;
          z-index: 10;
          padding: 0.15rem;
          border-radius: 3px;
          box-shadow: 2px 2px 6px rgba(46, 24, 24, 0.5);
          font-weight: normal;
        }

        .highlighted {
          background-color: #ffcbd8;
        }

        ::slotted(.highlighted) {
          border-bottom: 2px dashed red;
        }

        .icon {
          background-color: #e98be9;
          color: #ffffff;
          padding: 0.15rem 0.20rem;
          text-align: center;
          border-radius: 50%
        }

        :host {
          position: relative;
        }

        :host(.important) {
          background-color: var(--color-primary, #9c9a9a);
          padding: 0.25rem;
        }

        :host-context(p) {
          font-weight: bold;
          font-family: sans-serif;
        }
      </style>
      <slot>Default tooltip text</slot>
      <span class="icon">(?)</span>
    `;
  }

  connectedCallback() {
    if (this.hasAttribute('text')) {
      this._tooltipText = this.getAttribute('text');
    }
    // const tooltipIcon = document.createElement('span');
    // tooltipIcon.textContent = ' (?)';
    this._tooltipIcon = this.shadowRoot.querySelector('span');
    this._tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    this._tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    // this.appendChild(tooltipIcon);
    // this.shadowRoot.appendChild(tooltipIcon);
    // this.style.position = 'relative';
    this._render();
  }

  attributeChangedCallback(name, oldValue, newValue) {
    if (oldValue === newValue) {
      return;
    }
    if (name === 'text') {
      this._tooltipText = newValue;
    }
  }

  /**
   * In order to get attributeChangedCallback life hook function to observe change,
   * need the following getter to return an array of attributes that web components observe.
   */
  static get observedAttributes () {
    // text attribute in web component
    return ['text'];
  }

  /**
   * Component removed from DOM
   */
  disconnectedCallback () {
    this._tooltipIcon.removeEventListener('mouseenter', this._showTooltip);
    this._tooltipIcon.removeEventListener('mouseleave', this._showTooltip);
  }

  /**
   * Do renderring in one place
   */
  _render() {
    let tooltipContainer = this.shadowRoot.querySelector('div');
    if (this._tooltipVisible) {
      tooltipContainer = document.createElement('div');
      tooltipContainer.textContent = this._tooltipText;
      this.shadowRoot.appendChild(tooltipContainer);
    } else {
      if (tooltipContainer) {
        this.shadowRoot.removeChild(tooltipContainer);
      }
    }
  }

  /**
   * Only called inside this class
   */
  _showTooltip() {
    // const tooltipContainer = document.createElement('div');
    // tooltipContainer.textContent = 'This is the tooltip text';
    // this.appendChild(tooltipContainer);
    // this._tooltipContainer = document.createElement('div');
    // this._tooltipContainer.textContent = this._tooltipText;
    // this._tooltipContainer.style.backgroundColor = '#800080';
    // this._tooltipContainer.style.color = 'white';
    // this._tooltipContainer.style.position = 'absolute';
    // this._tooltipContainer.style.zIndex = '10';
    // this.appendChild(this._tooltipContainer);
    // this.shadowRoot.appendChild(this._tooltipContainer);
    this._tooltipVisible = true;
    this._render();
  }

  _hideTooltip() {
    // this.removeChild(this._tooltipContainer);
    // this.shadowRoot.removeChild(this._tooltipContainer);
    this._tooltipVisible = false;
    this._render();
  }
}

customElements.define('app-tooltip', Tooltip);
