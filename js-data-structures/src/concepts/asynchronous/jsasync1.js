/**
 * @fileoverview JavaScript job queue, callback queue
 */

// Callback queue - task queue 
setTimeout(() => { console.log("1", "after 2"); }, 0);
setTimeout(() => { console.log("1?", "after 2"); }, 0);
setTimeout(() => { console.log("1??", "after 2"); }, 0);
setTimeout(() => { console.log("1???", "after 2"); }, 0);
setTimeout(() => { console.log("1????", "after 2"); }, 0);
setTimeout(() => { console.log("1?????", "after 2"); }, 0);

// Job queue - microtask qqueue - higher priority than callback queue 
Promise.resolve("resolved").then(() => console.log("2", "Promise after 3"));

console.log("3", "this is printed at very first");

// in the following order

// 3 this is printed at very first
// 2 Promise after 3
// 1 after 2
// 1? after 2
// 1?? after 2
// 1??? after 2
// 1???? after 2
// 1????? after 2
