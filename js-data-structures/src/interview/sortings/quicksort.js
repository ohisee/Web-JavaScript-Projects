/**
 * @fileoverview JS quick sort  
 */

/**
 * pick a pivot point i.e. at right-most index, and then traverse the array 
 * @param {number[]} arr one array of numbers 
 * @param {number} start start index 
 * @param {number} last last index 
 * @returns {number} index at pivot 
 */
function partitionByPivot(arr, start, last) {
  let pivot = arr[last];
  // initially, set swapIndex to before start index i.e. -1 position 
  // this swapIndex is used to point at the element that is greater than pivot 
  let swapIndex = start - 1;
  for (let i = start; i < last; i++) {
    if (arr[i] < pivot) {
      swapIndex += 1;
      let lesser = arr[i];
      arr[i] = arr[swapIndex];
      arr[swapIndex] = lesser;
    }
  }
  // for example, [20, 11, 5, 7, 6, 9, 8] 
  // before [20, 11, 5, 7, 6, 9, 8] 
  // after  [5, 7, 6, 11, 20, 9, 8] 
  // arr[swapIndex] is at element 6, 
  // so need to increment swapIndex to next position to element 11 by adding 1 
  // and then swap with pivot at last index position 
  arr[last] = arr[swapIndex + 1];
  arr[swapIndex + 1] = pivot;
  // result should be [5, 7, 6, 8, 20, 9, 11]
  return (swapIndex + 1);
}

/**
 * best and average time complexity O(n log n) 
 * worst case time complexity O(n^2)   
 * space complexity O(log n) 
 * @param {number[]} arr one array of numbers 
 * @param {number} start start index of array 
 * @param {number} last last index of array 
 */
function quickSort(arr, start, last) {
  if (start < last) {
    let pivotIndex = partitionByPivot(arr, start, last);
    quickSort(arr, start, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, last);
  }
  return arr;
}

module.exports = {
  partitionByPivot,
  quickSort,
};
