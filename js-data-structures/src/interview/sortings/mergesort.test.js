/**
 * @fileoverview JS merge sort unit test 
 */
const { mergeSort, merge, merge2 } = require("./mergesort");

describe("Merge sort", () => {
  test("should be defined", () => {
    expect(mergeSort).toBeDefined();
  });

  test("should be defined", () => {
    expect(merge).toBeDefined();
  });

  test("should be defined", () => {
    expect(merge2).toBeDefined();
  });

  test("should do merge", () => {
    expect(merge([2, 4, 6, 8, 10], [1, 3, 5, 7, 9]))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  });

  test("should do merge", () => {
    expect(merge2([1, 2, 4, 6, 8, 10], [1, 3, 5, 7, 9]))
      .toEqual([1, 1, 2, 3, 4, 5, 6, 7, 8, 9, 10])
  });

  test("should sort", () => {
    expect(mergeSort([0])).toEqual([0]);
  });

  test("should sort", () => {
    expect(mergeSort([8, 2])).toEqual([2, 8]);
  });

  test("should sort", () => {
    expect(mergeSort([1, 8, 9, 10, 12, 16, 20]))
      .toEqual([1, 8, 9, 10, 12, 16, 20]);
  });

  test("should sort", () => {
    expect(mergeSort([8, 1, 2, 3, 4, 5, 6, 7]))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("should sort", () => {
    expect(mergeSort([0, -1, 99, 48, 6, 2, 1, 5, 63, 87, 182, 4, 2]))
      .toEqual([-1, 0, 1, 2, 2, 4, 5, 6, 48, 63, 87, 99, 182]);
  });
});
