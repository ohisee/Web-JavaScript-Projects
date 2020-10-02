/**
 * @fileoverview test merge arrays 
 */
const { mergeArrays, mergeArrays2 } = require("./merge-arrays");

describe("Merge sorted arrays", () => {
  test("should merge sorted arrays", () => {
    expect(mergeArrays([8, 11, 17, 20, 21], [1, 6, 10, 19, 32])).toEqual(
      [1, 6, 8, 10, 11, 17, 19, 20, 21, 32]);
  });

  test("should merge sorted arrays", () => {
    expect(mergeArrays2([8, 11, 17, 20, 21], [1, 6, 10, 19, 32])).toEqual(
      [1, 6, 8, 10, 11, 17, 19, 20, 21, 32]);
  });

  test("should merge sorted arrays", () => {
    expect(mergeArrays([8, 11], [1, 6, 10, 19, 32])).toEqual(
      [1, 6, 8, 10, 11, 19, 32]);
  });

  test("should merge sorted arrays", () => {
    expect(mergeArrays2([8, 11], [1, 6, 10, 19, 32])).toEqual(
      [1, 6, 8, 10, 11, 19, 32]);
  });

  test("should merge sorted arrays", () => {
    expect(mergeArrays([1, 6, 10, 19, 32], [8, 11])).toEqual(
      [1, 6, 8, 10, 11, 19, 32]);
  });

  test("should merge sorted arrays", () => {
    expect(mergeArrays2([1, 6, 10, 19, 32], [8, 11])).toEqual(
      [1, 6, 8, 10, 11, 19, 32]);
  });

  test("should merge sorted arrays", () => {
    expect(mergeArrays([1, 6, 10, 19, 32], [])).toEqual(
      [1, 6, 10, 19, 32]);
  });

  test("should merge sorted arrays", () => {
    expect(mergeArrays2([1, 6, 10, 19, 32], [])).toEqual(
      [1, 6, 10, 19, 32]);
  });

  test("should merge sorted arrays", () => {
    expect(mergeArrays([], [1, 6, 10, 19, 32])).toEqual(
      [1, 6, 10, 19, 32]);
  });

  test("should merge sorted arrays", () => {
    expect(mergeArrays2([], [1, 6, 10, 19, 32])).toEqual(
      [1, 6, 10, 19, 32]);
  });
});
