/**
 * @fileoverview bubble sort unit test
 */
const { bubblesort } = require("./bubblesort");
const { selectionSort } = require("./selectionsort");
const { merge, mergeUsingArrayShift, mergeSort } = require("./mergesort");

describe("Sorting algorithm", () => {
  describe("Bubble sort", () => {
    test("function should be defined", () => {
      expect(bubblesort).toBeDefined();
    });

    test("Should sort array", () => {
      expect(bubblesort([100, -40, 500, -124, 0, 21, 7]))
        .toEqual([-124, -40, 0, 7, 21, 100, 500]);
    });
  });

  describe("Selection sort", () => {
    test("function should be defined", () => {
      expect(selectionSort).toBeDefined();
    });

    test("Should sort array", () => {
      expect(selectionSort([100, -40, 500, -124, 0, 21, 7]))
        .toEqual([-124, -40, 0, 7, 21, 100, 500]);
    });
  });

  describe("Merge sort", () => {
    test("function should be defined", () => {
      expect(merge).toBeDefined();
      expect(mergeSort).toBeDefined();
    });

    test("Should merge arrays", () => {
      expect(merge([1, 3, 5, 7, 9], [2, 4, 6, 8, 10, 11]))
        .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });

    test("Should merge arrays", () => {
      expect(mergeUsingArrayShift([1, 3, 5, 7, 9], [2, 4, 6, 8, 10, 11]))
        .toEqual([1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11]);
    });

    test("Should sort array", () => {
      expect(mergeSort([100, -40, 500, -124, 0, 21, 7]))
        .toEqual([-124, -40, 0, 7, 21, 100, 500]);
    });
  });
});
