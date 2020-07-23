/**
 * @fileoverview JavaScript, leakage of global variable
 * 'use strict' to prevent leakage of global variable
 */

'use strict'
function weird() {
  height = 50;  // glabol environment will create a variable
  return height;
}

// ReferenceError: height is not defined
console.log(weird());
