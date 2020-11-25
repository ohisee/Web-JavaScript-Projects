/**
 * @fileoverview JavaScript error handling
 *
 * catch asynchronously
 */
const { toInfoLog, toPrimaryLog } = require("../playground/utilities");

/**
 * IIFE
 */
(async function () {
  try {
    await Promise.resolve("resolved 1"); //ignored
    await Promise.resolve("resolved 2"); //ignored
    await Promise.reject("issue 1");
    await Promise.reject("issue 2"); //ignored
    await Promise.reject("issue 3"); //ignored
  } catch (err) {
    console.log(err);
  }
  console.log("See this logging");
})();

// issue 1
// See this logging

// Exercise
(function () {
  try {
    throw new Error();
  } catch (err) { // err is bound to catch block scope
    console.log(err.name, "--- should print Error");
    var err = 5;
    var boo = 10;
    var foo = 10;
    console.log(err, "--- should print 5");
  }
  console.log(err, "--- should print undefined");
  console.log(boo, "--- should print 10");
  console.log(foo, "--- should print 10");
})();

// Exercise
(function () {
  try {
    var err = 500;
    throw new Error();
  } catch (err) { // err is bound to catch block scope
    console.log(toInfoLog(err.name, "--- should print Error"));
    var err = 5;
    var boo = 10;
    var foo = 10;
    console.log(toInfoLog(err, "--- should print 5"));
  }
  console.log(toInfoLog(err, "--- should print 500"))
  console.log(toInfoLog(boo, "--- should print 10"));
  console.log(toInfoLog(foo, "--- should print 10"));
})();
