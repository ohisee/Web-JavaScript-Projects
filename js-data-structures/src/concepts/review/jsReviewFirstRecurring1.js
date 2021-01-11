/**
 * @fileoverview JavaScript first recurring
 *
 */

/**
 * frequency counter, O(n) time complexity, O(n) space complexity 
 * @param {number[]} arr 
 */
function firstRecurring(arr) {
  const counter = {};
  for (let item of arr) {
    // check not equal to undefined to avoid type coercion when item is zero
    if (counter[item] === undefined) {
      counter[item] = item;
    } else {
      return item;
    }
  }
  return undefined;
}

const arr1 = [2, 5, 1, 2, 3, 5, 1, 2, 10];
console.log(firstRecurring(arr1), "--- should return 2");

const arr2 = [2, 1, 1, 2, 3, 5, 1, 2, 11];
console.log(firstRecurring(arr2), "--- should return 1");

const arr3 = [2, 3, 4, 5, 6, 7];
console.log(firstRecurring(arr3), "--- should return undefined");

/**
 * O(n * n) time complexity, O(n) space complexity 
 * @param {number[]} arr 
 */
function firstRecurringUsingTwoLoops(arr) {
  for (let i = 1; i < arr.length; i++) { // for iterating through the list starting at 1
    for (let start = 0; start < i; start++) { // start by comparing 0th item with item of first for loop
      if (arr[start] === arr[i]) {
        return arr[i]; // found the first recurring item 
      }
    }
  }
  return undefined;
}

const ar1 = [2, 1, 1, 2, 3, 5, 1, 2, 4];
console.log(firstRecurringUsingTwoLoops(ar1), "--- should return 1");

const ar2 = [2, 5, 1, 2, 3, 5, 1, 2, 10];
console.log(firstRecurringUsingTwoLoops(ar2), "--- should return 2");

const ar3 = [1, 2, 3, 3, 1, 2, 10];
console.log(firstRecurringUsingTwoLoops(ar3), "--- should return 3");

console.log(
  firstRecurringUsingTwoLoops([1, 2, 3]),
  "--- should return undefined");

console.log(
  firstRecurringUsingTwoLoops([1, 2, 2, 1, 10]),
  "--- should return 2");

console.log(
  firstRecurringUsingTwoLoops([10, 2, 3, 7, 10]),
  "--- should return 10");

console.log(
  firstRecurringUsingTwoLoops([1, 2, 3, 7, 7, 10]),
  "--- should return 7");

console.log(
  firstRecurringUsingTwoLoops([1, 2, 3, 7, 6, 7, 1, 10]),
  "--- should return 7");

console.log(
  firstRecurring([2, 1, 1, 2, 3, 5, 1, 2, 4]) ===
  firstRecurringUsingTwoLoops([2, 1, 1, 2, 3, 5, 1, 2, 4]));

console.log(
  firstRecurring([1, 2, 3, 7, 6, 7, 1, 10]) ===
  firstRecurringUsingTwoLoops([1, 2, 3, 7, 6, 7, 1, 10]));

console.log(
  firstRecurring([1, 2, 3, 7, 6, 7, 1, 10]) ===
  firstRecurringUsingTwoLoops([1, 2, 3, 7, 6, 7, 1, 10]));
