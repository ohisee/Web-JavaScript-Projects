/**s
 * Custom HTML component
 */
class ToggleButton extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        #info-box {
          display: none;
        }
      </style>
      <button>Show</button>
      <p id="info-box">
        <slot></slot>
      </p>
    `;
    this._isHidden = true;
    // Select from shadow DOM, not from real DOM
    this._button = this.shadowRoot.querySelector('button');
    this._infoEl = this.shadowRoot.querySelector('#info-box');
  }

  connectedCallback() {
    this._button.addEventListener('click', this._toggleInfoBox.bind(this));
    if (this.hasAttribute('is-info-visible')
      && this.getAttribute('is-info-visible') === 'true') {
      this._isHidden = false;
      this._infoEl.style.display = 'block';
      this._button.textContent = 'Hide';
    }
  }

  _toggleInfoBox() {
    this._isHidden = !this._isHidden;
    this._infoEl.style.display = this._isHidden ? 'none' : 'block';
    this._button.textContent = this._isHidden ? 'Show' : 'Hide';
  }

}

customElements.define('app-toggle-button', ToggleButton);
