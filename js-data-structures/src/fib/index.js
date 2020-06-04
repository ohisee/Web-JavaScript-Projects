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

module.exports = {
  fib,
  fibRecursion,
  fibUsingMap
};
