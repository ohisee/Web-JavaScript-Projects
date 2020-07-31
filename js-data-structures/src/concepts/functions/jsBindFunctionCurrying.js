/**
 * @fileoverview JavaScript function currying
 */

/**
 * function currying, able to reuse the function or a piece of code, giving 
 * partial parameter, to create a function that is extensible
 */
function multiply(num1, num2) {
  return num1 * num2;
}

// only give first parameter, 2 
// return a function that has first parameter 2 
let multiplyByTwo = multiply.bind(this, 2);

console.log(multiplyByTwo(9), "--- should return 18");

let multiplyByTen = multiply.bind(this, 10);

console.log(multiplyByTwo(9), "--- should return 90");
