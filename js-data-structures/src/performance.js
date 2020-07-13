/**
 * @fileoverview check out performance
 * 
 */
const { performance } = require("perf_hooks");
const { bubblesort } = require("./sorting/bubblesort");
const { selectionSort } = require("./sorting/selectionsort");
const { mergeSort } = require("./sorting/mergesort");

const RECORDS = 10000;
const MERGE_RECORDS = 20000;

/**
 * @param {number} limit 
 */
function gen(limit) {
  const result = [];
  for (let i = 0; i < limit; i++) {
    result.push(Math.floor(Math.random() * 100) + (-100));
  }
  return result;
}

let t1 = performance.now();
bubblesort(gen(RECORDS));
let t2 = performance.now();
console.log(`Time Elapsed after sorting ${RECORDS} elements: ${(t2 - t1) / 1000} seconds`);

let t11 = performance.now();
selectionSort(gen(RECORDS));
let t22 = performance.now();
console.log(`Time Elapsed after sorting ${RECORDS} elements: ${(t22 - t11) / 1000} seconds`);

let t111 = performance.now();
mergeSort(gen(MERGE_RECORDS));
let t222 = performance.now();
console.log(`Time Elapsed after sorting ${MERGE_RECORDS} elements: ${(t222 - t111) / 1000} seconds`);
