/**
 * @fileoverview JavaScript scope chain, global lexical environment
 */

var x = 'x'; // global variable

function findName() { // glabal scope
  console.log(x); // by scope chain
  var b = 'b';
  return printName();
}

function printName() { // glabal scope
  console.log(x); // by scope chain
  var c = 'c';
  return "Walker Talker";
}

function sayMyName() { // glabal scope
  var abc = "abc";
  return findName();
}

// Global lexical environment
console.log(sayMyName());
