/**
 * @fileoverview index.js
 */

(function () {
  const spanEl1 = document.querySelector("#el1");
  const spanEl2 = document.querySelector("#el2");
  const spanEl3 = document.querySelector("#el3");
  const mainDiv = document.querySelector(".main");
  const timeoutValue = 1800;

  if (spanEl1) {
    spanEl1.addEventListener("click", function () {
      spanEl1.parentElement.classList.add("hideDiv");
      if (mainDiv) {
        console.log(spanEl1);
        setTimeout(function () {
          mainDiv.removeChild(spanEl1.parentElement);
        }, timeoutValue);
      }
    });
  }

  if (spanEl2) {
    spanEl2.addEventListener("click", function () {
      spanEl2.parentElement.classList.add("hideDiv");
      if (mainDiv) {
        console.log(spanEl2);
        setTimeout(function () {
          mainDiv.removeChild(spanEl2.parentElement);
        }, timeoutValue);
      }
    });
  }

  if (spanEl3) {
    spanEl3.addEventListener("click", function () {
      spanEl3.parentElement.classList.add("hideDiv");
      if (mainDiv) {
        console.log(spanEl3);
        setTimeout(function () {
          mainDiv.removeChild(spanEl3.parentElement);
        }, timeoutValue);
      }
    });
  }

})();
