/**
 * @fileoverview call back testing
 */

setTimeout(() => { console.log("1", "after 3"); }, 0);

setTimeout(() => { console.log("2", "after 1"); }, 10);

console.log("3", "this is printed at very first");
