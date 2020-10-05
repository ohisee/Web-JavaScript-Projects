/**
 * @fileoverview JavaScript async await
 */
const { toInfoLog, toPrimaryLog, toSecondaryLog } = require("../playground/utilities");

const promise1 = new Promise((resolve, reject) => {
  setTimeout((str) => {
    resolve(str);
  }, 100, "Hello");
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

async function play() {
  try {
    const p1 = await promise1;
    console.log(p1, "--- should print Hello");
    const p2 = await promise2;
    console.log(p2, "--- should print Runner");
    const p3 = await promise3;
    console.log(p3, "--- should print Walker");
    const p4 = await promise4;
    console.log(p4, "--- should print Talker");
    const p5 = await promise5;
    console.log(p5, "--- should print looking for promise!");
    await promiseRejected;
    console.log("ignored");
  } catch (error) {
    console.log(error, "--- should print 'looking for error!'");
  }
}

async function play2() {
  const result = await promise5;
  return result;
}

const play3 = async function () {
  const [p1, p2, p3, p4, p5] = await Promise.all(
    [promise1, promise2, promise3, promise4, promise5]);
  console.log(toInfoLog(p1));
  console.log(toInfoLog(p2));
  console.log(toInfoLog(p3));
  console.log(toInfoLog(p4));
  console.log(toInfoLog(p5));
}

const playCatch = async function () {
  try {
    const [p1] = await Promise.all(
      [promise1, promiseRejected]);
    console.log(toInfoLog(p1)); // ignored, will not show in console log
  } catch (error) {
    console.log(toSecondaryLog(error, "--- should print 'looking for error!'"));
  }
}

play();
play2()
  .then(result => console.log(toPrimaryLog(result)));
play3();
playCatch();
