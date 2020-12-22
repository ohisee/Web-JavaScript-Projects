/**
 * @fileoverview JavaScript ES6 
 * 
 * const, let 
 * object destructure 
 * object properties 
 * template strings 
 * default arguments 
 * Symbol 
 * arrow function 
 * for of loop 
 * for in loop 
 */

const ParamsObj = {
  player: "Walker",
  experience: 100,
  wizardLevel: false,
};

// object destructur
const { player, experience } = ParamsObj;

// object properties
const name = "Talker Walker";
const ObjProps = {
  [name]: "hello",
  [1 + 2]: "how are you",
};

console.log(ObjProps);

// Symbol 
let sym1 = Symbol();
let sym2 = Symbol("walk");
let sym3 = Symbol("walk");
// unique type, used in object properties
console.log(sym1, sym2, sym3);

// closure 
const first = () => {
  const greet = "hello";
  const second = () => { // child scope always has access to variables in parent scope
    console.log(greet);
  }
  return second;
};

const newFunc = first();
newFunc();

// currying
const multiply = (a, b) => a * b;
const curriedMultiply = (a) => (b) => a * b;
const curriedMultiplyBy3 = curriedMultiply(3);
console.log(curriedMultiplyBy3(6), "--- should print 18");
console.log(curriedMultiplyBy3(7), "--- should print 21");

// compose 
const compose = (f, g) => (a) => f(g(a));
const sum = (num1) => num1 + 1;
console.log(compose(sum, sum)(100), "--- should print 102");

// reference type - created by the developer 
var object1 = { value: 10 };
var object2 = object1;
var object3 = { value: 10 };
console.log(object1 === object2, "--- should print true");
object1.value = 15;
console.log(object2.value, "--- should print 15");
console.log(object3);

// context of 'this' 
const objHolder = {
  say: function () {
    console.log(this, "--- should print '{ say: [Function: say] }'");
  }
}

objHolder.say();

// class instantiation using new 
class Player {
  constructor() { }
}

class Wizard extends Player {
  constructor() {
    super();
  }
}

const wiz = new Wizard();
const ply = new Player();

// for of loop
// iterating - arrays, strings 
const basket = ["apples", "oranges", "grapes"];

for (item of basket) {
  console.log(item);
}

// basket is like enumerable in the following 
// basket = {
//   0: "apples",
//   1: "oranges",
//   2: "grapes",
// };
for (item in basket) {
  console.log(item);
}

for (s of "basket") {
  console.log(s);
}

// for in loop - object properties 
// enumerating - properties in object are enumerable 
const details = {
  apples: 5,
  oranges: 10,
  grapes: 2000
};

for (item in details) {
  console.log(item);
}
