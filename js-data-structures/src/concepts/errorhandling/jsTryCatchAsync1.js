/**
 * @fileoverview JavaScript error handling
 * 
 * catch asynchronously
 */
const { toInfoLog, toPrimaryLog } = require("../playground/utilities");

Promise.resolve("asyncfail")
  .then(response => {
    // console.log(response);
    throw new Error("Number 1 fail");
    // return response;
  })
  .then(response => {
    console.log(response);
  }).catch(err => {
    // console.log(err);
    // return err;
    throw new Error("Number 2 fail");
  }).then(response => {
    console.log(toInfoLog(response));
    console.log(toInfoLog(response.message));
  }).catch(err => {
    console.log(toPrimaryLog(err));
  });

// Error: Number 2 fail
