/**
 * @fileoverview JS ES6 generator 
 */

/**
 * @function toError 
 * @param {string} str 
 */
const toError = (str) => `\x1b[${91}m${str}\x1b[${39}m${"\x1b[0m"}`;

/**
 * generater numbers up to stop 
 * @param {number} stop 
 */
function* gen(stop) {
  for (let i = 0; i < stop; i++) {
    try {
      yield i;
    } catch (e) {
      console.log(toError(e));
    }
  }
}

let genitr = gen(10);

console.log(genitr.next());
console.log(genitr.next());
console.log(genitr.throw("an error occured"));
console.log(genitr.next(), "--- should print { value: 3, done: true }");
console.log(genitr.return("returned"), "---should print { value: 'returned', done: true }");
console.log(genitr.next(), "--- should print { value: undefined, done: true }");
