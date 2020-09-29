/**
 * @fileoverview JavaScript higher order function
 */

/**
 * higher order function that can make other functions like, multiplyBy2, 
 * multiplyBy5, and more
 * @param {number} num1 
 */
const multiplyBy = function (num1) {
  return function (num2) {
    return num1 * num2;
  }
}

const multiplyBy2 = multiplyBy(2);
const multiplyBy5 = multiplyBy(5);

console.log(multiplyBy2(11), "--- should print 22");
console.log(multiplyBy5(6), "--- should print 30");

/**
 * ES6 arrow syntax
 * @param {number} num1 
 */
const multiplyByNew = (num1) => (num2) => num1 * num2;
console.log(multiplyByNew(6)(7), "--- should print 42");
