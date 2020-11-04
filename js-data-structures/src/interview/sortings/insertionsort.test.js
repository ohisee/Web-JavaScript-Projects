/**
 * @fileoverview JS insertion sort unit test 
 */
const { insertionSort, insertionSort2 } = require("./insertionsort");

describe("Inserting sort", () => {
  test("should be defined", () => {
    expect(insertionSort).toBeDefined();
  });

  test("should be defined", () => {
    expect(insertionSort2).toBeDefined();
  });

  test("should sort", () => {
    expect(insertionSort([0])).toEqual([0]);
  });

  test("should sort", () => {
    expect(insertionSort([8, 2])).toEqual([2, 8]);
  });

  test("should sort, O(n) time", () => {
    expect(insertionSort([1, 8, 9, 10, 12, 16, 20]))
      .toEqual([1, 8, 9, 10, 12, 16, 20]);
  });

  test("should sort", () => {
    expect(insertionSort([8, 1, 2, 3, 4, 5, 6, 7]))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("should sort", () => {
    expect(insertionSort([0, -1, 99, 48, 6, 2, 1, 5, 63, 87, 182, 4, 2]))
      .toEqual([-1, 0, 1, 2, 2, 4, 5, 6, 48, 63, 87, 99, 182]);
  });

  test("should sort", () => {
    expect(insertionSort2([0])).toEqual([0]);
  });

  test("should sort", () => {
    expect(insertionSort2([8, 2])).toEqual([2, 8]);
  });

  test("should sort", () => {
    expect(insertionSort2([1, 8, 9, 10, 12, 16, 20]))
      .toEqual([1, 8, 9, 10, 12, 16, 20]);
  });

  test("should sort", () => {
    expect(insertionSort2([8, 1, 2, 3, 4, 5, 6, 7]))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("should sort", () => {
    expect(insertionSort2([0, -1, 99, 48, 6, 2, 1, 5, 63, 87, 182, 4, 2]))
      .toEqual([-1, 0, 1, 2, 2, 4, 5, 6, 48, 63, 87, 99, 182]);
  });
});
