/**
 * @fileoverview fibonacci
 * print fibonacci series is an ordering of numbers where 
 * each number is the sum of the preceeding two
 * fibonaccis series of 10 is [0, 1, 1, 2, 3, 5, 8, 13, 21, 34]
 */

/**
 * O(n) run time
 */
function fib(num) {
  const result = [0, 1];
  for (let i = 2; i <= num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result[result.length - 1];
}

/**
 * O(2^n) exponential time
 */
function fibRecursion(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return fibRecursion(num - 2) + fibRecursion(num - 1);
}

function fibUsingMap(num) {
  const memo = { 0: 0, 1: 1 };
  if (num === 0 || num === 1) {
    return num;
  }
  for (let i = 2; i <= num; i++) {
    memo[i] = memo[i - 2] + memo[i - 1];
  }
  return memo[num];
}

/**
 * Memoization, need to call the returned function inside fn
 */
function memoize(fn) {
  const cache = {};
  return function (...args) {
    if (cache[args]) {
      return cache[args];
    }
    const result = fn.apply(this, args);
    cache[args] = result;
    return result;
  };
}

/**
 * To make memoization work, need to call 'fibMemoization' inside 
 * this fibRecur function
 */
function fibRecur(num) {
  if (num === 0) {
    return 0;
  }
  if (num === 1) {
    return 1;
  }
  return fibMemoization(num - 2) + fibMemoization(num - 1);
}

const fibMemoization = memoize(fibRecur);

/**
 * Fast memoization
 */
function fibUsingMemoization(num, cache = { 0: 0, 1: 1 }) {
  if (num < 2) {
    return num;
  }
  if (cache[num]) {
    return cache[num];
  }
  const result = fibUsingMemoization(num - 1, cache) + fibUsingMemoization(num - 2, cache);
  cache[num] = result;
  return result;
}

module.exports = {
  fib,
  fibRecursion,
  fibUsingMap,
  fibMemoization,
  fibUsingMemoization
};
