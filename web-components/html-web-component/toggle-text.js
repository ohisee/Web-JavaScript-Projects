/**
 * @fileoverview Toggle text
 */
class ToggleText extends HTMLElement {
  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.shadowRoot.innerHTML = `
      <style>
        p {
          display: none;
          font-family: sans-serif;
          font-size: 1.25rem;
        }
        button {
          cursor: pointer;
          height: 5rem;
          width: 5rem;
        }
        div#table {
          background-color: #800080;
          width: 10rem;
          border: 1px solid #800080;
        }
        div.row {
          width: 10rem;
          border: 1px solid #800080;
        }
      </style>
      <button>Show</button>
      <p>
        <slot></slot>
      </p>
      <div id='table'>
        <div>&nbsp;</div>
      </div>
      <div class='row'>&nbsp;</div>
      <div class='row'>&nbsp;</div>
      <div class='row'>&nbsp;</div>
    `;
    this._button = this.shadowRoot.querySelector('button');
    this._textInfo = this.shadowRoot.querySelector('p');
    this._visible = false;
  }

  connectedCallback() {
    this._button.addEventListener('click', this._toggleText.bind(this));
    if (this.hasAttribute('text-color')) {
      this._textInfo.style.color = this.getAttribute('text-color');
    }
  }

  _toggleText() {
    this._visible = !this._visible;
    this._textInfo.style.display = this._visible ? 'block' : 'none';
    this._button.textContent = this._visible ? 'Hide' : 'Show';
  }
}

customElements.define('app-toggle-text', ToggleText);
