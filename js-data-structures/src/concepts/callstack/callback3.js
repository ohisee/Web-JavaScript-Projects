/**
 * @fileoverview call back testing
 */

setTimeout(() => { console.log("1", "after 2"); }, 0);

Promise.resolve("resolved").then(() => console.log("2", "Promise after 3"));

console.log("3", "this is printed at very first");
