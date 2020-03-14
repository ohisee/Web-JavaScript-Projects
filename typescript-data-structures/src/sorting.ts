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
    for (let j = i + 1; j < arr.length; j++) {
      if (arr[j] < arr[minLoc]) {
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

export function insertionSortUsingSwap(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    // insert from right to left of the array
    for (let j = i; j > 0; j--) {
      if (arr[j] < arr[j - 1]) {
        let t = arr[j - 1];
        arr[j - 1] = arr[j];
        arr[j] = t;
      }
    }
  }
  return arr;
}

export function insertionSort(arr: number[]): number[] {
  for (let i = 1; i < arr.length; i++) {
    let currentVal = arr[i];
    // set greater than current value in jth position
    let j = i;
    while (j > 0 && arr[j - 1] > currentVal) {
      arr[j] = arr[j - 1];
      j--;
    }
    arr[j] = currentVal;
  }
  return arr;
}

export function merge(arr1: number[], arr2: number[]): number[] {
  let result: number[] = [];
  let i = 0;
  let j = 0;
  while (i < arr1.length && j < arr2.length) {
    if (arr1[i] < arr2[j]) {
      result.push(arr1[i]);
      i++;
    } else {
      result.push(arr2[j]);
      j++;
    }
  }
  // if (i === arr1.length && j < arr2.length) {
  //   result.push(...arr2.slice(j));
  // }
  // if (j === arr2.length && i < arr1.length) {
  //   result.push(...arr1.slice(i));
  // }
  while (i < arr1.length) {
    result.push(arr1[i]);
    i++;
  }
  while (j < arr2.length) {
    result.push(arr2[j]);
    j++;
  }
  return result;
}

export function mergeSort(arr: number[]): number[] {
  if (arr.length <= 1) {
    return arr;
  }
  let mid = Math.floor(arr.length / 2);
  let leftHalf = mergeSort(arr.slice(0, mid));
  let rightHalf = mergeSort(arr.slice(mid));
  return ([] as number[]).concat(merge(leftHalf, rightHalf));
}
