/**
 * @fileoverview JavaScript error handling
 * 
 */
const { toDashLine } = require("../playground/utilities");

/**
 * catch synchronous error
 */
function fail() {
  try {
    console.log("this works");
    throw new Error("issue");
  } catch (error) {
    console.log("we have found an issue", error);
  } finally {
    console.log("good from finally");
    return "returning fail";
  }
}

console.log(fail());
console.log(toDashLine(90));

/**
 * catch synchronous error
 */
function fail2() {
  try {
    try {
      notafunction();
    } catch (err) {
      throw new Error(err);
    }
  } catch (err) {
    console.log("got an issue", err);
  }
}

fail2();
console.log(toDashLine(90));

function fail3() {
  try {
    setTimeout(() => {
      notafunction;
    }, 1000);
  } catch (err) {
    console.log("got an issue", err);
  }
}

// does not catch any asynchronous error within same execution flow
fail3();
