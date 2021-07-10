/**
 * @fileoverview index js
 */

(function () {
  /** @type {HTMLDivElement} */
  const todoItemListEl = document.querySelector(".todoitem_list");
  /** @type {NodeListOf<HTMLDivElement>} */
  const els = document.querySelectorAll(".todoitem");
  /** @type {NodeListOf<HTMLDivElement>} */
  const spaceEls = document.querySelectorAll(".spaceBetween");
  /** @type {string} */
  const bgClass = "dragOverBackground";
  const moveUpClass = "moveUp";
  const moveDownClass = "moveDown";

  for (let i = 0; i < els.length; i++) {
    let el = els[i];

    el.addEventListener('dragstart', function (event) {
      event.dataTransfer.setData("text/plain", JSON.stringify({ id: el.id, index: i }));
      event.dataTransfer.effectAllowed = "move";
      event.dataTransfer.setDragImage(withImage(10, 280, 30), 20, 20);
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
      if (sourceEl && i !== source.index) {
        render(i, source.index);
      }
      el.classList.remove(bgClass);
      event.preventDefault();
    });
  }

  for (let j = 0; j < spaceEls.length; j++) {
    let spaceEl = spaceEls[j];

    spaceEl.addEventListener('dragenter', function (event) {
      event.preventDefault();
      let x = document.getElementById(spaceEl.dataset.x);
      let y = document.getElementById(spaceEl.dataset.y);
      x.classList.add(moveUpClass);
      y.classList.add(moveDownClass);
    });

    spaceEl.addEventListener('dragleave', function (event) {
      event.preventDefault();
      let x = document.getElementById(spaceEl.dataset.x);
      let y = document.getElementById(spaceEl.dataset.y);
      x.classList.remove(moveUpClass);
      y.classList.remove(moveDownClass);
    });

    spaceEl.addEventListener('dragover', function (event) {
      event.preventDefault();
    });

    spaceEl.addEventListener('drop', function (event) {
      event.preventDefault();
      let x = document.getElementById(spaceEl.dataset.x);
      let y = document.getElementById(spaceEl.dataset.y);
      x.classList.remove(moveUpClass);
      y.classList.remove(moveDownClass);
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

  /**
   * @param {number} curve 
   * @param {number} length 
   * @param {number} height 
   * @returns {HTMLCanvasElement}
   */
  function withImage(curve = 20, length = 200, height = 10) {
    /** @type {HTMLCanvasElement} */
    const canvas = document.createElement('canvas');
    /** @type {CanvasRenderingContext2D} */
    const canvasContext = canvas.getContext('2d');
    // Start at x at curve and y at 0
    const startPoint = { x: curve, y: 0 };
    const topLine = { x: length, y: 0 };
    const firstArcTo = {
      x1: topLine.x + curve,
      y1: 0,
      x2: topLine.x + curve,
      y2: curve,
      r: curve
    };
    const rightLine = {
      x: firstArcTo.x2,
      y: curve + height
    };
    const secondArcTo = {
      x1: rightLine.x,
      y1: rightLine.y + curve,
      x2: rightLine.x - curve,
      y2: rightLine.y + curve,
      r: curve
    };
    const bottomLine = {
      x: startPoint.x,
      y: secondArcTo.y2
    };
    const thirdArcTo = {
      x1: 0,
      y1: bottomLine.y,
      x2: 0,
      y2: bottomLine.y - curve,
      r: curve
    };
    const leftLine = {
      x: 0,
      y: thirdArcTo.y2
    };
    const fourthArcTo = {
      x1: 0,
      y1: 0,
      x2: startPoint.x,
      y2: 0,
      r: curve
    };

    canvasContext.fillStyle = "#0b3d3f";
    canvasContext.strokeStyle = "#0b3d3f";
    canvasContext.beginPath();
    canvasContext.moveTo(startPoint.x, startPoint.y);
    canvasContext.lineTo(topLine.x, topLine.y);
    canvasContext.arcTo(firstArcTo.x1, firstArcTo.y1, firstArcTo.x2, firstArcTo.y2, firstArcTo.r);
    canvasContext.lineTo(rightLine.x, rightLine.y);
    canvasContext.arcTo(secondArcTo.x1, secondArcTo.y1, secondArcTo.x2, secondArcTo.y2, secondArcTo.r);
    canvasContext.lineTo(bottomLine.x, bottomLine.y);
    canvasContext.arcTo(thirdArcTo.x1, thirdArcTo.y1, thirdArcTo.x2, thirdArcTo.y2, thirdArcTo.r);
    canvasContext.lineTo(leftLine.x, leftLine.y);
    canvasContext.arcTo(fourthArcTo.x1, fourthArcTo.y1, fourthArcTo.x2, fourthArcTo.y2, fourthArcTo.r);
    canvasContext.closePath();
    canvasContext.fill();
    canvasContext.stroke();
    return canvas;
  }

})();
