/**
 * @fileoverview JS ES6 generator 
 */

/**
 * @generator next can be called to pass in another number 
 * @returns {Generator<number, number, number>} 
 */
function* numberGenerator() {
  const num = yield 1 + 1;
  return num + 8;
}

const g = numberGenerator();
console.log(g.next().value, "--- should print 2");
console.log(g.next(20).value, "--- should print 28");

/**
 * @generator next can be called to pass in a boolean value 
 * @returns {Generator<number, string, boolean>} 
 */
function* conditionGenerator() {
  let i = 100;
  const re = yield i;
  if (re) {
    return "next(true)";
  } else {
    return "next(false)";
  }
}

let c = conditionGenerator();
console.log(c.next().value, "--- should print 100");
console.log(c.next(true).value, "--- should print next(true)");

c = conditionGenerator();
console.log(c.next().value);
console.log(c.next(false).value, "--- should print next(false)");
