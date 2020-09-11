/**
 * @fileoverview JavaScript closures
 */

let view;
function initializeView() {
  let initialized = false;
  const initialize = () => {
    view = "<html></html>";
    console.log("View has been set!");
  };
  return function () {
    if (!initialized) {
      initialize();
      initialized = true;
    }
  }
}

const getView = initializeView();
getView();
getView();
getView();
getView();
getView();
getView();
getView();
console.log(view);
