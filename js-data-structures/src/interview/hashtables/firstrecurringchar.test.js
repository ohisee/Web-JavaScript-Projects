/**
 * @fileoverview JS first recurring character unit test 
 */
const {
  firstRecurringChar,
  firstRecurringUsingTwoLoops } = require("./firstrecurringchar");

describe("First recurring character", () => {
  test("function is defined", () => {
    expect(firstRecurringChar).toBeDefined();
  });

  test("should find first recurring character", () => {
    expect(firstRecurringChar([2, 5, 1, 2, 3, 5, 1, 2, 4])).toEqual(2);
  });

  test("should find first recurring character", () => {
    expect(firstRecurringChar([2, 1, 1, 2, 3, 5, 1, 2, 4])).toEqual(1);
  });

  test("should find first recurring character", () => {
    expect(firstRecurringChar([2, 3, 4, 5, 6, 7, 8])).toEqual(undefined);
  });

  test("should find first recurring character", () => {
    expect(firstRecurringChar([2, 3, 0, 7, 8, 0])).toEqual(0);
  });

  test("should find first recurring character", () => {
    expect(firstRecurringChar([0, 0, 0, 0, 0, 0, 0])).toEqual(0);
  });

  test("should find first recurring character", () => {
    expect(firstRecurringChar([0, -1, 3, 11, -1, -2, 0])).toEqual(-1);
  });

  test("should find first recurring character", () => {
    expect(firstRecurringUsingTwoLoops([2, 5, 1, 2, 3, 5, 1, 2, 4])).toEqual(2);
  });

  test("should find first recurring character", () => {
    expect(firstRecurringUsingTwoLoops([2, 1, 1, 2, 3, 5, 1, 2, 4])).toEqual(1);
  });

  test("should find first recurring character", () => {
    expect(firstRecurringUsingTwoLoops([2, 3, 4, 5, 6, 7, 8])).toEqual(undefined);
  });

  test("should find first recurring character", () => {
    expect(firstRecurringUsingTwoLoops([2, 3, 0, 7, 8, 0])).toEqual(0);
  });

  test("should find first recurring character", () => {
    expect(firstRecurringUsingTwoLoops([0, 0, 0, 0, 0, 0, 0])).toEqual(0);
  });

  test("should find first recurring character", () => {
    expect(firstRecurringUsingTwoLoops([0, -1, 3, 11, -1, -2, 0])).toEqual(-1);
  });
});
