/**
 * @fileoverview index js
 */

(function () {
  /** @type {HTMLDivElement} */
  const todoItemListEl = document.querySelector(".todoitem_list");
  /** @type {NodeListOf<HTMLDivElement>} */
  const els = document.querySelectorAll(".todoitem");
  /** @type {string} */
  const bgClass = "dragOverBackground";

  for (let i = 0; i < els.length; i++) {
    let el = els[i];

    el.addEventListener('dragstart', function (event) {
      event.dataTransfer.setData("text/plain", JSON.stringify({ id: el.id, index: i }));
      event.dataTransfer.effectAllowed = "move";
    });

    el.addEventListener('dragover', function (event) {
      // el.style.backgroundColor = "blue";
      el.classList.add(bgClass);
      if (event.dataTransfer.types.includes("text/plain")) {
        event.preventDefault();
      }
    });

    el.addEventListener('dragleave', function () {
      el.classList.remove(bgClass);
    });

    el.addEventListener('drop', function (event) {
      let data = event.dataTransfer.getData("text/plain");
      /** @type {{id: string, index: number}} */
      let source = JSON.parse(data);
      /** @typedef {HTMLDivElement} */
      let sourceEl = document.getElementById(source.id);
      if (sourceEl) {
        render(i, source.index);
      }
      el.classList.remove(bgClass);
      event.preventDefault();
    });
  }

  /**
   * Render todo list
   *
   * @param {number} dropAtIndex 
   * @param {number} sourceIndex 
   */
  function render(dropAtIndex, sourceIndex) {
    /** @type {string[]} */
    let first = [];

    for (let i = 0; i < els.length; i++) {
      if (i === dropAtIndex) {
        if (sourceIndex > dropAtIndex) {
          first.push(els[sourceIndex].textContent);
        } else {
          first.push(els[dropAtIndex].textContent, els[sourceIndex].textContent);
          continue;
        }
      }
      if (i !== sourceIndex) {
        first.push(els[i].textContent);
      }
    }

    first.forEach((text, index) => {
      els[index].textContent = text;
    });
  }

})();