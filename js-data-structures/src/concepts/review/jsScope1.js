/**
 * @fileoverview JavaScript scope 
 * 
 */

global.abc = function () {
  console.log("hello from global");
}

global.abc();

// root scope (global or window)
var fun = 100;

// root scope (global or window)
var Params = {
  name: "Params",
  helper: funFunction, // JavaScript hoisting
  helperBind: function () {
    return funFunction.bind(this, 12);
  }
};

function funFunction(p1) {
  // child scope
  var fun = "hello";
  console.log(p1, fun, arguments);
  console.log(this.name); // depends who is calling the function 
}

function funnerFunction() {
  // child scope
  var fun = "how are you";
  console.log(2, fun);
}

function funnestFunction() {
  // child scope
  fun = "doing fine";
  console.log(3, fun);
}

console.log("window", fun);
funFunction(1);
funnerFunction();
funnestFunction();
console.log("window", fun);
Params.helper(100);
Params.helperBind()();
