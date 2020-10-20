/**
 * @fileoverview JavaScript error
 */
const { toPrimaryLightLog } = require("../playground/utilities");

const err = new Error("errorMessage");

console.log(err.name);
console.log(err.message);
console.log(toPrimaryLightLog(err.stack));

function abc() {
  const er = new Error("thrown in side function");
  return er;
}

console.log(abc());
