/**
 * @fileoverview anagrams
 * One string is an anagram of another if it uses the same characters 
 * in the same quantity. Only consider characters, not spaces
 * or punctuation, consider capital letters to be the same as lower case 
 * anagrams('rail safety', 'fairy tales') --> True 
 * anagrams('RAIL! SAFETY!', 'fairy tales') --> True
 * anagrams('Hi there', 'Bye there') --> False
 */

function anagrams(str1 = "", str2 = "") {
  const tstr1 = str1.replace(/[\W]/g, "").toLowerCase();
  const tstr2 = str2.replace(/[\W]/g, "").toLowerCase();
  const chars1 = {};
  const chars2 = {};
  let result = true;
  for (let c of tstr1) {
    chars1[c] = chars1[c] ? chars1[c] + 1 : 1;
  }
  for (let c of tstr2) {
    chars2[c] = chars2[c] ? chars2[c] + 1 : 1;
  }
  if (Object.keys(chars1).length === Object.keys(chars2).length) {
    for (let c in chars1) {
      if (chars1[c] !== chars2[c]) {
        result = false;
        break;
      }
    }
  } else {
    result = false;
  }
  return result;
}

/**
 * Using array sort is O(N log N) time complexity
 */
function anagramsUsingArraySort(str1 = "", str2 = "") {
  const tstr1 = str1.replace(/[\W]/g, "").toLowerCase();
  const tstr2 = str2.replace(/[\W]/g, "").toLowerCase();
  return tstr1.split('').sort().join('') === tstr2.split('').sort().join('');
}

module.exports = {
  anagrams
};
