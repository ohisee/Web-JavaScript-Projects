/**
 * @fileoverview JavaScript type coercion
 */

console.log(1 == '1', "--- should print true"); // type coercion
console.log(-0 === +0, "--- should print true");
console.log(Object.is(-0, +0), "--- should print false");

console.log(false == "", "--- should print true");
console.log(false == [], "--- should print true");
console.log(false == {}, "--- should print false");
console.log("" == 0, "--- should print true");
console.log("" == [], "--- should print true");
console.log("" == {}, "--- should print false");
console.log(0 == [], "--- should print true");
console.log(0 == {}, "--- should print false");
console.log(0 == null, "--- should print false");


var abc = new Number(10);
console.log(typeof abc, "--- should print object");
var e = 10;
console.log(typeof e, "--- should print number");
console.log(abc === e, "--- should print false");
console.log(abc == e, "--- should print true because of type coercion");
