/**
 * @fileoverview JavaScript parallel, sequence, and race
 *
 * parallel 
 * sequencial 
 * race 
 */
const { toInfoLog, toPrimaryLog, toSecondaryLog } = require("../playground/utilities");

const promisify = (item, delay, callbackFn) =>
  new Promise((resolve, reject) =>
    setTimeout(() => {
      resolve(item);
      callbackFn(item);
    }, delay));

const logResolved1 = (item) => console.log(toInfoLog(`resolved ${item}`));
const logResolved2 = (item) => console.log(toPrimaryLog(`resolved ${item}`));
const logResolved3 = (item) => console.log(toSecondaryLog(`resolved ${item}`));

const p1 = () => promisify("p1", 100, logResolved1);
const p2 = () => promisify("p2", 5000, logResolved2);
const p3 = () => promisify("p3", 3000, logResolved3);

async function parallel() {
  const promises = [p1(), p2(), p3()];
  const [result1, result2, result3] = await Promise.all(promises);
  return `parallel is done: ${result1} ${result2} ${result3}`;
}

async function race() {
  const promises = [p1(), p2(), p3()];
  const result1 = await Promise.race(promises);
  return `race is done: ${result1}`;
}

/**
 * must wait for every promise to complete in sequence, 
 * so it takes longer than parallel 
 */
async function sequence() {
  const result1 = await p1();
  const result2 = await p2();
  const result3 = await p3();
  return `sequence is done: ${result1} ${result2} ${result3}`;
}

parallel().then(console.log);
sequence().then(console.log);
race().then(console.log);
