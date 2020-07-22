/**
 * @fileoverview JavaScript variable environment
 */

function two() {
  var isValid; // undefined
}

function one() {
  var isValid = true; // local env
  two();
}

var isValid = false;
one();


// Call Stack
// 2. two() execution context -- local variable environment -- isValid -> undefined
// 1. one() execution context -- local variable environment -- isValid -> true
// 
// global() execution context -- isValid -> false
//                            -- function one
//                            -- function two
