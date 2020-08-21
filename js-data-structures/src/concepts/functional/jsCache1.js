/**
 * @fileoverview JavaScript functional programming
 * 
 * memoization
 */
const { toWarningLog } = require("../playground/utilities");

function addTo80(num) {
  console.log(toWarningLog("time consuming operation"));
  return num + 80;
}

addTo80(10);
addTo80(10);
addTo80(10);

// use memoization
function memoizedAddTo80() {
  const cache = {}; // avoid global scope
  return function (num) {
    if (num in cache) {
      return cache[num];
    } else {
      console.log("time consuming operation", "--- should be called only once");
      cache[num] = num + 80;
      return cache[num];
    }
  }
}

const memoized = memoizedAddTo80();
console.log("1", memoized(5));
console.log("2", memoized(5));
console.log("3", memoized(5));
