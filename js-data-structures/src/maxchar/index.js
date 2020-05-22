/**
 * @fileoverview max char
 * maxChar("abcccccccd") === "c"
 * maxChar("apple 1231111") === "1"
 */

function maxChar(str) {
  const counter = {};
  let maxCount = 0;
  let result = '';
  for (let character of str) {
    // if (counter[character]) {
    //   counter[character] += 1;
    // } else {
    //   counter[character] = 1;
    // }
    // counter[character] = counter[character] + 1 || 1;
    counter[character] = counter[character] ? counter[character] + 1 : 1;
    if (counter[character] > maxCount) {
      maxCount = counter[character];
      result = character;
    }
  }
  return result;
}

module.exports = {
  maxChar,
};
