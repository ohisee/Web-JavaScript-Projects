/**
 * @fileoverview JS selection sort 
 */

/**
 * time complexity O(n^2) 
 * space complexity O(1) 
 * @param {number[]} arr 
 */
function selectionSort(arr) {
  for (let i = 0; i < arr.length; i++) {
    let minIndex = i;
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minIndex]) {
        minIndex = j;
      }
    }
    if (minIndex !== i) {
      let lesser = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

module.exports = {
  selectionSort,
};
