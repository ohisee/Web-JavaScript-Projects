/**
 * @fileoverview JavaScript functional programming
 *
 * compose(fn1, fn2, fn3)(50), evaluate right to left, apply fn3, then apply fn2, and then apply fn1
 * pipe(fn1, fn2, fn3)(50), evaluate left to right, apply fn1, then apply fn2, and then apply fn3
 * arity, number of arguments that a function can take
 */

/**
 * create an assembly line of functions
 * compose different functions together
 * @param {(n: number) => number} fnF 
 * @param {(n: number) => number} fnG 
 */
const compose = function (fnF, fnG) {
  return function (data) {
    return fnF(fnG(data));
  }
};

const multiplyBy3 = (num) => num * 3;
const makeAbsoluteValue = (num) => Math.abs(num);
const multiplyBy3AndAbsolute = compose(multiplyBy3, makeAbsoluteValue);
console.log(multiplyBy3AndAbsolute(-50), "--- should return 150");

// pipe
const pipe = function (fnF, fnG) {
  return function (data) {
    return fnG(fnF(data));
  }
};
