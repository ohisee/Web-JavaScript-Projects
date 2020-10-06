/**
 * @fileoverview JavaScript promise
 */
const http = require("http");

const promise = new Promise((resolve, reject) => {
  const req = http.request({
    hostname: "jsonplaceholder.typicode.com",
    path: "/todos/1",
    method: "GET",
    headers: {
      "Content-Type": "application/json"
    }
  }, (res) => {
    const chunks = [];
    res.on("data", chunk => {
      chunks.push(chunk);
    });
    res.on("end", () => {
      const message = Buffer.concat(chunks).toString();
      resolve(message);
    });
  });
  req.on("error", (error) => {
    reject("it broked");
  });
  req.end();
});

const promise2 = new Promise((resolve, reject) => {
  setTimeout((str) => {
    resolve(str);
  }, 100, "Hello");
});

const promise3 = new Promise((resolve, reject) => {
  setTimeout(resolve, 100, "Runner");
});

const promise4 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Walker");
});

const promise5 = new Promise((resolve, reject) => {
  setTimeout(resolve, 1000, "Talker");
});

const promise6 = new Promise((resolve, reject) => {
  setTimeout(resolve, 5000, "looking for promise!");
});

const promiseRejected = new Promise((resolve, reject) => {
  setTimeout(reject, 6000, "looking for error!");
});

promise
  .then(result => JSON.parse(result))
  .then(result2 => {
    result2.hi = "someone is saying"
    return result2;
  })
  .then(result3 => console.log(result3))
  .catch(error => console.log(error));

Promise.all([promise2, promise3, promise4, promise5, promise6])
  .then(values => console.log(values))
  .catch(error => console.log(error));

// Promise.reject or Promise.resolve triggers "Unhandled promise rejection" error
Promise.all([promise2, promise3, promise4, promise5, promise6, promiseRejected])
  .then(values => console.log(values)) // ignored, will not log
  .catch(error => console.log(error)); // only log error
