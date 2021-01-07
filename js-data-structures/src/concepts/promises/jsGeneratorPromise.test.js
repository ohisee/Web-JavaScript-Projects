/**
 * @fileoverview generator unit test 
 */
const { asyncGeneratorHandler } = require("./jsGeneratorPromise");

describe("Generator unit test", () => {

  test("should be defined", () => {
    expect(asyncGeneratorHandler).toBeDefined();
  });

  test("should return a result", (done) => {
    const gen = function* () {
      yield Promise.resolve(2);
    }
    expect.assertions(1);
    asyncGeneratorHandler(gen).call().then(result => {
      expect(result).toEqual(2);
      done();
    });
  });

  test("should return a result", (done) => {
    const gen = function* () {
      let n1 = yield Promise.resolve(2);
      let n2 = yield Promise.resolve(10);
      yield n1 + n2;
    }
    expect.assertions(1);
    asyncGeneratorHandler(gen).call().then(result => {
      expect(result).toEqual(12);
      done();
    });
  });

  test("should return a result", (done) => {
    const gen = function* (n3) {
      let n1 = yield Promise.resolve(2);
      let n2 = yield Promise.resolve(10);
      yield n1 + n2 + n3;
    }
    expect.assertions(1);
    asyncGeneratorHandler(gen).call(this, 20).then(result => {
      expect(result).toEqual(32);
      done();
    });
  });

  test("should return a result", (done) => {
    const gen = function* (str3) {
      let str1 = yield Promise.resolve("hello there, ");
      let str2 = yield Promise.resolve("how");
      yield str1 + str2 + str3;
    }
    expect.assertions(1);
    const generatorHandler = asyncGeneratorHandler(gen);
    generatorHandler.call(generatorHandler, " are you?").then(result => {
      expect(result).toEqual("hello there, how are you?");
      done();
    });
  });

  test("should return a result", (done) => {
    const gen = function* (n3) {
      let n1 = yield Promise.resolve(2);
      let n2 = yield Promise.resolve(10);
      yield n1 + n2 + n3;
    }
    expect.assertions(1);
    return asyncGeneratorHandler(gen).call(this, 20).then(result => {
      expect(result).toEqual(32);
      done();
    });
  });

  test("should return a result", () => {
    const gen = function* (str3) {
      let str1 = yield Promise.resolve("hello there, ");
      let str2 = yield Promise.resolve("how");
      yield str1 + str2 + str3;
    }
    expect.assertions(1);
    const generatorHandler = asyncGeneratorHandler(gen);
    return generatorHandler.call(generatorHandler, " are you?").then(result => {
      expect(result).toEqual("hello there, how are you?");
    });
  });
});
