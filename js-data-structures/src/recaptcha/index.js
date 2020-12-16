/**
 * @fileoverview index 
 */
import { GoButton } from "./button.js";

function App() {
  return React.createElement("div", {
    className: "main-div"
  }, [
    React.createElement("h2", {}, "h2 element should be visiable now"),
    React.createElement("p", {}, "some texts here"),
    React.createElement(GoButton),
  ]);
}

ReactDOM.render(
  React.createElement(App),
  document.getElementById("root")
);
