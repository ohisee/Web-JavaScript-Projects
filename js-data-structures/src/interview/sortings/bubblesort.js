/**
 * @fileoverview JS bubble sort 
 */

/**
 * time complexity O(n^2) 
 * space complexity O(1) 
 * @param {number[]} arr 
 * @returns {number[]} sorted 
 */
function bubbleSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < (arr.length - i); j++) {
      if (arr[j - 1] > arr[j]) {
        let greater = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = greater;
      }
    }
  }
  return arr;
}

/**
 * use a noswap variable to check whether to continue sorting 
 * @param {number[]} arr 
 */
function bubbleSortCheckSwap(arr) {
  for (let i = 0; i < arr.length; i++) {
    let noMoreSwap = true;
    for (let j = 1; j < (arr.length - i); j++) {
      if (arr[j - 1] > arr[j]) {
        let greater = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = greater;
        noMoreSwap = false;
      }
    }
    if (noMoreSwap) {
      break;
    }
  }
  return arr;
}

/**
 * @template T
 * @param {T[]} arr 
 * @param {(a:T, b:T) => number} comparator 
 */
function bubbleSortUsingComparator(arr, comparator) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 1; j < (arr.length - i); j++) {
      if (comparator(arr[j - 1], arr[j]) > 0) {
        let greater = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = greater;
      }
    }
  }
  return arr;
}

module.exports = {
  bubbleSort,
  bubbleSortUsingComparator,
  bubbleSortCheckSwap,
};
