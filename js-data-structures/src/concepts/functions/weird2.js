/**
 * @fileoverview JavaScript
 */

var hey = function say() { // say is not in global environment
  console.log("inside say");
};

hey();
// ReferenceError: say is not defined
say();
