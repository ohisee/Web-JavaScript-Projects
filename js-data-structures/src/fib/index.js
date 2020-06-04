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
  return result[num];
}

module.exports = {
  fib
};
