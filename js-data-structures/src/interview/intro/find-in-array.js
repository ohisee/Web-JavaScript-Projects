/**
 * @fileoverview find one element in an array 
 */

const large = new Array(1000).fill("nemo");

/**
 * @param {string[]} arr 
 */
function findNemo(arr) {
  console.time("find");
  for (let i = 0; i < arr.length; i++) {
    if (arr[i] === "nemo") {
      console.log("found nemo");
      break;
    }
  }
  console.timeEnd("find");
}

findNemo(large);


/**
 * @param {number} num 
 */
function fib(num) {
  const result = [0, 1];
  for (let i = 2; i < num; i++) {
    result[i] = result[i - 1] + result[i - 2];
  }
  return result;
}

console.log(fib(100));


/**
 * @param {number[]} nums 
 * @param {number} sum 
 */
function findPairWithSum(nums, sum) {
  const lm = {};
  for (let n of nums) {
    let other = lm[n]
    if (other) {
      return [n, other];
    }
    lm[sum - n] = n;
  }
  return null;
}

const arr = [1, 2, 3, 5];
const sum = 8;
console.log(findPairWithSum(arr, sum));
console.log(findPairWithSum([1, 2, 3, 4, 2, 6], sum));


/**
 * @param {number[]} nums 
 * @param {number} sum 
 */
function hasPair(nums, sum) {
  const lookSet = new Set();
  for (let n of nums) {
    if (lookSet.has(n)) {
      return true;
    }
    lookSet.add(sum - n);
  }
  return false;
}

console.log(hasPair(arr, sum));
console.log(hasPair([1, 2, 3, 4, 2, 6], sum));
console.log(hasPair([1, 2, 3, 4, 2, 6], 17));


/**
 * @param {string[]} arr1 
 * @param {string[]} arr2 
 */
function moreReadable(arr1, arr2) {
  return arr1.some(item => arr2.includes(item));
}
