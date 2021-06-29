/**
 * @fileoverview JS ES6 array iterator 
 */

/** @type {number[]} */
let array = [1, 2, 3, 4, 5, 6, 7, 8];

console.log(typeof array[Symbol.iterator]);

/** @type {IterableIterator<number>} */
let it = array[Symbol.iterator]();

console.log(it.next(), "--- should print { value: 1, done: false }");
console.log(it.next(), "--- should print { value: 2, done: false }");
console.log(it.next(), "--- should print { value: 3, done: false }");
console.log(it.next(), "--- should print { value: 4, done: false }");
console.log(it.next(), "--- should print { value: 5, done: false }");
console.log(it.next(), "--- should print { value: 6, done: false }");
console.log(it.next(), "--- should print { value: 7, done: false }");
console.log(it.next(), "--- should print { value: 8, done: false }");
console.log(it.next(), "--- should print { value: undefined, done: true }");

for (let element of array) {
  console.log(element);
}

// point to a new implementation 
array[Symbol.iterator] = function () {
  let nextValue = 100;
  return {
    next() {
      nextValue++;
      return {
        done: nextValue > 102 ? true : false,
        value: nextValue
      };
    }
  };
}

/** @type {IterableIterator<number>} */
let it2 = array[Symbol.iterator]();

console.log(it2.next(), "--- should print { done: false, value: 101 }");
console.log(it2.next(), "--- should print { done: false, value: 102 }");
console.log(it2.next(), "--- should print { done: true, value: 103 }");

// prints 101, 102 
for (let element of array) {
  console.log(element);
}
