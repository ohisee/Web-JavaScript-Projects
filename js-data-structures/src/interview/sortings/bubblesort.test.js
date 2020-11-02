/**
 * @fileoverview JS bubble sort unit test 
 */
const { bubbleSort, bubbleSortUsingComparator, bubbleSortCheckSwap } = require("./bubblesort");

describe("Bubble sort function", () => {
  test("should be defined", () => {
    expect(bubbleSort).toBeDefined();
  });

  test("should be defined", () => {
    expect(bubbleSortCheckSwap).toBeDefined();
  });

  test("should sort", () => {
    expect(bubbleSort([0])).toEqual([0]);
  });

  test("should sort", () => {
    expect(bubbleSort([8, 2])).toEqual([2, 8]);
  });

  test("should sort", () => {
    expect(bubbleSort([1, 8, 9, 10, 12, 16, 20]))
      .toEqual([1, 8, 9, 10, 12, 16, 20]);
  });

  test("should sort", () => {
    expect(bubbleSort([8, 1, 2, 3, 4, 5, 6, 7]))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("should sort", () => {
    expect(bubbleSort([0, -1, 99, 48, 6, 2, 1, 5, 63, 87, 182, 4, 0])).toEqual(
      [-1, 0, 0, 1, 2, 4, 5, 6, 48, 63, 87, 99, 182]
    );
  });

  test("should do swap check when sorting", () => {
    expect(bubbleSortCheckSwap([8, 1, 2, 3, 4, 5, 6, 7]))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("should do swap check when sorting", () => {
    expect(bubbleSortCheckSwap([10, 9, 8, 1, 2, 3, 4, 5, 6, 7]))
      .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  });
});

describe("Bubble sort using comparator function", () => {
  test("should be defined", () => {
    expect(bubbleSortUsingComparator).toBeDefined();
  });

  test("should sort", () => {
    expect(bubbleSortUsingComparator([0], (a, b) => a - b)).toEqual([0]);
  });

  test("should sort", () => {
    expect(bubbleSortUsingComparator([8, 2], (a, b) => a - b)).toEqual([2, 8]);
  });

  test("should sort", () => {
    expect(bubbleSortUsingComparator(
      [0, -1, 99, 48, 6, 2, 1, 5, 63, 87, 182, 4, 0],
      (a, b) => a - b)).toEqual([-1, 0, 0, 1, 2, 4, 5, 6, 48, 63, 87, 99, 182]);
  });

  test("should sort", () => {
    expect(bubbleSortUsingComparator(
      ["b", "c", "d"],
      (a, b) => a.localeCompare(b))).toEqual(["b", "c", "d"]);
  });

  test("should sort", () => {
    expect(bubbleSortUsingComparator(
      ["how", "are", "you"],
      (a, b) => a.localeCompare(b))).toEqual(["are", "how", "you"]);
  });
});
