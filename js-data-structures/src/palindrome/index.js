/**
 * @fileoverview Palindrome
 * Given a string, return true if the string is a palindrome
 * or false if it is not.  Palindromes are strings that
 * form the same word if it is reversed. Do include spaces
 * and punctuation in determining if the string is a palindrome.
 */

function palindrome(str) {
  let mid = Math.floor(str.length / 2);
  let result = true;
  let indexAtLength = str.length - 1;
  for (let i = 0; i < mid; i++) {
    result = result && (str[i] === str[indexAtLength - i]);
  }
  return result;
}

function palindromeUsingReverse(str) {
  return str === str.split('').reverse().join('');
}

function palindromeRecur(str) {
  if (str && str.length <= 3) {
    return str[0] === str[str.length - 1];
  }
  if (str[0] === str[str.length - 1]) {
    return palindromeRecur(str.substring(1, str.length - 1));
  }
  return false;
}

/**
 * Redundant comparison
 */
function palindromeUsingArrayEvery(str) {
  return str.split('').every((val, i) => {
    return val === str[str.length - 1 - i];
  });
}

module.exports = {
  palindrome,
  palindromeUsingReverse,
  palindromeRecur
};
