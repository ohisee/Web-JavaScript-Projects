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
 * @param {number[]} num 
 * @returns {number} max gain  
 */
function rob(num) {
  if (num.length === 0) {
    return 0;
  }
  if (num.length === 1) {
    return num[0];
  }
  if (num.length === 2) {
    return Math.max(num[0], num[1]);
  }
  let cache = [num[0], Math.max(num[0], num[1])];
  for (let i = 2; i < num.length; i++) {
    cache[i] = Math.max(cache[i - 2] + num[i], cache[i - 1]);
  }
  return cache[num.length - 1];
}

let gains = [2, 7, 9, 3, 1];
console.log("Max gain is", rob(gains), "--- should print 12");

gains = [6, 100, 1, 7, 8];
console.log("Max gain is", rob(gains), "--- should print 108");
