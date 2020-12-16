/**
 * @fileoverview JSX element 
 */

function GoButton() {
  return React.createElement("button", {
    onClick: function () {
      console.log("clicked");
    },
    className: "button",
  }, "Go To");
}

export { GoButton };
