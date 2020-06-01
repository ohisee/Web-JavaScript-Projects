/**
 * @fileoverview vowels function returns the number of vowels 
 * used in a string, vowels are the characters 'a', 'e' 'i', 'o', and 'u'
 */

function vowels(str) {
  const vm = { 'a': 1, 'e': 1, 'i': 1, 'o': 1, 'u': 1 };
  let result = 0;
  for (let char of str.toLowerCase()) {
    result += vm[char] || 0;
  }
  return result;
}

function vowelsUsingIncludes(str) {
  const searchString = ['a', 'e', 'i', 'o', 'u'];
  let result = 0;
  for (let char of str.toLowerCase()) {
    result += searchString.includes(char) ? 1 : 0;
  }
  return result;
}

function vowelsUsingRegExp(str = "") {
  const result = str.match(/[aeiou]/ig);
  return result ? result.length : 0;
}

module.exports = {
  vowels,
  vowelsUsingIncludes,
  vowelsUsingRegExp
};
