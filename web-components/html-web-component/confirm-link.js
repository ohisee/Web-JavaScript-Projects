/**
 * @fileoverview Confirm link
 */
class ConfirmLink extends HTMLAnchorElement {
  constructor() {
    super();
  }

  connectedCallback() {
    this.addEventListener('click', (event) => {
      if (!confirm('DO you need to want to leave?')) {
        event.preventDefault();
      }
    });
  }
}

customElements.define('app-confirm-link', ConfirmLink, { extends: 'a'});
