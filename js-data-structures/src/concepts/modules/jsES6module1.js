/**
 * @fileoverview JavaScript ES6 modules 
 * 
 * @see index.html import in index.html
 *
 * name export
 * default export ----- export default
 */

const id = (Math.random() * 9871332).toString(31).replace('.', '');

function makeElement(name) {
  return `<div id="${id}" name="${name}"></div>`;
}

// name export
export { makeElement };
