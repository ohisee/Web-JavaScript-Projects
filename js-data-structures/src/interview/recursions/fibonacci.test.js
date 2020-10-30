/**
 * @fileoverview JS fibonacci sequence functions unit test 
 */
const { fibonacciIterative, fibonacciRecursive } = require("./fibonacci");

describe("Iterative fibonacci function", () => {
  test("should be defined", () => {
    expect(fibonacciIterative).toBeDefined();
  });

  test("should compute fibonacci", () => {
    expect(fibonacciIterative(0)).toEqual(0);
  });

  test("should compute fibonacci", () => {
    expect(fibonacciIterative(1)).toEqual(1);
  });

  test("should compute fibonacci", () => {
    expect(fibonacciIterative(2)).toEqual(1);
  });

  test("should compute fibonacci", () => {
    expect(fibonacciIterative(3)).toEqual(2);
  });

  test("should compute fibonacci", () => {
    expect(fibonacciIterative(4)).toEqual(3);
  });

  test("should compute fibonacci", () => {
    expect(fibonacciIterative(5)).toEqual(5);
  });

  test("should compute fibonacci", () => {
    expect(fibonacciIterative(6)).toEqual(8);
  });

  test("should compute fibonacci", () => {
    expect(fibonacciIterative(10)).toEqual(55);
  });

  test("should compute fibonacci", () => {
    expect(fibonacciIterative(16)).toEqual(987);
  });
});

describe("Recursive fibonacci function", () => {
  test("should be defined", () => {
    expect(fibonacciRecursive).toBeDefined();
  });

  test("should compute fibonacci", () => {
    expect(fibonacciRecursive(0)).toEqual(0);
  });

  test("should compute fibonacci", () => {
    expect(fibonacciRecursive(1)).toEqual(1);
  });

  test("should compute fibonacci", () => {
    expect(fibonacciRecursive(2)).toEqual(1);
  });

  test("should compute fibonacci", () => {
    expect(fibonacciRecursive(3)).toEqual(2);
  });

  test("should compute fibonacci", () => {
    expect(fibonacciRecursive(4)).toEqual(3);
  });

  test("should compute fibonacci", () => {
    expect(fibonacciRecursive(5)).toEqual(5);
  });

  test("should compute fibonacci", () => {
    expect(fibonacciRecursive(6)).toEqual(8);
  });

  test("should compute fibonacci", () => {
    expect(fibonacciRecursive(10)).toEqual(55);
  });

  test("should compute fibonacci", () => {
    expect(fibonacciRecursive(16)).toEqual(987);
  });
});
