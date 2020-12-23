/**
 * @fileoverview index app 
 */
import { HttpRequest } from "./xml-http-request";

const spinnerEl = (function () {
  /**@type {HTMLDivElement} */
  const spinner = document.createElement("div");
  spinner.style.cssText = `
    border: 2px solid #f3f3f3;
    border-radius: 50%;
    border-top: 2px solid #3498db;
    width: 20px;
    height: 20px;
    -webkit-animation: spin 2s linear infinite; /* Safari */
    animation: spin 2s linear infinite;
  `;
  return {
    spinner,
  };
})();

(function () {

  /** @type {HTMLButtonElement} */
  const button = document.querySelector("#start-fetch");
  /** @type {HTMLDivElement} */
  const div = document.querySelector("#container");

  button.addEventListener("click", () => {
    const req =
      HttpRequest.fetchData("https://jsonplaceholder.typicode.com/users", {});
    div.innerHTML = "";
    div.appendChild(spinnerEl.spinner);
    req.then(res => {
      setTimeout(function () {
        /** @type {string[]} */
        const names = res.map(d => d.name).slice(1, 10);
        div.removeChild(spinnerEl.spinner);
        names.forEach(n => {
          div.appendChild(document.createTextNode(n));
          div.appendChild(document.createElement("br"));
        });
      }, 1200);
    }).catch(er => {
      div.removeChild(spinnerEl.spinner);
      div.appendChild(document.createTextNode("failed"));
    });
  });

})();
