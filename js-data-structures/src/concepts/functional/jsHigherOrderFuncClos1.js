/**
 * @fileoverview JavaScript functional programming
 *
 * higher order function
 * closure
 */

/**
 * higher order function, function that returns a function or function that 
 * accepts function(s) as parameters
 */
const hof = () => () => 100;
console.log(hof(), "--- should print [Function]");
console.log(hof()(), "--- should print 100");

const hof2 = (fn) => fn(100);
const fn = (num) => num;
console.log(hof2(fn), "--- should print 100");

/**
 * Closure
 */
const closure = function () {
  let count = 0;
  return function increment() { // modify variable outside, not pure function
    count += 1;
    return count;
  }
}

const incrementFn = closure();
console.log(incrementFn, "--- should print [Function: increment]");
console.log(incrementFn(), "--- should print 1");
console.log(incrementFn(), "--- should print 2");
console.log(incrementFn(), "--- should print 3");
console.log(incrementFn(), "--- should print 4");
console.log(incrementFn(), "--- should print 5");

const closure2 = function () {
  let count = 18; // private variable
  return function getCounter() { // pure function
    return count;
  }
}

const getCounter = closure2();
console.log(getCounter, "--- should print [Function: getCounter]");
console.log(getCounter(), "--- should print 18");
console.log(getCounter(), "--- should print 18");
