/**
 * @fileoverview Recursion
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
}

export function isPalindrome(str: string): boolean {
  if (str.length <= 3) {
    return str[0] === str[str.length - 1];
  }
  return str[0] === str[str.length - 1] && isPalindrome(str.substring(1, str.length - 1));
}

export function someRecursive(arr: number[], callback: (arg: number) => boolean): boolean {
  if (arr.length === 1) {
    return callback(arr[0]);
  }
  return callback(arr[0]) || someRecursive(arr.slice(1), callback);
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
