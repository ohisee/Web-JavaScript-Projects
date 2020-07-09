/**
 * @fileoverview index.js
 */

(function () {
  const spanEl1 = document.querySelector("#el1");
  const spanEl2 = document.querySelector("#el2");
  const spanEl3 = document.querySelector("#el3");
  const mainDiv = document.querySelector(".main");
  const timeoutValue = 1800;
  const className = "hideDiv";

  const handleClick = function (mainDiv, spanDiv, timer, className) {
    if (spanDiv) {
      spanDiv.addEventListener("click", function () {
        spanDiv.parentElement.classList.add(className);
        if (mainDiv) {
          setTimeout(function () {
            mainDiv.removeChild(spanDiv.parentElement);
          }, timer);
        }
      });
    }
  };

  handleClick(mainDiv, spanEl1, timeoutValue, className);
  handleClick(mainDiv, spanEl2, timeoutValue, className);
  handleClick(mainDiv, spanEl3, timeoutValue, className);

})();
