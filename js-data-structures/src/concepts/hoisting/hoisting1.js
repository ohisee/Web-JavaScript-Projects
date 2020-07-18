/**
 * @fileoverview JavaScript hoisting 
 * only hoist var and function, not let, const
 */

console.log("------ JS Hoisting ------");
console.log(walker, "---  walker is undefined");
console.log(say2, "---  say2 is function expression and is referring to undefined now");
// console.log(say2()); error, cannot hoist function expression
// console.log(walker2); error, cannot hoist let
// console.log(walker3); error, cannot hoist const
console.log(say());

var walker = "walking";
let walker2 = "walkering";
const walker3 = "walking";

// JavaScript function expression
var say2 = function () {
  return "this is a function expression";
};

// JavaScript function declaration
function say() {
  return "hello walker";
}
