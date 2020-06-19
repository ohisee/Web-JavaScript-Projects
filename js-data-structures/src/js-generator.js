/**
 * @fileoverview JavaScript generator
 */

// Generator, run until encounters the first yield statement
function* addNumbers() {
  const result = 1 + 1;
  return 20 + (yield result);
}

const generator = addNumbers();
console.log(generator.next(2)); // { value: 2, done: false }
console.log(generator.next(100)); // { value: 120, done: true }

console.log("----------");

function* lists() {
  yield 1;
  yield 2;
  yield 3;
  yield 4;
  yield 15;
}

const listsGenerator = lists();
console.log(listsGenerator.next()); // { value: 1, done: false }
console.log(listsGenerator.next()); // { value: 2, done: false }
console.log(listsGenerator.next()); // { value: 3, done: false }
console.log(listsGenerator.next()); // { value: 4, done: false }
console.log(listsGenerator.next()); // { value: 15, done: false }
console.log(listsGenerator.next()); // { value: undefined, done: true }
console.log(listsGenerator.next()); // { value: undefined, done: true }

const numbers = [];
const listsGenerator2 = lists();
for (let value of listsGenerator2) {
  numbers.push(value);
}

console.log(numbers);

console.log("----------");

// Nested generator, calling another generator
function* listNumbers() {
  yield 1;
  yield 2;
  yield 3;
  yield* moreNumbers();
  yield 15;
}

function* moreNumbers() {
  yield 3;
  yield 4;
  yield 5;
}

const values = [];
const numberGenerator = listNumbers();
for (let value of numberGenerator) {
  values.push(value);
}

console.log(values); // [1,2,3,3,4,5,15]

console.log("----------");

class Tree {
  constructor(value = null, children = []) {
    this.value = value;
    this.children = children;
  }

  // generator
  *printValues() {
    yield this.value;
    // depth first traversal
    for (let child of this.children) {
      yield* child.printValues();
    }
  }
}

const tree = new Tree(1, [
  new Tree(2, [new Tree(4)]),
  new Tree(3),
]);

const treeNodes = [];
for (let value of tree.printValues()) {
  treeNodes.push(value);
}

console.log(treeNodes);
