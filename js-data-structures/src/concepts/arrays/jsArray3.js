/**
 * @fileoverview JavaScript array
 *
 */

/**
 * @param {any[]} arr 
 */
function flattenArray(arr) {
  let result = [];
  for (let el of arr) {
    if (Array.isArray(el)) {
      result = result.concat(flattenArray(el));
    } else {
      result.push(el);
    }
  }
  return result;
}

/**
 * @param {any[]} arr 
 */
function flattenArrayUsingArrayReduce(arr) {
  return arr.reduce(
    (accumulator, el) => accumulator.concat(Array.isArray(el) ? flattenArrayUsingArrayReduce(el) : el),
    []);
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

console.log(
  flattenArray([[[[1]]], [2], [3, [4, [[5], [[6]]]]]]),
  "--- should print [ 1, 2, 3, 4, 5, 6 ]");

console.log(
  flattenArray([[[[[[[[[[[[[[[[[[[[[[[[[[1]]]]]]]]]]]]]]]]]]]]]]]]]]),
  "--- should print [ 1 ]");

console.log(
  flattenArrayUsingArrayReduce([[[[1, 2]]], [3], [4, [5, [[6], [[7]]]]]]),
  "--- should print [ 1, 2, 3, 4, 5, 6, 7 ]");

console.log(
  flattenArray([[[[[[[[[[[[[[[[[[[[[[[[[[1]]]]]]]]]]]]]]]]]]]]]]]]]])
    .simpleCompare([1]));

console.log(
  flattenArray([[[[1]]], [2], [3, [4, [[5], [[6]]]]]])
    .simpleCompare([1, 2, 3, 4, 5, 6]));

console.log(
  flattenArrayUsingArrayReduce([[[[1, 2]]], [3], [4, [5, [[6], [[7]]]]]])
    .simpleCompare([1, 2, 3, 4, 5, 6, 7]));

console.log(
  flattenArrayUsingArrayReduce([[[[1, 2]]], [3], [4, [5, [[6], [[7]]]]]])
    .simpleCompare([1, 2, 3, 4, 5, 6, 7]));
