/**
 * @fileoverview JS promise ES2020 feature 
 */

/**
 * @type {Promise<string>} 
 * @returns {Promise<string>} in string format 
 */
const promiseOne = new Promise((resolve, reject) => {
  setTimeout(resolve, 600, "resolved from promise one");
});

/**
 * @type {Promise<string>} 
 * @returns {Promise<string>} in string format 
 */
const promiseTwo = new Promise((resolve, reject) => {
  setTimeout(reject, 300, "rejected from promise two");
});

Promise.all([promiseOne, promiseTwo]) // only resolved if all promises are resolved 
  .then(data => console.log(data))
  .catch(err => console.log(err));

// does not care about which resolve and reject, 
// run all promises regardless reject or resolve 
Promise.allSettled([promiseOne, promiseTwo]).then(results => console.log(results));
