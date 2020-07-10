/**
 * @fileoverview merge sort implementation
 */

/**
 * @param {number[]} arr 
 */
function mergeSort(arr) {
  if (arr.length === 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftHalf = mergeSort(arr.slice(0, mid));
  let rightHalf = mergeSort(arr.slice(mid));
  return merge(leftHalf, rightHalf);
}

/**
 * @param {number[]} left 
 * @param {number[]} right 
 */
function merge(left, right) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < left.length && j < right.length) {
    if (left[i] < right[j]) {
      result.push(left[i]);
      i++;
    } else {
      result.push(right[j]);
      j++;
    }
  }
  while (i < left.length) {
    result.push(left[i]);
    i++;
  }
  while (j < right.length) {
    result.push(right[j]);
    j++;
  }
  return result;
}

/**
 * @param {number[]} left 
 * @param {number[]} right 
 */
function mergeUsingArrayShift(left, right) {
  const result = [];
  while (left.length && right.length) {
    if (left[0] < right[0]) {
      result.push(left.shift());
    } else {
      result.push(right.shift());
    }
  }
  // if (left.length) {
  //   result.push(...left);
  // }
  // if (right.length) {
  //   result.push(...right);
  // }
  // return result;
  return [...result, ...left, ...right];
}

module.exports = {
  merge,
  mergeUsingArrayShift,
  mergeSort
};
