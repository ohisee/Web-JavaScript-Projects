/**
 * @fileoverview JS 
 */

(function () {

  const prev = document.querySelector("#button-previous");
  const next = document.querySelector("#button-next");
  const pics = document.querySelectorAll(".picture");

  /**
   * @typedef {Object} HtmlElementState
   * @property {boolean} active
   * @property {HTMLElement} picture
   * @property {number} index
   * 
   * @typedef {Object<string, HtmlElementState>} State
   * 
   * @type {State}
   */
  const state = {};

  /**
   * @param {number} r 
   * @param {number} g 
   * @param {number} b 
   */
  function hexColor(r, g, b) {
    let rh = (r > 255 ? r % 255 : r).toString(16);
    let gh = (g > 255 ? g % 255 : g).toString(16);
    let bh = (b > 255 ? b % 255 : b).toString(16);
    rh = rh.length === 1 ? `0${rh}` : rh;
    gh = gh.length === 1 ? `0${gh}` : gh;
    bh = bh.length === 1 ? `0${bh}` : bh;
    return `#${rh}${gh}${bh}`;
  }

  function initialize() {
    for (let i = 0; i < pics.length; i++) {
      let picElement = pics[i];
      let idx = parseInt(picElement.getAttribute("data-index-number"));
      state[`pc${idx}`] = {
        active: (idx === 1) ? true : false,
        picture: picElement,
        index: idx,
      };
      if (idx !== 1) {
        picElement.style.backgroundColor = hexColor(90 * i, i, i * 11);
      }
    }
  }

  /**
   * @param {State} state 
   * @param {string} bname 
   */
  function updateActiveState(state, bname) {
    for (let key in state) {
      if (key === bname) {
        state[key].active = true;
      } else {
        state[key].active = false;
      }
    }
  }

  /**
   * @param {State} state 
   * @param {number} increment 
   */
  function slidePicture(state, increment) {
    let [activeElement] = Object.keys(state).filter(key => state[key].active);
    let indexCount = Object.keys(state).length;
    if (activeElement) {
      let activeElInx = state[activeElement].index;
      let targetElInx = activeElInx + increment;
      if (targetElInx <= indexCount && targetElInx > 0) {
        let activeEl = state[`pc${activeElInx}`];
        let targetEl = state[`pc${targetElInx}`];
        activeEl.picture.className = "picture";
        targetEl.picture.className = "picture";
        if (targetElInx > activeElInx) {
          activeEl.picture.classList.add("slide-away-to-left");
          targetEl.picture.classList.add("slide-to-center-from-right");
        } else {
          if (activeEl.picture.dataset.indexNumber > 1) {
            activeEl.picture.classList.add("slide-to-init-position-not-first-slide")
          }
          if (targetEl.picture.dataset.indexNumber > 1) {
            targetEl.picture.classList.add("slide-to-center-not-first-slide");
          }
        }
        return function (fn) {
          fn(state, `pc${targetElInx}`);
        }
      }
    }
    return function (fn) { return; }
  }

  prev.addEventListener("click", function () {
    slidePicture(state, -1)(updateActiveState);
  });

  next.addEventListener("click", function () {
    slidePicture(state, 1)(updateActiveState);
  });

  initialize();

})();
