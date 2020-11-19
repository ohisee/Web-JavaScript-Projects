/**
 * @fileoverview JS ES6 symbol 
 */

/**
 * @function toInfo 
 * @param {string} str 
 */
const toInfo = (str) => `\x1b[${32}m${str}\x1b[${89}m${"\x1b[0m"}`;

class Person {
  constructor() { }
}

/**
 * create default string description of an object 
 */
Person.prototype[Symbol.toStringTag] = "Person Object in string format";

let personObj = new Person();

console.log(personObj,
  toInfo("--- should print Person [Person Object in string format] {}"));

console.log(personObj.toString());

let numbers = [1, 2, 3];

console.log(typeof numbers, "--- should print object");

numbers[Symbol.toPrimitive] = function () {
  let r = 0;
  this.forEach((value) => r += value);
  return r;
}

console.log(typeof numbers, "--- should print object");
console.log(numbers + 100, "--- should print 106");
