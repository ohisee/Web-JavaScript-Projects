/**
 * @fileoverview JS quick sort unit test 
 */
const { partitionByPivot, quickSort } = require("./quicksort");

describe("Quick sort", () => {
  test("should be defined", () => {
    expect(partitionByPivot).toBeDefined();
  });

  test("should be defined", () => {
    expect(quickSort).toBeDefined();
  });

  test("should partition array by pivot", () => {
    let arr = [20, 11, 5, 7, 6, 9, 8];
    const pivotIndex = partitionByPivot(arr, 0, arr.length - 1);
    expect(pivotIndex).toEqual(3);
    expect(arr).toEqual([5, 7, 6, 8, 20, 9, 11]);
  });

  test("should partition array by pivot", () => {
    let arr = [1, 10, 12, 8, 9, 3, 5, 20, 2];
    const pivotIndex = partitionByPivot(arr, 0, arr.length - 1);
    expect(pivotIndex).toEqual(1);
    expect(arr).toEqual([1, 2, 12, 8, 9, 3, 5, 20, 10]);
  });

  test("should sort", () => {
    let t = [8, 2];
    expect(quickSort(t, 0, t.length - 1)).toEqual([2, 8]);
  });

  test("should sort", () => {
    let t = [1, 8, 9, 10, 12, 16, 20];
    expect(quickSort(t, 0, t.length - 1)).toEqual([1, 8, 9, 10, 12, 16, 20]);
  });

  test("should sort", () => {
    let t = [8, 1, 2, 3, 4, 5, 6, 7];
    expect(quickSort(t, 0, t.length - 1)).toEqual([1, 2, 3, 4, 5, 6, 7, 8]);
  });

  test("should sort", () => {
    let t = [0, -1, 99, 48, 6, 2, 1, 5, 63, 87, 182, 4, 2];
    expect(quickSort(t, 0, t.length - 1))
      .toEqual([-1, 0, 1, 2, 2, 4, 5, 6, 48, 63, 87, 99, 182]);
  });
});
