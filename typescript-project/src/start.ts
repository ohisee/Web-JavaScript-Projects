/**
 * @fileoverview start typescript
 */
import './styles.css';

const bars: HTMLElement | null = document.querySelector('.bars');
const sideDrawer: HTMLElement | null = document.querySelector('.side-drawer');
const sideDrawerClose: HTMLElement | null = document.querySelector('#side-drawer-close');
const backdrop: HTMLElement | null = document.querySelector('.backdrop');
const confirmButton: HTMLButtonElement | null = document.querySelector('#modal-button-confirm');
const leaveButton: HTMLButtonElement | null = document.querySelector('#modal-button-leave');
const confirmModal: HTMLElement | null = document.querySelector('#confirm-modal');
const modal: HTMLElement | null = document.querySelector('#modal');

if (bars) {
  bars.addEventListener('click', () => {
    if (sideDrawer && !sideDrawer.dataset.open) {
      sideDrawer.dataset.open = 'open';
      if (backdrop) {
        backdrop.style.display = 'block';
      }
    }
  });
}

if (sideDrawerClose) {
  sideDrawerClose.addEventListener('click', () => {
    if (sideDrawer && sideDrawer.dataset.open) {
      sideDrawer.removeAttribute('data-open');
    }
    if (backdrop) {
      backdrop.style.display = 'none';
    }
    if (modal && modal.dataset.open) {
      modal.removeAttribute('data-open');
    }
  });
}

if (confirmButton && leaveButton) {
  confirmButton.addEventListener('click', () => {
    confirmButton.classList.add('active');
    leaveButton.classList.remove('active');
  });
  leaveButton.addEventListener('click', () => {
    leaveButton.classList.add('active');
    confirmButton.classList.remove('active');
    if (modal && modal.dataset.open) {
      modal.removeAttribute('data-open');
    }
  });
}

if (confirmModal) {
  confirmModal.addEventListener('click', () => {
    if (modal && !modal.dataset.open) {
      modal.dataset.open = 'open';
      (confirmButton) ? confirmButton.classList.remove('active') : null;
      (leaveButton) ? leaveButton.classList.remove('active') : null;
    }
  });
}
