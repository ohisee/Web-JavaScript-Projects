/**
 * @fileoverview JavaScript functional programming
 * 
 * pure function
 * No side effects 
 * same input returns same output
 */

// this global variable is shared
const array = [1, 2, 3];

/**
 * this function has a side effect that it will remove one element 
 * from the end of an array, so changes array's content outside of itself 
 * @param {number[]} arr 
 */
function mutateArray(arr) {
  arr.pop();
}

/**
 * this function also has a side effect that it will add one element 
 * to the end of an array, so changes array's content outside of itself 
 * @param {number[]} arr 
 */
function mutateArray2(arr) {
  arr.forEach(item => {
    arr.push(item);
  });
}

// Side effect
// output depends on the order of calling these functions
mutateArray(array);
console.log(array, "--- should print [1, 2]");
mutateArray2(array);
console.log(array, "--- should print [1, 2, 1, 2]");
mutateArray(array);
console.log(array, "--- should print [1, 2, 1]");


const anotherArray = [1, 2, 3];

/**
 * this function has no side effect, not modifying parameter's content
 * @param {number[]} arr 
 */
function removeLastItem(arr) {
  // newTempArr is a local variable, not modifying outside array
  const newTempArr = [].concat(arr);
  newTempArr.pop();
  return newTempArr;
}

/**
 * this function has no side effect, not modifying parameter's content
 * @param {number[]} arr 
 */
function multiplyBy2(arr) {
  // Array's map function returns a new array 
  return arr.map(item => item * 2);
}

console.log(removeLastItem(anotherArray), "--- should print [1, 2]");
console.log(anotherArray, "--- should print [1, 2, 3]");

console.log(multiplyBy2(anotherArray), "--- should print [2, 4, 6]");
console.log(anotherArray, "--- should print [1, 2, 3]");

/**
 * this function also has a side effect that it is effecting outside by logging 
 * some content to the output
 * but this function always has same output 
 */
function sayHello() {
  console.log("hello");
}

sayHello();

/**
 * no side effect
 * given same input, this function always returns the same output
 * @param {number} num1 
 * @param {number} num2 
 */
function add(num1, num2) {
  return num1 + num2;
}

/**
 * no side effect
 * @param {number} num 
 */
function multiplyBy3(num) {
  return num * 3;
}

// referential transparency
// given same input, function always returns the same output
console.log(multiplyBy3(add(3, 4)) === multiplyBy3(7), "--- should print true");
