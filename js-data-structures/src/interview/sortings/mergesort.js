/**
 * @fileoverview JS merge sort 
 */

/**
 * average time complexity O(n log n)
 * space complexity O(n) 
 * @param {number[]} arr 
 */
function mergeSort(arr) {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftHalf = mergeSort(arr.slice(0, mid));
  let rightHalf = mergeSort(arr.slice(mid));
  return merge(leftHalf, rightHalf);
}

/**
 * merge two arrays of numbers 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 */
function merge(arr1, arr2) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

/**
 * merge two arrays of numbers 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 */
function merge2(arr1, arr2) {
  let i = 0;
  let j = 0;
  const result = [];
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  return [...result, ...arr1.slice(i), ...arr2.slice(j)];
}

module.exports = {
  merge,
  merge2,
  mergeSort,
};
