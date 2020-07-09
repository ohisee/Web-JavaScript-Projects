/**
 * @fileoverview selection sort implementation
 */

/**
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
    if (i !== minIndex) {
      let lesser = arr[minIndex];
      arr[minIndex] = arr[i];
      arr[i] = lesser;
    }
  }
  return arr;
}

module.exports = {
  selectionSort
};
