/**
 * @fileoverview JS generator promise
 */

/**
 * @generator a generator 
 */
function* promiseInGenerator() {
  yield Promise.resolve("hello, resolved");
}

const g = promiseInGenerator();
/** @type {Promise<string>} */
const prom = g.next().value;
prom.then(re => console.log(re, "--- should print hello, resolved"));

/**
 * handles generator containing one or more Promises  
 * @param {Generator} generator 
 */
function asyncGeneratorHandler(generator) {
  return function () {
    /** @type {Generator} */
    const g = generator.call(this, arguments);
    /**
     * @param {IteratorResult<any, any>} result
     */
    async function promiseHandler(result) {
      try {
        let val = await result.value;
        let nextValue = g.next(val);
        while (!nextValue.done) {
          val = await nextValue.value;
          nextValue = g.next(val);
        }
        return val;
      } catch (error) {
        throw new Error(error);
      }
    }
    try {
      return promiseHandler(g.next());
    } catch (error) {
      return Promise.reject(error);
    }
  }
}

/** @type {Promise<string>} */
const promise1 = new Promise((resolve) => {
  setTimeout(function () {
    resolve("how are you?");
  }, 100);
});

const promise2 = new Promise((resolve) => {
  setTimeout(function () {
    resolve(" fine, thank you");
  }, 100);
});

const onePromise = asyncGeneratorHandler(function* () {
  const greeting = yield promise1;
  const res = greeting + (yield promise2);
  yield res;
});

onePromise().then(res => console.log(res), err => console.error(err));

const anotherPromise = asyncGeneratorHandler(function* () {
  const num1 = yield Promise.resolve(2);
  const num2 = num1 * (yield Promise.resolve(10));
  const difference = num2 - num1 - (yield Promise.resolve(8));
  yield difference;
});

anotherPromise().then(
  res => console.log(res, "--- should print 10"),
  err => console.error(err));
