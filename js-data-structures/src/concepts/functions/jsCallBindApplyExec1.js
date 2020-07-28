/**
 * @fileoverview JavaScript Call, Bind, Apply
 */

const array = [1, 2, 3];

/**
 * @param {number[]} arr 
 */
function getMaxNumber(arr) {
  return Math.max.apply(null, arr);
}

/**
 * @param {number[]} arr 
 */
function getMaxNumberTryCall(arr) {
  return Math.max.call(null, ...arr);
}

console.log(getMaxNumber(array));
console.log(getMaxNumberTryCall(array));
console.log(Math.min(...array));
