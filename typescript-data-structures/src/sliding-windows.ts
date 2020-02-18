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
