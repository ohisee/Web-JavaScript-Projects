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

/**
 * Pick the first element as pivot
 * @param arr 
 * @param start 
 * @param end default is array's length - 1, at first iteration, will include all elements of entire array, 
 * and the following iteration will include element at last position, i <= end
 */
export function pivot(arr: number[], start: number = 0, end: number = arr.length - 1): number {
  let pivot = arr[start];
  let swapIndex = start;
  for (let i = start + 1; i <= end; i++) {
    if (pivot > arr[i]) {
      swapIndex++;
      let t = arr[swapIndex];
      arr[swapIndex] = arr[i];
      arr[i] = t;
    }
  }
  arr[start] = arr[swapIndex];
  arr[swapIndex] = pivot;
  return swapIndex;
}

export function quickSort(arr: number[], left: number = 0, right: number = arr.length - 1) {
  if (left < right) {
    let pivotIndex = pivot(arr, left, right);
    quickSort(arr, left, pivotIndex - 1);
    quickSort(arr, pivotIndex + 1, right);
  }
  return arr;
}

export function getDigit(num: number, place: number): number {
  let base = 10;
  let p = Math.pow(base, place);
  let i = p * base;
  let j = Math.abs(num) % i;
  let result = Math.floor(j / p);
  return result;
}

export function digitCount(num: number): number {
  let counter = 1;
  let j = Math.floor(Math.abs(num) / 10);
  while (j > 0) {
    j = Math.floor(j / 10);
    counter++;
  }
  return counter;
  // if (num === 0) {
  //   return 1;
  // }
  // return Math.floor(Math.log10(Math.abs(num))) + 1;
}

export function mostDigits(arr: number[]): number {
  let maxDigits = 0;
  for (let i of arr) {
    maxDigits = Math.max(maxDigits, digitCount(i));
  }
  return maxDigits;
}
