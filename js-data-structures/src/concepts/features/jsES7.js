/**
 * @fileoverview JavaScript ES7 
 * 
 */

// string includes
const str = "there are new features in ES7";
console.log(str.includes("new"), "--- should print true");

// array includes
const arr = ["abc", "efg", "hij"];
console.log(arr.includes("hij"), "--- should print true");

// exponentiation ** (power) operator 
const square = (num) => num ** 2;
console.log(square(6), "--- should print 36");
