/**
 * @fileoverview JS reverse string 
 */

/**
 * @param {string} str 
 */
function reverseStringRecursive(str) {
  if (str.length <= 1) {
    return str;
  }
  return reverseStringRecursive(str.slice(1)) + str[0];
}

module.exports = {
  reverseStringRecursive,
};
