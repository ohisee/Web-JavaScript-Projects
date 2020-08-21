/**
 * @fileoverview capitalize first character of a sentence 
 * capitalize('a short sentence') --> 'A Short Sentence' 
 * capitalize('a lazy fox') --> 'A Lazy Fox' 
 * capitalize('look, it is working!') --> 'Look, It Is Working!'
 */

/**
 * @param {string} str 
 */
function capitalize(str) {
  // edge case first char is not a space but a punctuation mark
  let result = str.trim()[0].toUpperCase();
  let isSpaceBefore = false;
  for (let i = 1; i < str.length; i++) {
    if (str[i] === " ") {
      isSpaceBefore = true;
      result = result + str[i];
      continue;
    }
    if (isSpaceBefore) {
      result = result + str[i].toUpperCase();
      isSpaceBefore = false;
    } else {
      result = result + str[i];
    }
  }
  return result;
}

/**
 * @param {string} str 
 */
function capitalizeUsingSplit(str) {
  let words = str.split(/(\s+)/g).filter(w => w); // filter out ''
  let result = [];
  for (let word of words) {
    if (word.trim().length === 0) {
      result.push(word);
    } else {
      result.push(word[0].toUpperCase().concat(word.slice(1)))
    }
  }
  return result.join('');
}

module.exports = {
  capitalize,
  capitalizeUsingSplit
};
