/**
 * @fileoverview merge arrays 
 */

/**
 * merge two arrays using JavaScript 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 */
function mergeArrays(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
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
    i++
  }

  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }

  return result;
}

/**
 * merge two arrays using JavaScript 
 * @param {number[]} arr1 
 * @param {number[]} arr2 
 */
function mergeArrays2(arr1, arr2) {
  const result = [];
  let i = 0;
  let j = 0;
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
  mergeArrays,
  mergeArrays2
};
