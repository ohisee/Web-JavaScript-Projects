/**
 * @fileoverview JavaScript review
 *
 */

/**
 * merge two sorted arrays, using index to access arrays
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 */
function mergeArrays(nums1, nums2) {
  const result = [];
  let i = 0;
  let j = 0;
  // remember to have an index for the result array when using an index 
  // to access result array, or else remember to use array.push
  let index = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      result[index] = nums1[i];
      i += 1;
    } else {
      result[index] = nums2[j];
      j += 1;
    }
    index += 1;
  }
  while (i < nums1.length) {
    result[index] = nums1[i];
    i += 1;
    index += 1;
  }
  while (j < nums2.length) {
    result[index] = nums2[j];
    j += 1;
    index += 1;
  }
  return result;
}

/**
 * merge two sorted arrays
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 */
function mergeArrays2(nums1, nums2) {
  const result = [];
  let i = 0;
  let j = 0;
  while (i < nums1.length && j < nums2.length) {
    if (nums1[i] < nums2[j]) {
      result.push(nums1[i]);
      i += 1;
    } else {
      result.push(nums2[j]);
      j += 1;
    }
  }
  if (i < nums1.length) {
    result.push(...nums1.slice(i));
  }
  if (j < nums2.length) {
    result.push(...nums2.slice(j));
  }
  return result;
}

/**
 * merge two sorted arrays 
 * @param {number[]} nums1 
 * @param {number[]} nums2 
 */
function mergeArrays3(nums1, nums2) {
  const result = [];
  // not to modify input parameters 
  let i = nums1.slice(0);
  let j = nums2.slice(0);
  while (i.length && j.length) {
    if (i[0] < j[0]) {
      result.push(i.shift());
    } else {
      result.push(j.shift());
    }
  }
  return [...result, ...i, ...j];
}

/**
 * note need to use function, not arrow function 
 * need 'this' to be determined at call time when running the function 
 * @param {any[]} arr 
 */
Array.prototype.simpleCompare = function (arr) {
  if (!(arr instanceof Array) || this.length !== arr.length) {
    return false;
  }
  return this.every((item, index) => item === arr[index]);
}

console.log(mergeArrays([2, 3, 4, 5, 10], [1, 1, 10, 12, 18]));
console.log(mergeArrays2([2, 3, 4, 5, 10], [1, 1, 10, 12, 18]));
console.log(mergeArrays3([2, 3, 4, 5, 10], [1, 1, 10, 12, 18]));
console.log(
  mergeArrays([2, 3, 4, 5, 10], [1, 1, 10, 12, 18]).simpleCompare(
    mergeArrays2([2, 3, 4, 5, 10], [1, 1, 10, 12, 18])));
console.log(
  mergeArrays2([2, 3, 4, 5, 10], [1, 1, 10, 12, 18]).simpleCompare(
    mergeArrays3([2, 3, 4, 5, 10], [1, 1, 10, 12, 18])));
