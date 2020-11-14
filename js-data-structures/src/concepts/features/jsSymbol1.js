/**
 * @fileoverview JS ES6 symbol 
 */

let mySymbol = Symbol('debug');
let anotherSymbol = Symbol('debug');
console.log("Type of symbol variable is", typeof mySymbol);
console.log("Using Symbol constructor", mySymbol == anotherSymbol, "--- should print false");
console.log("Using Symbol constructor", mySymbol === anotherSymbol, "--- should print false");

/**
 * @typedef {Object} ObjType 
 * @property {string} name 
 * @property {Symbol} mySymbol 
 * @property {Symbol} anotherSymbol 
 */
/** @type {ObjType} */
let obj = {
  name: "person",
  [mySymbol]: 100,
  [anotherSymbol]: "this is another property inside obj"
};

console.log("obj", obj);
console.log("obj[mySymbol]", obj[mySymbol], "--- should print 100");
console.log("obj[anotherSymbol]", obj[anotherSymbol]);

let symbol1 = Symbol.for("age");
let symbol2 = Symbol.for("age");
console.log("Using Symbol.for", symbol1 == symbol2, "--- should print true");
console.log("Using Symbol.for", symbol1 === symbol2, "--- should print true");
