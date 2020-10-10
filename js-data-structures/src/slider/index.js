/**
 * @fileoverview JS 
 */

const init = (function () {
  /**
   * @typedef {Object} State
   * @property {number} counter
   * @property {number} translatedPx
   * @property {number} activeIndex 
   * @property {number} lastActiveIndex
   * 
   * @typedef {State}
   * 
   * @type {State}
   */
  const state = {
    counter: 1,
    translatedPx: 0,
    activeIndex: 1,
    lastActiveIndex: 0,
  };

  return {
    getCounter() {
      return state.counter;
    },
    getTranslatedPx() {
      return state.translatedPx;
    },
    getActiveIndex() {
      return state.activeIndex;
    },
    getLastActiveIndex() {
      return state.lastActiveIndex;
    },
    updateCounter(num) {
      state.counter += num;
    },
    updateTranslatedPx(num) {
      state.translatedPx = num;
    },
    updateActiveIndex(idx) {
      state.activeIndex = idx;
    },
    updateLastActiveIndex(idx) {
      state.lastActiveIndex = idx;
    }
  };
})();

(function (init) {

  const prev = document.querySelector("#button-previous");
  const next = document.querySelector("#button-next");
  const pics = document.querySelectorAll(".picture");
  const circles = document.querySelectorAll(".circle__button");
  /** @type {HTMLDivElement} */
  const sliderContainer = document.querySelector(".slider__container");
  /** @type {HTMLDivElement} */
  const slideEl = document.querySelector(".slider__container .slides");
  /** @type {HTMLDivElement} */
  const circleButtonContainer = document.querySelector(".buttons__container");
  const moveToLeftPx = -501;
  const moveToRightPx = 501;
  const maxCount = pics.length;
  const circleButtonClicked = "circleButtonClicked";
  const prevButtonClicked = "prevButtonClicked";
  const nextButtonClicked = "nextButtonClicked";
  /**
   * @typedef {Object<string, HTMLDivElement>} CircleButton
   * @type {CircleButton}
   */
  const circleButtons = {};

  /**
   * @param {CircleButton} circleButtons 
   */
  function initialize(circleButtons) {
    for (let i = 0; i < circles.length; i++) {
      /** @type {HTMLDivElement} circle */
      let circle = circles[i];
      let idx = parseInt(circle.getAttribute("data-index-number"));
      if (idx === init.getActiveIndex()) {
        circle.classList.add("active");
      }
      circleButtons[`cr${idx}`] = circle;
    }
    return function (fn) {
      return fn(circleButtons);
    }
  }

  /**
   * @param {CircleButton} circleButtons 
   */
  function setUpCircleButtons(circleButtons) {
    for (let key in circleButtons) {
      circleButtons[key].addEventListener("click", function () {
        // this points to div element 
        let event = new Event(circleButtonClicked, { bubbles: true });
        let idx = parseInt(this.getAttribute("data-index-number"));
        if (idx) {
          init.updateLastActiveIndex(init.getActiveIndex());
          init.updateActiveIndex(idx);
        }
        this.dispatchEvent(event);
      });
    }
    return function (fn) {
      return fn(circleButtons);
    }
  }

  /**
   * @param {CircleButton} circleButtons 
   * @param {number} activeIndex 
   * @param {number} lastIndex 
   */
  function updateActiveButton(circleButtons, activeIndex, lastIndex) {
    let activeEl = circleButtons[`cr${activeIndex}`];
    let lastEl = circleButtons[`cr${lastIndex}`];
    if (activeEl) {
      activeEl.classList.add("active");
    }
    if (lastEl) {
      lastEl.classList.remove("active");
    }
  }

  /**
   * @param {number} translatedPx 
   */
  function slideTo(translatedPx) {
    slideEl.style.transform = `translate(${translatedPx}px, 0)`;
    slideEl.style.transition = "transform 300ms linear";
    init.updateTranslatedPx(translatedPx);
  }

  prev.addEventListener("click", function () {
    let counter = init.getCounter();
    if (counter < maxCount && counter >= 1) {
      let moveTo = moveToLeftPx * init.getCounter();
      slideEl.style.transform = `translate(${moveTo}px, 0)`;
      slideEl.style.transition = "transform 300ms linear";
      init.updateTranslatedPx(moveTo);
      init.updateCounter(1);
      init.updateActiveIndex(init.getCounter());
      this.dispatchEvent(new Event(prevButtonClicked, { bubbles: true }));
    }
  });

  next.addEventListener("click", function () {
    let counter = init.getCounter();
    if (counter > 1 && counter <= maxCount) {
      let moveTo = init.getTranslatedPx() + moveToRightPx;
      slideEl.style.transform = `translate(${moveTo}px, 0)`;
      slideEl.style.transition = "transform 300ms linear";
      init.updateTranslatedPx(moveTo);
      init.updateCounter(-1);
      init.updateActiveIndex(init.getCounter());
      this.dispatchEvent(new Event(nextButtonClicked, { bubbles: true }));
    }
  });

  circleButtonContainer.addEventListener(circleButtonClicked, function () {
    let activeIndex = init.getActiveIndex();
    let lastActiveIndex = init.getLastActiveIndex();
    if (activeIndex !== lastActiveIndex) {
      updateActiveButton(circleButtons, activeIndex, lastActiveIndex);
      if (activeIndex > lastActiveIndex) {
        slideTo(moveToLeftPx * (activeIndex - 1));
      } else {
        slideTo(
          init.getTranslatedPx() + (moveToRightPx * (lastActiveIndex - activeIndex)));
      }
    }
  });

  sliderContainer.addEventListener(prevButtonClicked, function () {
    let activeIndex = init.getActiveIndex();
    let lastIndex = activeIndex - 1;
    updateActiveButton(circleButtons, activeIndex, lastIndex);
  });

  sliderContainer.addEventListener(nextButtonClicked, function () {
    let activeIndex = init.getActiveIndex();
    let lastIndex = activeIndex + 1;
    updateActiveButton(circleButtons, activeIndex, lastIndex);
  });

  initialize(circleButtons)(setUpCircleButtons);

})(init);
