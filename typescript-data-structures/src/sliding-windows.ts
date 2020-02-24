/**
 * @fileoverview Sliding window
 */
export function maxSubarraySum(arr: number[], n: number): number | null {
  let maxSum = 0;
  let tempSum = 0;
  if (arr.length < n) {
    return null;
  }
  // window of n numbers
  for (let i = 0; i < n; i++) {
    maxSum += arr[i];
  }
  tempSum = maxSum;
  for (let i = n; i < arr.length; i++) {
    // substract the begining and add next number - moving window
    tempSum = tempSum - arr[i - n] + arr[i];
    maxSum = Math.max(maxSum, tempSum);
  }
  return maxSum;
}

// console.log(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3));

/**
 * Sliding window
 * @param arr 
 * @param windowSize 
 */
export function maxSubarraySumUsingSlidingWindow(arr: number[], windowSize: number): number | null {
  if (arr.length < windowSize) {
    return null;
  }
  let maxSum = 0;
  let tempSum = 0;
  for (let i = 0; i < windowSize; i++) {
    tempSum += arr[i];
  }
  maxSum = tempSum;
  for (let j = windowSize; j < arr.length; j++) {
    tempSum = tempSum + arr[j] - arr[j - windowSize];
    maxSum = Math.max(tempSum, maxSum);
  }
  return maxSum;
}

export function minSubarrayLen(arr: number[], target: number): number {
  if (arr.length === 0) {
    return 0;
  }
  let windowSize = 0;
  let minLen = arr.length;
  let sum = 0;
  let indexCounter = 0;
  for (let i = 0; i < arr.length; i++) {
    sum += arr[i];
    if (sum >= target) {
      windowSize = (i + 1) - indexCounter;
      // console.log(i, arr[i], sum, minLen, windowSize);
      let counter = 0;
      while (sum >= target) {
        // console.log(arr.slice(indexCounter, i + 1));
        sum -= arr[indexCounter];
        indexCounter++;
        counter++;
      }
      windowSize = windowSize - (counter - 1);
      minLen = Math.min(minLen, windowSize);
    }
  }
  return Math.min(minLen, windowSize);
}
