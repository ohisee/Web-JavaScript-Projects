/**
 * @fileoverview JS ES6 set and weakset 
 */

/**
 * @function toInfo 
 * @param {string} str 
 */
const toInfo = (str) => `\x1b[${32}m${str}\x1b[${89}m${"\x1b[0m"}`;

/** @type {Set<number>} */
let set1 = new Set([1, 1, 1, 10, 10, 10]);
console.log(set1);
set1.add(2);
set1.delete(1);
console.log(set1.has(1), "--- should print false");

for (let element of set1) {
  console.log(element);
}

for (let element of set1.entries()) {
  console.log(toInfo("entry of set"), element);
}

for (let element of set1.keys()) {
  console.log(toInfo("key of set"), element);
}

for (let element of set1.values()) {
  console.log(toInfo("value of set"), element);
}

set1.clear();

// JS weak set, objects only in a collection 
let a = { a: 1 };
let b = { b: 2 };

/** @type {WeakSet<object>} */
let set2 = new WeakSet([a, b, b]);

console.log(set2);
console.log(set2.has(b), "--- should print true");

set2.add(a);

set2.delete(b);

console.log(set2.has(b), "--- should print false");
