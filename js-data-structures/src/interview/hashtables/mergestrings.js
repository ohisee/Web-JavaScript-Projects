/**
 * @fileoverview merge two strings 
 */

/**
* merge two strings, (abc, 123) -> a1b2c3
* @param {string} str1 
* @param {string} str2 
*/
function mergeStrings(str1, str2) {
  let result = "";
  for (let i = 0; i < str1.length || i < str2.length; i++) {
    if (i < str1.length) {
      result = result.concat(str1.charAt(i));
    }
    if (i < str2.length) {
      result = result.concat(str2.charAt(i));
    }
  }
  return result;
}

/**
* @param {string} str1 
* @param {string} str2 
*/
function mergeStrings2(str1, str2) {
  let result = "";
  for (let i = 0; i < str1.length || i < str2.length; i++) {
    if (i < str1.length) {
      result = result.concat(str1.charAt(i));
    } else {
      result = result.concat(str2.slice(i));
      break;
    }

    if (i < str2.length) {
      result = result.concat(str2.charAt(i));
    } else {
      // when first string is longer then second string, 
      // need to remove the last char appended in the first if else condition 
      result = result.slice(0, -1).concat(str1.slice(i));
      break;
    }
  }
  return result;
}

module.exports = {
  mergeStrings,
  mergeStrings2,
};
