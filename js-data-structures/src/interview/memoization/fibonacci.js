/**
 * @fileoverview JS dynamic programming using memoization 
 */

/**
 * @function toInfo 
 * @param {string} str 
 */
const toInfo = (str) => `\x1b[${32}m${str}\x1b[${89}m${"\x1b[0m"}`;

let calculations = 0;
function fibonacci(num) { // O(2^n) time complexity 
  calculations++;
  if (num <= 1) {
    return num;
  }
  return fibonacci(num - 1) + fibonacci(num - 2);
}

console.log(
  toInfo("Fibonacci of 7 is"),
  fibonacci(7),
  toInfo("Number of calculations"), calculations);

calculations = 0; // need to reset calculations back to zero 

console.log(
  toInfo("Fibonacci of 12 is"),
  fibonacci(12),
  toInfo("Number of calculations"), calculations);

calculations = 0; // need to reset calculations back to zero 

console.log(
  toInfo("Fibonacci of 30 is"),
  fibonacci(30),
  toInfo("Number of calculations"), calculations);

/**
 * dynamic programming using memoization to cache the result of a subproblem 
 * that is resolved 
 * O(n) time complexity 
 */
function fibonacciMemoized() {
  let cache = {}; // add space memory complexity 
  return function fib(num) {
    counter++;
    if (num in cache) {
      return cache[num];
    } else {
      if (num <= 1) {
        return num;
      }
      cache[num] = fib(num - 1) + fib(num - 2);
      return cache[num];
    }
  }
}

let counter = 0; // should be picked by during hoisting 
const memoizedFib = fibonacciMemoized();

console.log(
  toInfo("Fibonacci of 7 is"),
  memoizedFib(7), toInfo("Number of calculations"), counter);

counter = 0; // need to reset calculations back to zero 
console.log(
  toInfo("Fibonacci of 12 is"),
  memoizedFib(12),
  toInfo("Number of calculations"), counter);

counter = 0; // need to reset calculations back to zero 
console.log(
  toInfo("Fibonacci of 30 is"),
  memoizedFib(30),
  toInfo("Number of calculations"), counter);

// dynamic programming bottom-up approach 

/**
 * this is bottom-up approach, time complexity is O(n)
 * @param {number} num index value of fibonacci sequence 
 */
function fibonacciIterative(num) {
  const result = [0, 1]; // from bottom to higher toward more complex 
  for (let i = 2; i <= num; i++) {
    result.push(result[i - 1] + result[i - 2]);
  }
  return result.pop();
}

console.log(toInfo("Fibonacci of 7 is"), fibonacciIterative(7));
console.log(toInfo("Fibonacci of 12 is"), fibonacciIterative(12));
console.log(toInfo("Fibonacci of 30 is"), fibonacciIterative(30));
