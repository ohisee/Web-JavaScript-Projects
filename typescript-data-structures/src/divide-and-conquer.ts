/**
 * @fileoverview Divide and conquer
 */

/**
 * Divide and conquer in binary search
 * @param arr 
 * @param val 
 */
function search(sortedarr: number[], val: number) {
  let min = 0;
  let max = sortedarr.length - 1;

  while (min <= max) {
    let middle = Math.floor((min + max) / 2);

    if (sortedarr[middle] < val) {
      min = middle + 1;
    } else if (sortedarr[middle] > val) {
      max = middle - 1;
    } else {
      return middle;
    }
  }
  return - 1;
}
