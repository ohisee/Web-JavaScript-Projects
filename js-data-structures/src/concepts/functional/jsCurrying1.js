/**
 * @fileoverview JavaScript functional programming
 *
 * currying 
 * partial application
 */

const multiply = (a, b) => a * b;
console.log(multiply(3, 4), "--- should return 12");

const curriedMultiply = function (a) {
  return function (b) {
    return a * b;
  }
}
console.log(curriedMultiply(5)(6), "--- should return 30");

// create utility function using currying
const curriedMultiplyBy5 = curriedMultiply(5);
console.log(curriedMultiplyBy5(6), "--- should return 30");
console.log(curriedMultiplyBy5(7), "--- should return 35");

// partial application, create a function with smaller number of parameters
const multiply3Nums = (a, b, c) => a * b * c;
const partialMultiplyBy5 = multiply3Nums.bind(null, 5);
console.log(partialMultiplyBy5(4, 10), "--- should return 200");
