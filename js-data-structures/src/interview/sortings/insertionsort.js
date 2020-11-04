/**
 * @fileoverview JS insertion sort 
 */

/**
 * best time complexity O(n)
 * average time complexity O(n^2)
 * space complexity O(1) 
 * can be used in case when the list is almost sorted 
 * @param {number[]} arr 
 */
function insertionSort(arr) {
  for (let i = 1; i < arr.length; i++) {
    let newValToCompare = arr[i];
    // if new value is less than value at previous index, its predecessor, 
    // then find its location, else it stays at its current location 
    if (newValToCompare < arr[i - 1]) {
      for (let j = 0; j < i; j++) {
        if (newValToCompare < arr[j]) {
          arr[i] = arr[j];
          arr[j] = newValToCompare;
        }
        newValToCompare = arr[i];
      }
    }
  }
  return arr;
}


/**
 * set the value to be inserted when sorting in a variable and compare 
 * previous index, if value at previous index is greater, set that value of 
 * previous index to jth index and reduce j before reaching zero, when done set 
 * jth index to the new inserted value 
 * @param {number[]} arr 
 */
function insertionSort2(arr) {
  for (let i = 1; i < arr.length; i++) {
    let newValToCompare = arr[i];
    let valCompareIndex = i;
    while (valCompareIndex > 0 && arr[valCompareIndex - 1] > newValToCompare) {
      arr[valCompareIndex] = arr[valCompareIndex - 1];
      valCompareIndex -= 1;
    }
    arr[valCompareIndex] = newValToCompare;
  }
  return arr;
}

module.exports = {
  insertionSort,
  insertionSort2,
};
