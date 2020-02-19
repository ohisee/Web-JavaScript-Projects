/**
 * @fileoverview multiple pointers
 */

export function sumZero(sortedarr: number[]): [number, number] | undefined {
  let left = 0;
  let right = sortedarr.length - 1;
  while (left < right) {
    let sum = sortedarr[left] + sortedarr[right];
    if (sum === 0) {
      return [sortedarr[left], sortedarr[right]];
    } else if (sum > 0) {
      right--;
    } else {
      left++;
    }
  }
}

// console.log(sumZero([-4, -3, -2, -1, 0, 1, 2, 3, 4, 5]));

export function countUniqueValuesInSortedArrayByAltering(sortedarr: number[]) {
  if (sortedarr.length === 0) {
    return 0;
  }
  let i = 0;
  let j = 1;
  while (j < sortedarr.length) {
    if (sortedarr[i] === sortedarr[j]) {
      j++;
    } else {
      i++;
      sortedarr[i] = sortedarr[j];
    }
  }
  return i + 1;
}

// console.log(countUniqueValuesInSortedArrayByAltering([-3, -2, -1, 0, 1, 2, 3, 4, 5]));

/**
 * Are there duplicates
 * @param args 
 */
export function areThereDuplicates(...args: number[] | string[]): boolean {
  if (args.length === 0) {
    return false;
  }
  let sortedarr = args.sort();
  let i = 0;
  let j = 1;
  while (j < sortedarr.length) {
    if (sortedarr[i] === sortedarr[j]) {
      return true;
    }
    i++;
    j++;
  }
  return false;
}

/**
 * Multiple pointers, time complexity O(n), space complexity O(1)
 * @param sortedarr 
 * @param average 
 */
export function averagePair(sortedarr: number[], average: number): boolean {
  if (sortedarr.length === 0) {
    return false;
  }
  let i = 0;
  let j = sortedarr.length - 1;
  while (i <= j) {
    let avg = (sortedarr[i] + sortedarr[j]) / 2;
    if (avg > average) {
      j--;
    } else if (avg < average) {
      i++;
    } else { // avg === average
      return true;
    }
  }
  return false;
}

/**
 * Multiple pointers, time complexity O(n+m), space complexity O(1)
 * @param str1 
 * @param str2 
 */
export function isSubsequence(str1: string, str2: string): boolean {
  if (str1.length === 0 || str2.length === 0) {
    return false;
  }
  let i = 0;
  let j = 0;
  while (i < str1.length && j < str2.length) {
    if (str1[i] === str2[j]) {
      i++;
    }
    j++;
    if (i === str1.length) {
      return true;
    }
  }
  return false;
}
