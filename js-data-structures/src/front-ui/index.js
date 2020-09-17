/**
 * @fileoverview index.js
 */

(function () {
  const spanEl1 = document.querySelector("#el1");
  const spanEl2 = document.querySelector("#el2");
  const spanEl3 = document.querySelector("#el3");
  const mainDiv = document.querySelector(".main");
  const inputEl1 = document.querySelector(".input-el-1");
  const labelEl1 = document.querySelector(".label-el-1");
  const inputEl2 = document.querySelector(".input-el-2");
  const labelEl2 = document.querySelector(".label-el-2");
  const headerContainer = document.querySelector(".button-dropdown-container");
  const dropdownDiv = document.querySelector(".dropdown");
  const timeoutValue = 1800;
  const className = "hideDiv";
  const classNameUpper = "upper";

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

  const handleInputChange = function (inputEl, labelEl, className) {
    inputEl.addEventListener("change", function (event) {
      let t = event.target.value;
      if (t.length > 0) {
        // labelEl1.style.top = "-3px";
        labelEl.classList.add(className);
      } else {
        // labelEl1.removeAttribute("style");
        labelEl.classList.remove(className);
      }
    });
  };

  handleClick(mainDiv, spanEl1, timeoutValue, className);
  handleClick(mainDiv, spanEl2, timeoutValue, className);
  handleClick(mainDiv, spanEl3, timeoutValue, className);

  handleInputChange(inputEl1, labelEl1, classNameUpper);
  handleInputChange(inputEl2, labelEl2, classNameUpper);

  headerContainer.addEventListener("mouseover", function () {
    dropdownDiv.classList.remove("hidden");
  });

  headerContainer.addEventListener("mouseenter", function () {
    dropdownDiv.classList.remove("hidden");
  });

  headerContainer.addEventListener("mouseleave", function () {
    dropdownDiv.classList.add("hidden");
  });

})();
