/**
 * @fileoverview JavaScript hositing
 */

console.log("------ JS Hoisting ------");

console.log(ab, "---  ab is undefined");
var ab = "ab";
var ab = "cd";
console.log(ab, "---  should print cd");

console.log(one(), "---  should print good bye again");
function one() {
  return "hello one";
}
console.log(one(), "---  should print good bye again");
function one() {
  return "good bye";
}
console.log(one(), "---  should print good bye again");
function one() {
  return "good bye again";
}
console.log(one(), "---  should print good bye again");
