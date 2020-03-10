/**
 * @fileoverview sort
 */
[10, 2, 15, 9, 3, 11].sort((num1, num2) => { return num1 - num2; });

export function bubbleSort(arr: number[]): number[] {
  let noSwaps;
  for (let i = arr.length; i >= 0; i--) {
    noSwaps = true;
    for (let j = 0; j < i - 1; j++) {
      if (arr[j] > arr[j + 1]) {
        let temp = arr[j];
        arr[j] = arr[j + 1];
        arr[j + 1] = temp;
        noSwaps = false;
      }
    }
    if (noSwaps) {
      break;
    }
  }
  return arr;
}

export function selectionSort(arr: number[]): number[] {
  for (let i = 0; i < arr.length; i++) {
    let minLoc = i;
    let min = arr[i];
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < min) {
        min = arr[j];
        minLoc = j;
      }
    }
    if (minLoc != i) {
      let t = arr[minLoc];
      arr[minLoc] = arr[i];
      arr[i] = t;
    }
  }
  return arr;
}
