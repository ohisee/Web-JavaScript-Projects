/**
 * @fileoverview frequency counter
 */

function same(ar1: number[], ar2: number[]): boolean {
  if (ar1.length !== ar2.length) {
    return false;
  }
  const ar1m: { [key: number]: number } = {};
  for (let i of ar1) {
    ar1m[i * i] = 0;
  }
  for (let i of ar2) {
    ar1m[i] = (ar1m[i] ?? 0) + 1;
  }
  for (let k in ar1m) {
    if (ar1m[k] === 0) {
      return false;
    }
  }
  return true;
}

console.log(same([1, 3, 3], [1, 9, 9]));
console.log(same([1, 2, 3, 6], [4, 1, 9, 36]));
console.log(same([1, 2, 3, 6, 3], [4, 1, 9, 36, 9]));
console.log(same([1, 2, 3], [4, 1]));
console.log(same([1, 2, 3], [4, 4, 1]));
console.log();

function sameAnotherWay(ar1: number[], ar2: number[]): boolean {
  if (ar1.length !== ar2.length) {
    return false;
  }
  const frequencyCounter1: { [key: number]: number } = {};
  const frequencyCounter2: { [key: number]: number } = {};
  for (let i of ar1) {
    frequencyCounter1[i] = (frequencyCounter1[i] ?? 0) + 1;
  }
  for (let j of ar2) {
    frequencyCounter2[j] = (frequencyCounter2[j] ?? 0) + 1;
  }
  for (let key in frequencyCounter1) {
    let k = +key;
    if (!((k ** 2) in frequencyCounter2)) {
      return false;
    }
    if (frequencyCounter2[k ** 2] !== frequencyCounter1[k]) {
      return false;
    }
  }
  return true;
}

console.log(sameAnotherWay([1, 2, 3, 6], [4, 1, 9, 36]));
console.log(sameAnotherWay([1, 2, 3, 6, 3], [4, 1, 9, 36, 9]));
console.log(sameAnotherWay([1, 2, 3], [4, 1]));
console.log(sameAnotherWay([1, 2, 3], [4, 4, 1]));
console.log();

function anagrams(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }
  const str1m: { [key: string]: number } = {};
  for (let c of str1) {
    str1m[c] = 0;
  }
  for (let d of str2) {
    if (str1m[d] === 0) {
      str1m[d] = 1;
    }
  }
  for (let key in str1m) {
    if (str1m[key] === 0) {
      return false;
    }
  }
  return true;
}

console.log(anagrams('listen', 'silent'));
