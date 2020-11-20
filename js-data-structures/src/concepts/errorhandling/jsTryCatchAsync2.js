/**
 * @fileoverview JavaScript error handling
 *
 * catch asynchronously
 */

Promise.resolve("asyncfail")
  .then(response => {
    Promise.resolve().then(() => {
      throw new Error("New Number 3 fail");
    }).catch(err => console.log(err, "--- from 'New Number 3 fail'"));
    return 1000;
  })
  .then(response => {
    console.log(response, "--- should print 1000");
  }).catch(err => {
    console.log("final error", err);
  });
