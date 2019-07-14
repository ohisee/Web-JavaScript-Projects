/**
 * @fileoverview Modal web component
 */

class ModalComponent extends HTMLElement {

  constructor() {
    super();
    this.attachShadow({ mode: 'open' });
    this.isOpen = false;
    this.shadowRoot.innerHTML = `
      <style>
        #backdrop {
          position: fixed;
          top: 0;
          left: 0;
          width: 100%;
          height: 100vh;
          background: rgba(0, 0, 0, 0.75);
          z-index: 10;
          opacity: 0;
          pointer-events: none;
        }

        :host([opened]) #backdrop,
        :host([opened]) #modal {
          opacity: 1;
          pointer-events: all;
        }

        :host([opened]) #modal {
          top: 25vh;
        }

        #modal {
          position: fixed;
          top: 10vh;
          left: 25%;
          width: 50%;
          z-index: 100;
          background: white;
          border-radius: 3px;
          box-shadow: 0 2px 8px rgba(0, 0, 0, 0.25);
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          opacity: 0;
          pointer-events: none;
          transition: all 0.3s ease-out;
        }

        header {
          padding: 1rem;
          border-bottom: 1px solid #cccccc;
        }

        header h2 {
          font-size: 1.25rem;
        }

        ::slotted(h2) {
          font-size: 1.25rem;
          margin: 0;
        }

        #action {
          border-top: 1px solid #cccccc;
          padding: 1rem;
          display: flex;
          justify-content: flex-end;
        }

        #action button {
          margin: 0 0.25rem;
        }

        #main {
          padding: 1rem;
        }

      </style>
      <div id='backdrop'></div>
      <div id='modal'>
        <header>
          <slot name='title'>Please confirm payment</slot>
        </header>
        <section id='main'>
          <slot name='main'></slot>
        </section>
        <section id='action'>
          <button id='cancel-btn'>Cancel</button>
          <button id='ok-btn'>Ok</button>
        </section>
      </div>
    `;

    const slots = this.shadowRoot.querySelectorAll('slot');
    slots[1].addEventListener('slotchange', event => {
      console.dir(slots[1].assignedNodes());
    });
    this._okButton = this.shadowRoot.querySelector('#ok-btn');
    this._cancelButton = this.shadowRoot.querySelector('#cancel-btn');
    this._backdrop = this.shadowRoot.querySelector('#backdrop');
  }

  connectedCallback() {
    this._okButton.addEventListener('click', this._confirm.bind(this));
    this._cancelButton.addEventListener('click', this._cancel.bind(this));
    this._backdrop.addEventListener('click', this._cancel.bind(this));
    // this._cancelButton.addEventListener('cancel', () => {
    //   console.log('Cancelled by button');
    // });
  }

  disconnectedCallback() {
    this._cancelButton.removeEventListener('click', this._cancel);
    this._okButton.removeEventListener('click', this._confirm);
  }

  _removeModal() {
    const modal = this.shadowRoot.querySelector('#modal');
    if (modal) {
      modal.style.display = 'none';
    }
  }

  attributeChangedCallback(name, oldValue, newValue) {
    // if (name === 'opened') {
    if (this.hasAttribute('opened')) {
      this.isOpen = true;
      // this.shadowRoot.querySelector('#backdrop').style.opacity = 1;
      // this.shadowRoot.querySelector('#backdrop').style.pointerEvents = 'all';
      // this.shadowRoot.querySelector('#modal').style.opacity = 1;
      // this.shadowRoot.querySelector('#modal').style.pointerEvents = 'all';
    } else {
      this.isOpen = false;
    }
    // }
  }

  static get observedAttributes() {
    return ['opened'];
  }

  open() {
    this.setAttribute('opened', '');
    this.isOpen = true;
  }

  hide() {
    if (this.hasAttribute('opened')) {
      this.removeAttribute('opened');
    }
    this.isOpen = false;
  }

  _cancel(event) {
    this.hide();
    const cancelEvent = new Event('cancel', { bubbles: true, composed: true });
    event.target.dispatchEvent(cancelEvent);
  }

  _confirm() {
    this.hide();
    const confirmEvent = new Event('confirm');
    this.dispatchEvent(confirmEvent);
  }

}

customElements.define('app-modal', ModalComponent);