/**
 * @fileoverview Some recursion
 */
export function power(base: number, exponent: number): number {
  if (exponent === 0) {
    return 1;
  }
  if (exponent === 1) {
    return base;
  }
  return base * power(base, exponent - 1);
}

export function factorial(num: number): number {
  if (num < 0) {
    return 0;
  }
  if (num <= 1) {
    return 1;
  }
  return num * factorial(num - 1);
}

export function productOfArray(arr: number[]): number {
  if (arr.length === 0) {
    return 0;
  }
  if (arr.length === 1) {
    return arr[0];
  }
  return arr[0] * productOfArray(arr.slice(1));
}

export function recursiveRange(num: number): number {
  if (num === 0) {
    return 0;
  }
  return num + recursiveRange(num - 1);
}

export function fib(num: number): number {
  if (num === 0) {
    return 0;
  }
  if (num === 1 || num === 2) {
    return 1;
  }
  return fib(num - 1) + fib(num - 2);
}

export function reverse(str: string): string {
  if (str.length === 1) {
    return str[0];
  }
  return str[str.length - 1] + reverse(str.substring(0, str.length - 1));
  // reverse(str.slice(1)) + str[0]
}

export function isPalindrome(str: string): boolean {
  if (str.length <= 3) {
    return str[0] === str[str.length - 1];
  }
  return str[0] === str[str.length - 1] && isPalindrome(str.substring(1, str.length - 1));
}

export function isPalindromeV2(str: string): boolean {
  if (str.length <= 3) {
    return str[0] === str[str.length - 1];
  }
  if (str[0] === str.slice(-1)) {
    return isPalindromeV2(str.slice(1, -1));
  }
  return false;
}

export function someRecursive(arr: number[], callback: (arg: number) => boolean): boolean {
  if (arr.length === 1) {
    return callback(arr[0]);
  }
  if (callback(arr[0])) {
    return true;
  }
  return someRecursive(arr.slice(1), callback);
}

export function flatten(arr: any): any[] {
  if (!Array.isArray(arr)) {
    return [arr];
  }
  let result: any[] = [];
  for (let i of arr) {
    result = result.concat(flatten(i));
  }
  return result;
}

export function capitalizeFirst(arr: string[]): string[] {
  if (arr.length === 1) {
    return [arr[0].charAt(0).toUpperCase() + arr[0].slice(1)];
  }
  return ([] as string[])
    .concat(arr[0].charAt(0).toUpperCase() + arr[0].slice(1))
    .concat(capitalizeFirst(arr.slice(1)));
}

export function flatObject(obj: { [key: string]: any }): {} {
  let result = {};
  let keys = Object.keys(obj);
  for (let key of keys) {
    result = Object.assign(result, (typeof obj[key] === 'object')
      ? flatObject(obj[key]) : { [key]: obj[key] });
  }
  return result;
}

export function nestedEvenSum(obj: { [key: string]: any }): number {
  let result = 0;
  let keys = Object.keys(obj);
  for (let key of keys) {
    if (typeof obj[key] === 'number' && obj[key] % 2 === 0) {
      result += obj[key];
    }
    if (typeof obj[key] === 'object') {
      result += nestedEvenSum(obj[key]);
    }
  }
  return result;
}

export function capitalizeWords(words: string[]): string[] {
  if (words.length === 1) {
    return [words[0].toUpperCase()];
  }
  return ([] as string[])
    .concat(words[0].toUpperCase())
    .concat(capitalizeWords(words.slice(1)));
}

export function stringifyNumbers(obj: { [key: string]: any }): {} {
  let result: { [key: string]: any } = {};
  let keys = Object.keys(obj);
  for (let key of keys) {
    if (typeof obj[key] === 'number') {
      result[key] = obj[key].toString();
    } else {
      result[key] =
        (typeof obj[key] === 'object' && !Array.isArray(obj[key]))
          ? stringifyNumbers(obj[key]) : obj[key];
    }
  }
  return result;
}

export function collectStrings(obj: { [key: string]: any }): string[] {
  let result: string[] = [];
  let keys = Object.keys(obj);
  for (let key of keys) {
    if (typeof obj[key] === 'string') {
      result = result.concat(obj[key]);
    } else if (typeof obj[key] === 'object') {
      result = result.concat(collectStrings(obj[key]));
    }
  }
  return result;
}
