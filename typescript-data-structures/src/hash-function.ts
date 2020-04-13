/**
 * @fileoverview hash
 */

console.log('abc'.charAt(0), 'char code', 'abc'.charCodeAt(0));
console.log('Alphabet position', 'abc'.charCodeAt(0) - 96);

console.log('abc'.charAt(1), 'char code', 'abc'.charCodeAt(1));
console.log('Alphabet position', 'abc'.charCodeAt(1) - 96);

console.log('abc'.charAt(2), 'char code', 'abc'.charCodeAt(2));
console.log('Alphabet position', 'abc'.charCodeAt(2) - 96);

/**
 * Not a constant time and will cluster (not evenly distributed)
 */
function noGoodHash(str: string, arrayLen: number): number {
  let total = 0;
  for (let c of str) {
    let charAlphabetPostion = c.charCodeAt(0) - 96;
    total += charAlphabetPostion;
  }
  return total % arrayLen;
}

console.log('Hash value is', noGoodHash('pink', 10));

/**
 * Array length is also in prime number
 */
function hashUsingPrime(str: string, arrayLen: number) {
  let total = 0;
  const PRIME_NUM = 31;
  // only look at first 100 characters
  for (let i = 0; i < Math.min(str.length, 100); i++) {
    let char = str[i];
    let charAlphabetPostion = char.charCodeAt(0) - 96;
    total = total * PRIME_NUM + charAlphabetPostion;
  }
  return total % arrayLen;
}

console.log('Hash value is', hashUsingPrime('hello', 13));
console.log('Hash value is', hashUsingPrime('cyan', 13));
console.log('Hash value is', hashUsingPrime('pink', 13));
