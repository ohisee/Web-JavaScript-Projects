/**
 * @fileoverview ES9 / 2018
 * 
 * spread operator
 * for await of
 */
const { toPrimaryLog } = require("../playground/utilities");

// spread operator
const persons = {
  walker: 100,
  talker: 90,
  runner: 80
};

const { walker, ...rest } = persons;

console.log(walker, "--- should print 100");
console.log(rest, "--- should print { talker: 90, runner: 80 }");

const arr = [1, 2, 3, 4, 5];
function sum(a, b, c, d, e) {
  return a + b + c + d + e;
}
console.log(sum(...arr));

// finally
const promise1 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Hello");
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Runner");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Walker");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Talker");
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "looking for promise!");
});

const promiseRejected = new Promise((resolve, reject) => {
  setTimeout(reject, 6000, "looking for error!");
});

Promise.all([promise1, promise2, promiseRejected])
  .then(values => console.log(values))
  .catch(error => console.log(error, "need to fix this error"))
  .finally(() => console.log("finally extra logging"));

// for await of 
async function play() {
  const arrayOfPromises = [promise1, promise2, promise3, promise4, promise5];
  for await (let prm of arrayOfPromises) {
    const data = await prm;
    console.log(toPrimaryLog(data, "--- for await of"));
  }
}

play();
