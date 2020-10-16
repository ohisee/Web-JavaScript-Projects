/**
 * @fileoverview JS first recurring character 
 */

/**
 * @param {number[]} arr 
 */
function firstRecurringChar(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }
  /** @type {{[key: number]: number}} */
  const lookup = {};
  for (let i = 0; i < arr.length; i++) {
    if (lookup[arr[i]] !== undefined) { // avoid 0 in input array 
      return arr[i];
    }
    lookup[arr[i]] = arr[i];
  }
  return undefined;
}

/**
 * O(n * n) time complexity, O(n) space complexity 
 * @param {number[]} arr 
 */
function firstRecurringUsingTwoLoops(arr) {
  if (!arr || arr.length === 0) {
    return undefined;
  }
  // for iterating through the list starting at 1st index position 
  for (let i = 1; i < arr.length; i++) {
    // start by comparing 0th item with item of first for loop
    for (let start = 0; start < i; start++) {
      if (arr[start] === arr[i]) {
        return arr[i]; // found the first recurring item 
      }
    }
  }
  return undefined;
}

module.exports = {
  firstRecurringChar,
  firstRecurringUsingTwoLoops,
};
