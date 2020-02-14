/**
 * @fileoverview app
 */
import { performance } from "perf_hooks";

function addUpTo(n: number) {
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total += i;
  }
  return total;
}

let t1 = performance.now();
addUpTo(10000000000);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

/**
 * Using a formula
 */
function addUpToFormula(n: number) {
  return n * (n + 1) / 2;
}

let t11 = performance.now();
addUpToFormula(10000000000);
let t22 = performance.now();
console.log(`Time Elapsed: ${(t22 - t11) / 1000} seconds`);
