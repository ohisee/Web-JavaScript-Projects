/**
 * @fileoverview JavaScript array
 *
 */

// store in sequential order in memory
const strings = ["a", "b", "c", "d", "e"];

console.log(strings.join(""));
console.log(strings.reduce((prev, cur) => prev + cur, "reduced "));
console.log(strings.slice().reverse().join(""));

console.log(strings[1]); // O(1) operation

strings.push("f"); // O(1) operation
console.log(strings);

strings.pop(); // O(1) operation
strings.pop(); // O(1) operation
strings.pop(); // O(1) operation
console.log(strings);

// add to beginning of array
strings.unshift("unshift"); // O(n) operation
console.log(strings, "--- [ 'unshift', 'a', 'b', 'c' ]");

strings.splice(2, 0, "add this string"); // O(n) operation
console.log(strings, "--- [ 'unshift', 'a', 'add this string', 'b', 'c' ]");
