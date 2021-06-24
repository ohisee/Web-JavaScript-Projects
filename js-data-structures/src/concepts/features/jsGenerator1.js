/**
 * @fileoverview JS ES6 generator 
 */

/**
 * generator 
 * @returns {Generator<"House"|"Garage"|"Kitchen"|"Driveway"|"Balcony", void, unknown>}
 */
function* select() {
  yield "House";
  yield "Garage";
  yield "Kitchen";
  yield "Driveway";
  yield "Balcony";
}

let gi = select();
console.log(gi.next(), "---should print { value: 'House', done: false }");
console.log(gi.next(), "---should print { value: 'Garage', done: false }");
console.log(gi.next(), "---should print { value: 'Kitchen', done: false }");
console.log(gi.next(), "---should print { value: 'Driveway', done: false }");
console.log(gi.next(), "---should print { value: 'Balcony', done: false }");
console.log(gi.next(), "---should print { value: undefined, done: true }");

let obj = {
  [Symbol.iterator]: select
};

console.log("prints each item, House, Garage, Kitchen, Driveway, Balcony")
for (let el of obj) {
  console.log(el);
}
