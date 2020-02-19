/**
 * @fileoverview frequency counter
 */

export function same(ar1: number[], ar2: number[]): boolean {
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

// console.log(same([1, 3, 3], [1, 9, 9]));
// console.log(same([1, 2, 3, 6], [4, 1, 9, 36]));
// console.log(same([1, 2, 3, 6, 3], [4, 1, 9, 36, 9]));
// console.log(same([1, 2, 3], [4, 1]));
// console.log(same([1, 2, 3], [4, 4, 1]));
// console.log();

export function sameAnotherWay(ar1: number[], ar2: number[]): boolean {
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

// console.log(sameAnotherWay([1, 2, 3, 6], [4, 1, 9, 36]));
// console.log(sameAnotherWay([1, 2, 3, 6, 3], [4, 1, 9, 36, 9]));
// console.log(sameAnotherWay([1, 2, 3], [4, 1]));
// console.log(sameAnotherWay([1, 2, 3], [4, 4, 1]));
// console.log();

export function anagrams(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }
  const str1m: { [key: string]: number } = {};
  const str2m: { [key: string]: number } = {};
  for (let c of str1) {
    str1m[c] = (str1m[c] ?? 0) + 1;
  }
  for (let d of str2) {
    str2m[d] = (str2m[d] ?? 0) + 1;
  }
  for (let key in str1m) {
    if (str1m[key] !== str2m[key]) {
      return false;
    }
  }
  return true;
}

// console.log(anagrams('listen', 'silent'));
// console.log(anagrams('aaz', 'zza')); // false
// console.log(anagrams('anagram', 'nagaram')); // true
// console.log(anagrams('rat', 'car')); // false
// console.log(anagrams('awesome', 'awesom')); // false
// console.log(anagrams('amanaplanacanalpanama', 'acanalmanplanpamana')); // false
// console.log(anagrams('qwerty', 'qeywrt')); // true
// console.log(anagrams('texttwisttime', 'timetwisttext')); // true

export function anagramsSubtract(str1: string, str2: string): boolean {
  if (str1.length !== str2.length) {
    return false;
  }
  const str1m: { [key: string]: number } = {};
  for (let c of str1) {
    str1m[c] = (str1m[c] ?? 0) + 1;
  }
  for (let d of str2) {
    if (!str1m[d]) {
      return false;
    } else {
      str1m[d] -= 1;
    }
  }
  return true;
}

export function sameFrequency(num1: number, num2: number): boolean {
  let str1 = num1.toString();
  let str2 = num2.toString();
  if (str1.length !== str2.length) {
    return false;
  }
  const str1m: { [key: string]: number } = {};
  for (let c of str1) {
    str1m[c] = (str1m[c] ?? 0) + 1;
  }
  for (let d of str2) {
    if (str1m[d] === undefined || str1m[d] === 0) {
      return false;
    } else {
      str1m[d] -= 1;
    }
  }
  return true
}


/**
 * Are there duplicates
 * @param args 
 */
export function areThereDuplicates(...args: number[] | string[]): boolean {
  if (args.length === 0) {
    return false;
  }
  const lm: { [key: string]: number } = {};
  for (let c of args) {
    lm[c.toString()] = (lm[c.toString()] ?? 0) + 1;
  }
  for (let key in lm) {
    if (lm[key] > 1) {
      return true;
    }
  }
  return false;
}

