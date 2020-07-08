/**
 * @fileoverview bubble sort implementation
 */

/**
 * @param {number[]} arr 
 */
function bubblesort(arr) {
  for (let i = 0; i < arr.length; i++) {
    for (let j = 0; j < (arr.length - i - 1); j++) {
      if (arr[j] > arr[j + 1]) {
        let greater = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = greater;
      }
    }
  }
  return arr;
}

module.exports = {
  bubblesort
};
