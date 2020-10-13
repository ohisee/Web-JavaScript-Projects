/**
 * @fileoverview JS 
 */

const init = (function () {
  /**
   * @typedef {Object} State
   * @property {number} translatedPx
   * @property {number} activeIndex 
   * @property {number} lastActiveIndex
   * 
   * @typedef {State}
   * 
   * @type {State}
   */
  const state = {
    translatedPx: 0,
    activeIndex: 1,
    lastActiveIndex: 0,
  };

  return {
    getTranslatedPx() {
      return state.translatedPx;
    },
    getActiveIndex() {
      return state.activeIndex;
    },
    getLastActiveIndex() {
      return state.lastActiveIndex;
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

  /**@type {HTMLSpanElement} move to slide to left */
  const lb = document.querySelector("#button-previous");
  /**@type {HTMLSpanElement} move to slide to right */
  const rb = document.querySelector("#button-next");
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
   * @param {number} lastActiveIndex 
   * @param {number} activeIndex 
   */
  function slideTo(translatedPx, lastActiveIndex, activeIndex) {
    slideEl.style.transform = `translate(${translatedPx}px, 0)`;
    slideEl.style.transition = "transform 300ms linear";
    init.updateTranslatedPx(translatedPx);
    init.updateLastActiveIndex(lastActiveIndex)
    init.updateActiveIndex(activeIndex);
    setTimeout(function (slideEl) {
      slideEl.style.removeProperty("transition");
    }, 600, slideEl);
  }

  // slide to left 
  lb.addEventListener("click", function () {
    let currentIndex = init.getActiveIndex();
    if (currentIndex < maxCount && currentIndex >= 1) {
      let moveTo = moveToLeftPx * currentIndex;
      // set current index as last index 
      slideTo(moveTo, currentIndex, currentIndex + 1);
      this.dispatchEvent(new Event(prevButtonClicked, { bubbles: true }));
    }
  });

  // slide to right  
  rb.addEventListener("click", function () {
    let currentIndex = init.getActiveIndex();
    if (currentIndex > 1 && currentIndex <= maxCount) {
      let moveTo = init.getTranslatedPx() + moveToRightPx;
      // set current index as last index  
      slideTo(moveTo, currentIndex, currentIndex - 1);
      this.dispatchEvent(new Event(nextButtonClicked, { bubbles: true }));
    }
  });

  circleButtonContainer.addEventListener(circleButtonClicked, function () {
    let activeIndex = init.getActiveIndex();
    let lastActiveIndex = init.getLastActiveIndex();
    if (activeIndex !== lastActiveIndex) {
      updateActiveButton(circleButtons, activeIndex, lastActiveIndex);
      if (activeIndex > lastActiveIndex) {
        slideTo(moveToLeftPx * (activeIndex - 1),
          lastActiveIndex,
          activeIndex);
      } else {
        slideTo(
          init.getTranslatedPx() + (moveToRightPx * (lastActiveIndex - activeIndex)),
          lastActiveIndex,
          activeIndex);
      }
    }
  });

  sliderContainer.addEventListener(prevButtonClicked, function () {
    let activeIndex = init.getActiveIndex();
    let lastActiveIndex = activeIndex - 1;
    updateActiveButton(circleButtons, activeIndex, lastActiveIndex);
  });

  sliderContainer.addEventListener(nextButtonClicked, function () {
    let activeIndex = init.getActiveIndex();
    let lastIndex = activeIndex + 1;
    updateActiveButton(circleButtons, activeIndex, lastIndex);
  });

  initialize(circleButtons)(setUpCircleButtons);

})(init);
