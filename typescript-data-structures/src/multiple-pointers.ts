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

