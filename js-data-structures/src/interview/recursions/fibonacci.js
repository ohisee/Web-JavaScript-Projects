/**
 * @fileoverview JS fibonacci sequence 
 * 
 * take a look into ECMAScript tail call optimization 
 * 
 */

/**
 * O(n)
 * @param {number} n index value of fibonacci sequence 
 */
function fibonacciIterative(n) {
  const result = [0, 1];
  for (let i = 2; i <= n; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result[n];
}

/**
 * O(2^n) exponential time 
 * @param {number} n index value of fibonacci sequence 
 */
function fibonacciRecursive(n) {
  if (n <= 1) {
    return n;
  }
  return fibonacciRecursive(n - 1) + fibonacciRecursive(n - 2);
}

module.exports = {
  fibonacciIterative,
  fibonacciRecursive,
};
