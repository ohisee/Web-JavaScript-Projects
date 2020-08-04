/**
 * @fileoverview JavaScript types - primitive types
 * number
 * string
 * boolean
 * undefined
 * null
 * Symbol
 * object
 */

// Primitive
console.log(typeof 100);
console.log(typeof "hello world");
console.log(typeof true);
console.log(typeof undefined);
console.log(typeof null);
console.log(typeof Symbol("symbol"));

// Non-Pimitive
console.log(typeof {});
console.log(typeof []);
console.log(typeof function () { });

// Array [] and function are Object
function abc() {
  return 100;
}

abc.hi = "hahaha";

console.log(abc);
console.log(abc.hi);

console.log(Boolean(true).toString());
console.log(Array.isArray([]));
