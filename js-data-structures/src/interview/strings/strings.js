/**
 * @fileoverview different ways to reverse string 
 */

/**
 * reverse a string 
 * @param {string} str 
 */
function reverseUsingString(str) {
  if (!str || typeof str !== "string" || str.length < 2) {
    return str;
  }
  let result = "";
  for (let s of str) {
    result = s + result;
  }
  return result;
}

/**
 * reverse a string 
 * @param {string} str 
 */
function reverseUsingArray1(str) {
  if (!str || typeof str !== "string" || str.length < 2) {
    return str;
  }
  const result = [];
  const mid = Math.floor(str.length / 2);
  const maxIndex = str.length - 1;
  for (let i = 0; i <= mid; i++) {
    result[i] = str[maxIndex - i];
    result[maxIndex - i] = str[i];
    if (i === mid) { // for string with odd number length, break at middle 
      break;
    }
  }
  return result.join("");
}

/**
 * reverse a string 
 * @param {string} str 
 */
function reverseUsingArray2(str) {
  if (!str || typeof str !== "string" || str.length < 2) {
    return str;
  }
  return str.split("").reverse().join("");
}

/**
 * reverse a string 
 * @param {string} str 
 */
function reverseUsingArray3(str) {
  if (!str || typeof str !== "string" || str.length < 2) {
    return str;
  }
  return [...str].reverse().reduce((acc, cur) => acc.concat(cur));
}

module.exports = {
  reverseUsingString,
  reverseUsingArray1,
  reverseUsingArray2,
  reverseUsingArray3,
};
