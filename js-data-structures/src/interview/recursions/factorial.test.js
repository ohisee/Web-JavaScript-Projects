/**
 * @fileoverview JS factorial functions unit test 
 */
const { factorialRecursive, factorialIterative } = require("./factorial");

describe("Recursive factorial function", () => {
  test("should be defined", () => {
    expect(factorialRecursive).toBeDefined();
  });

  test("should compute factorial", () => {
    expect(factorialRecursive(0)).toEqual(1);
  });

  test("should compute factorial", () => {
    expect(factorialRecursive(1)).toEqual(1);
  });

  test("should compute factorial", () => {
    expect(factorialRecursive(2)).toEqual(2);
  });

  test("should compute factorial", () => {
    expect(factorialRecursive(5)).toEqual(120);
  });

  test("should compute factorial", () => {
    expect(factorialRecursive(9)).toEqual(362880);
  });
});

describe("Iterative factorial function", () => {
  test("should be defined", () => {
    expect(factorialIterative).toBeDefined();
  });

  test("should compute factorial", () => {
    expect(factorialIterative(0)).toEqual(1);
  });

  test("should compute factorial", () => {
    expect(factorialIterative(1)).toEqual(1);
  });

  test("should compute factorial", () => {
    expect(factorialIterative(2)).toEqual(2);
  });

  test("should compute factorial", () => {
    expect(factorialIterative(5)).toEqual(120);
  });

  test("should compute factorial", () => {
    expect(factorialIterative(9)).toEqual(362880);
  });
});
