/**
 * @fileoverview JavaScript review
 *
 */

/**
 * reverse a given string
 * @param {string} str 
 */
function reverse(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return str;
  }
  let result = "";
  for (let i = 0; i < str.length; i++) {
    result = result.concat(str[str.length - 1 - i]);
  }
  return result;
}

console.log(reverse("abcdef"));

/**
 * reverse a given string
 * @param {string} str 
 */
function reverse2(str) {
  if (!str || str.length < 2 || typeof str !== "string") {
    return str;
  }
  return str.split("").reverse().join("");
}

console.log(reverse2("abcdef"));

/**
 * reverse a given string
 * @param {string} str 
 */
function reverse3(str) {
  const result = [];
  const mid = Math.floor(str.length / 2);
  for (let i = 0; i <= mid; i++) {
    result[i] = str[str.length - 1 - i];
    result[str.length - 1 - i] = str[i];
  }
  return result.join("");
}

console.log(reverse3("Hi My name is Walker Talker"));

// ES6 features
const reverseUsingArrowFunction = str => str.split("").reverse().join("");
console.log(reverseUsingArrowFunction("Hi My name is Walker Talker"));

const reverseUsingSpreadOperator = str => [...str].reverse().join("");
console.log(reverseUsingSpreadOperator("Hi My name is Walker Talker"));
