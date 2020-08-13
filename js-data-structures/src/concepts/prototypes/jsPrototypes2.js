/**
 * @fileoverview JavaScript prototype chain
 */

/**
 * Function is a callable object in JavaScript
 */
function abc() { }

console.log(abc.hasOwnProperty("call"), "--- should print false");
console.log(abc.hasOwnProperty("apply"), "--- should print false");
console.log(abc.hasOwnProperty("bind"), "--- should print false");

console.log(abc.hasOwnProperty("name"), "--- should print true");

function multipluBy5(num) {
  return num * 5;
}

// __proto__ is a pointer referring to upper chain Function's prototype object
const func = multipluBy5.__proto__;
console.log(func, "--- should print [Function]");
console.log(Function.prototype);
console.log(multipluBy5.prototype, "--- should print 'multipluBy5 {}'");
console.log(func.hasOwnProperty("call"), "--- should print true");
console.log(func.hasOwnProperty("apply"), "--- should print true");
console.log(func.hasOwnProperty("bind"), "--- should print true");

let person = {
  mortal: true
};

let walker = Object.create(person);
console.log(walker, "--- should print {}");
walker.age = 100;
console.log(walker, "--- should print { age: 100 }");
console.log(person.isPrototypeOf(walker), "--- should print true");
console.log(typeof Object, "--- should print function");
console.log(Object.prototype, "--- should print {} - base object");

console.log({}.prototype, "--- should print 'undefined'");
console.log([].prototype, "--- should print 'undefined'");
console.log("".prototype, "--- should print 'undefined'");

console.log(String.prototype, "--- should print [String: '']");
console.log(Number.prototype, "--- should print [Number: 0]");
