/**
 * @fileoverview JavaScript hoisting
 */

console.log("------ JS Hoisting ------");

var favoriteFood = "grapes";

/**
 * JavaScript hoisting happens in execution context
 * A new execution context is created in a function
 */
var foodForThoughts = function () {
  console.log(`Original favorite food: ${favoriteFood}`, "--- favorite food is undefined");

  var favoriteFood = "sushi";

  console.log(`New favorite food: ${favoriteFood}`, "--- favorite food is sushi");
};

foodForThoughts();

console.log("------------------------------------");

function fastRunner() {
  function slowRunner() {
    return "it is me, slow runner";
  }
  return slowRunner();
  function slowRunner() {
    return "no slow runner";
  }
}

console.log(fastRunner(), "--- no slow runner");
