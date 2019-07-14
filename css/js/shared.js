/**
 * JavaScript 
 *  modal.style.display = 'block';
 *  backdrop.style.display = 'block';
 *  
 *  backdrop.style.display = 'none';
 *  modal.style.display = 'none';
 *  mobileNav.style.display = 'none';
 */
var modalController = (function () {
  /** Select first one */
  var backdrop = document.querySelector('.backdrop');
  var selectPlanButtons = document.querySelectorAll('.plan button');
  var modal = document.querySelector('.modal');
  var modalNoButton = document.querySelector('.modal__action--negative');
  var toggleButton = document.querySelector('.toggle-button');
  var mobileNav = document.querySelector('.mobile-nav');
  var ctaButton = document.querySelector('.main-nav__item--cta');

  // console.log(backdrop.style.backgroundImage);
  // console.log(backdrop.style['background-image']);

  var displayModal = function () {
    if (modal) {
      modal.classList.add('open');
    }
    backdrop.style.display = 'block';
    setTimeout(function () {
      backdrop.classList.add('open');
    }, 200);
  };

  var hideModal = function () {
    // Another way is to use classList.remove('open')
    if (modal) {
      modal.classList.remove('open');
    }
    backdrop.classList.remove('open');
    setTimeout(function () {
      backdrop.style.display = 'none';
    }, 200);
  };

  var attachOpenModalEvent = function () {
    for (var i = 0; i < selectPlanButtons.length; i++) {
      selectPlanButtons[i].addEventListener('click', function () {
        displayModal();
      });
    }
  };

  var attachCloseModalEvent = function () {
    backdrop.addEventListener('click', function () {
      hideModal();
      mobileNav.classList.toggle('open');
    });
    if (modalNoButton) {
      modalNoButton.addEventListener('click', function () {
        hideModal();
      });
    }
  };

  var attachToggleEvent = function () {
    toggleButton.addEventListener('click', function () {
      mobileNav.classList.add('open');
      backdrop.style.display = 'block';
      setTimeout(function () {
        backdrop.classList.add('open');
      }, 200);
    });
  };

  var ctaButtonEvent = function () {
    if (ctaButton) {
      ctaButton.addEventListener('animationstart', function (event) {
        console.log('Animation Started', event);
      });
      ctaButton.addEventListener('animationend', function (event) {
        console.log('Animation Ended', event);
      });
      ctaButton.addEventListener('animationiteration', function (event) {
        console.log('Animation Iteration', event);
      });
    }
  };

  return {
    init: function () {
      attachOpenModalEvent();
      attachCloseModalEvent();
      attachToggleEvent();
      // ctaButtonEvent();
    }
  }
})();

modalController.init();