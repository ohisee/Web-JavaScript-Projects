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
