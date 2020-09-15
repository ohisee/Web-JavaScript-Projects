/**
 * @fileoverview JavaScript new Function
 */

// using Function constructor
const one = new Function("return 1");

console.log(one(), "--- should print 1");

// using Function constructor with parameter
const two = new Function("num", "return num");

console.log(two(100), "--- should print 100");

// function -- callable object
function woohoo() {
  console.log("woohoo");
}

woohoo.call();
woohoo.apply();

woohoo.yell = "yelling";
console.log(woohoo.yell, "--- should print yelling");

// properties of function
console.log(woohoo.name);

// functions are first class citizens in JavaScript
// 1 functional expression
var exp = function () { }

// 2 as an argument, like a type
function abc(fn) {
  fn();
}

abc(function () { console.log("How are you"); });

// 3 return function as a value from another function
function b() {
  return function c() { console.log("doing well") };
}

b()();
// Or
var d = b();
d();

// default parameter
function small(param = 100) {
  return param;
}

console.log(small());
