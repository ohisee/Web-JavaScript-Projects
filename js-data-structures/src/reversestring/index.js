/**
 * @fileoverview Given a string, return a new string with reversed order of characters
 */

function reverse(str) {
  if (str && str.length === 1) {
    return str;
  }
  return reverse(str.slice(1)) + str[0];
}

function reverseUsingSubstring(str = "") {
  if (str && str.length === 1) {
    return str;
  }
  return reverseUsingSubstring(str.substring(1)) + str[0];
}

function reverseIteration(str) {
  let result = "";
  for (let i = str.length - 1; i >= 0; i--) {
    result = result.concat(str[i]);
  }
  return result;
}

function reverseIterationArray(str) {
  let result = [];
  for (let i = str.length - 1; i >= 0; i--) {
    result.push(str[i]);
  }
  return result.join('');
}

function reverseUsingArray(str) {
  if (str && str.length === 1) {
    return str;
  }
  return str.split('').reverse().join('');
}

module.exports = {
  reverse,
  reverseUsingSubstring,
  reverseIteration,
  reverseIterationArray,
  reverseUsingArray
};
