/**
 * Tooltip web component
 */
class Tooltip extends HTMLElement {
  constructor() {
    super();
    this._tooltipContainer;
    this._tooltipText = 'This is the tooltop text';
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        div {
          position: absolute;
          z-index: 10;
          background-color: #3a3939;
          color: white;
          font-size: 1rem;
        }
      </style>
      <slot>Some Default Value</slot>
      <span> (?)</span>
    `;
  }

  /**
   * Life cycle callback
   */
  connectedCallback() {
    if (this.hasAttribute('text')) {
      this._tooltipText = this.getAttribute('text');
    }
    // const tooltipIcon = document.createElement('span');
    // tooltipIcon.textContent = ' (?)';
    const tooltipIcon = this.shadowRoot.querySelector('span');
    tooltipIcon.addEventListener('mouseenter', this._showTooltip.bind(this));
    tooltipIcon.addEventListener('mouseleave', this._hideTooltip.bind(this));
    // Append to this tool tip
    // this.appendChild(tooltipIcon);
    this.shadowRoot.appendChild(tooltipIcon);
    // Style of this tooltip
    this.style.position = 'relative';
  }

  _showTooltip() {
    this._tooltopContainer = document.createElement('div');
    this._tooltopContainer.textContent = this._tooltipText;
    // this._tooltopContainer.style.position = 'absolute';
    // this.appendChild(this._tooltopContainer);
    this.shadowRoot.appendChild(this._tooltopContainer);
  }

  _hideTooltip() {
    if (this._tooltopContainer) {
      // this.removeChild(this._tooltopContainer);
      this.shadowRoot.removeChild(this._tooltopContainer);
    }
  }
}

customElements.define('app-tooltip', Tooltip);