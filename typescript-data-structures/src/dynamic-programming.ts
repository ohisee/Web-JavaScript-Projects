/**
 * @fileoverview dynamic porgramming performance check
 */
import { performance } from "perf_hooks";
import { fibMemoization, fib } from "./recurs";

let t1 = performance.now();
fib(35);
let t2 = performance.now();
console.log(`Time Elapsed: ${(t2 - t1) / 1000} seconds`);

let t11 = performance.now();
fibMemoization(700);
let t22 = performance.now();
console.log(`Time Elapsed: ${(t22 - t11) / 1000} seconds`);
