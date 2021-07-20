/**
 * @fileoverview JavaScript immediately invoked function expression IIFE
 *
 * use IIFE as a module
 */

/**
 * Module pattern, this is a reveal module pattern 
 * but there are still problem  
 * 1) it is still inside global namespace, 
 * 2) can be overridden by another variable with same name 
 *      (depending on the order of script tag in HTML)
 */
var randomModule = (function () {
  var id = (Math.random() * 9871332).toString(31).replace('.', '');
  function makeElement(name) {
    return `<div id="${id}" name="${name}"></div>`;
  }
  return {
    makeElement: makeElement
  }
})();

console.log(randomModule);
console.log(randomModule.makeElement("main"));
