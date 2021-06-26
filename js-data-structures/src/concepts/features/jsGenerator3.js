/**
 * @fileoverview JS generator 
 */

function* gen() {
  console.log("1");
  console.log("2");
}

const g = gen();
console.log(g, "--- should print Object [Generator] {}");
g.next();

/**
* @param {number} num 
*/
function* genInt(num) {
  yield num;
  yield num + 10;
  return 25;
}

const gi = genInt(6);
let gin = gi.next();
console.log(gin, "--- should print { value: 6, done: false }");
gin = gi.next();
console.log(gin, "--- should print { value: 16, done: false }");
gin = gi.next();
console.log(gin, "--- should print { value: 25, done: true }");
gin = gi.next();
console.log(gin, "--- should print { value: undefined, done: true }");
