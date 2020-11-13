/**
 * @fileoverview JS dynamic programming using memoization i.e. cache 
 */

/**
 * no cache 
 */
function addTo80(n) {
  console.log("long time");
  return n + 80;
}

let cache = {}; // tied to global scope 
function memoizedAddTo80(n) {
  if (n in cache) {
    return cache[n];
  } else {
    console.log("long time");
    cache[n] = n + 80;
    return cache[n];
  }
}

console.log("1", memoizedAddTo80(5));
console.log("2", memoizedAddTo80(5));

/**
 * use JavaScript closure pattern to bring cache inside the function 
 */
function memoizedAddTo80Closure() {
  let cache = {}
  return function (n) {
    if (n in cache) {
      return cache[n];
    } else {
      console.log("long time");
      cache[n] = n + 80;
      return cache[n];
    }
  }
}

const memoized = memoizedAddTo80Closure();
console.log("1", memoized(16));
console.log("2", memoized(16));


/**
 * given an array of integers that are all greater or equal to zero, find max 
 * sum of numbers that are not adjacent to each other 
 * @param {number[]} arr non-negative array of integers 
 * @returns {number} max gain  
 */
function rob(arr) {
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    return arr[0];
  }
  // if (arr.length === 2) {
  //   return Math.max(arr[0], arr[1]);
  // }
  let cache = [arr[0], Math.max(arr[0], arr[1])];
  for (let i = 2; i < arr.length; i++) {
    cache[i] = Math.max(cache[i - 2] + arr[i], cache[i - 1]);
  }
  return cache[arr.length - 1];
}

let gains = [2, 7, 9, 3, 1];
console.log("Max gain is", rob(gains), "--- should print 12");

gains = [6, 100, 1, 7, 8];
console.log("Max gain is", rob(gains), "--- should print 108");

/**
 * a different approach 
 * @param {number[]} arr non-negative array of integers 
 * @returns {number} max gain 
 */
function rob2(arr) {
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    return arr[0];
  }
  let prevSum1 = arr[0];
  let prevSum2 = Math.max(arr[0], arr[1]);
  let maxGain = prevSum2;
  for (let i = 2; i < arr.length; i++) {
    maxGain = Math.max(arr[i] + prevSum1, prevSum2);
    prevSum1 = prevSum2;
    prevSum2 = maxGain;
  }
  return maxGain;
}

gains = [2, 7];
console.log("Max gain [2, 7] is", rob2(gains), "--- should print 7");

gains = [2, 7, 9, 3, 1];
console.log("Max gain [2, 7, 9, 3, 1] is", rob2(gains), "--- should print 12");

gains = [6, 100, 1, 7, 8];
console.log("Max gain [6, 100, 1, 7, 8] is", rob2(gains), "--- should print 108");

/**
 * find max difference of two number that is greater zero 
 * @param {number[]} prices 
 * @returns {number} max profit 
 */
function maxProfit(prices) {
  if (prices.length <= 1) {
    return 0;
  }
  let max = 0;
  let minPrice = prices[0];
  // start at 2nd number at index 1  
  for (let i = 1; i < prices.length; i++) {
    max = Math.max(prices[i] - minPrice, max);
    minPrice = Math.min(prices[i], minPrice);
  }
  return max;
}

let prices = [7, 1, 5, 3, 6, 4];
console.log("Max profit is", maxProfit(prices));

prices = [7, 6, 4, 3, 2, 1];
console.log("Max profit is", maxProfit(prices));

prices = [7, 1];
console.log("Max profit is", maxProfit(prices));

prices = [7, 10];
console.log("Max profit is", maxProfit(prices));

prices = [7, 1, 10, 11, 12, 13, 14, 15, 16];
console.log("Max profit is", maxProfit(prices));

/**
 * either climb 1 or 2 steps, find number of distinct ways to climb to 
 * the top n 
 * @param {number} n non-zero, non-negative 
 * @returns {number} number of distinct ways  
 */
function climbStairs(n) {
  let cache = [1];
  for (let i = 1; i <= n; i++) {
    if (i === 1) {
      cache[i] = cache[i - 1];
    } else {
      cache[i] = cache[i - 1] + cache[i - 2]
    }
  }
  return cache.pop();
}

let steps = 2;
console.log("Ways to climb stairs", climbStairs(steps));

steps = 3;
console.log("Ways to climb stairs", climbStairs(steps));

steps = 4;
console.log("Ways to climb stairs", climbStairs(steps));

steps = 5;
console.log("Ways to climb stairs", climbStairs(steps));

steps = 7;
console.log("Ways to climb stairs", climbStairs(steps));

/**
 * a different approach, using variables to store steps 
 * @param {number} n non-zero, non-negative 
 */
function climbStairs2(n) {
  let prevStep1 = 1;
  let prevStep2 = 0;
  let total = 0;
  for (let i = 1; i <= n; i++) {
    total = prevStep1 + prevStep2;
    prevStep2 = prevStep1;
    prevStep1 = total;
  }
  return total;
}

steps = 1;
console.log("Ways to climb stairs", climbStairs2(steps));

steps = 2;
console.log("Ways to climb stairs", climbStairs2(steps));

steps = 3;
console.log("Ways to climb stairs", climbStairs2(steps));

steps = 4;
console.log("Ways to climb stairs", climbStairs2(steps));

steps = 5;
console.log("Ways to climb stairs", climbStairs2(steps));

steps = 7;
console.log("Ways to climb stairs", climbStairs2(steps));
