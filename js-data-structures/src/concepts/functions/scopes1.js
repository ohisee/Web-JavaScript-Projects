/**
 * @fileoverview JavaScript function scope and block scope
 */

// function scope
if (5 > 3) {
  var secret = "1234567";
}

// JavaScript is functionally scoped
console.log(secret);

function abc() {
  var anc = "inside";
}
// ReferenceError: anc is not defined
// console.log(anc);

if (5 > 3) {
  let blockScopeVariable = "1234567";
}

// Now it is block scope, ReferenceError
// console.log(blockScopeVariable);

function loop() {
  for (var i = 0; i < 5; i++) {
    console.log(i);
  }
  console.log('final', i);
}

loop();

/**
 * Use let to define variable i, block scope
 */
function loopUsingBlockScope() {
  for (let i = 0; i < 5; i++) {
    console.log(i);
  }
  // ReferenceError: i is not defined
  console.log('final', i);
}

loopUsingBlockScope();
