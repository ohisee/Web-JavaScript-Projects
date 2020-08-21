/**
 * @fileoverview console logs the numbers from 1 to n. But for multiples of three print 
 * "fizz" instead of the number and for the multiples of five print "buzz". 
 * For numbers which are multiples of both three and five print "fizzbuzz"
 */

/**
 * @param {number} num 
 */
function fizzbuzz(num) {
  for (let i = 1; i <= num; i++) {
    if (i % (3 * 5) === 0) { // multiple of 3 and 5 (15) must be checked first
      console.log("fizzbuzz");
    } else if (i % 3 === 0) {
      console.log("fizz")
    } else if (i % 5 === 0) {
      console.log("buzz");
    } else {
      console.log(i);
    }
  }
}

module.exports = {
  fizzbuzz
};
