/**
 * @fileoverview JS ES6 symbol 
 */

let symbol1 = Symbol.for("age");

/**
 * @typedef {Object} PersonType
 * @property {string} name 
 * @property {number} age 
 */
/** @type {PersonType} */
let person = {
  name: "Walker",
  age: 100,
  [symbol1]: 20,
};

console.log(person);

/**
 * @param {PersonType} person 
 */
function makeAge(person) {
  let ageSymbol = Symbol.for("age");
  let symbol2 = Symbol("symbol2");
  person[ageSymbol] = 30;
  person[symbol2] = "a new symbol";
}

makeAge(person);

console.log("Updated symbol", person[symbol1], "--- should print 30");
console.log(person["age"], "--- should print 100");
console.log(person);
