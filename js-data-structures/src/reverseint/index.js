/**
 * @fileoverview reverse a number
 * return an integer that is the reverse of ordering of numbers
 * reverseInt(15) === 51
 * reverseInt(981) === 189
 * reverseInt(500) === 5
 * reverseInt(-15) === -51
 * reverseInt(-90) === -9
 */

function reverseInt(num) {
  let absNum = Math.abs(num);
  let result = 0;
  while (absNum > 0) {
    result = (result * 10) + (absNum % 10);
    absNum = Math.floor(absNum / 10);
  }
  return Math.sign(num) * result;
}

module.exports = {
  reverseInt,
};
