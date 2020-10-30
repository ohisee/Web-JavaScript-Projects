/**
 * @fileoverview JS factorial 
 */

/**
 * recursive
 * @param {number} num 
 */
function factorialRecursive(num) {
  if (num === 0) {
    return 1;
  }
  if (num === 1) {
    return 1;
  }
  if (num === 2) {
    return 2;
  }
  return num * factorialRecursive(num - 1);
}

/**
 * iterative 
 * @param {number} num 
 */
function factorialIterative(num) {
  let result = 1;
  for (let i = 1; i <= num; i++) {
    result = result * i;
  }
  return result;
}

module.exports = {
  factorialRecursive,
  factorialIterative,
};
