/**
 * @fileoverview check out performance
 * 
 */
const { performance } = require("perf_hooks");
const { bubblesort } = require("./sorting/bubblesort");

const RECORDS = 10000;

function gen() {
  const result = [];
  for (let i = 0; i < RECORDS; i++) {
    result.push(Math.floor(Math.random() * 100) + (-100));
  }
  return result;
}

let t1 = performance.now();
bubblesort(gen());
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);
