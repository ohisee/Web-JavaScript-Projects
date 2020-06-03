/**
 * @fileoverview matrix spirals unit test
 */
const { matrix } = require("./index");

describe("Matrix spirals", () => {

  test('Function is defined', () => {
    expect(matrix).toBeDefined();
  });

  test('Should create matrix spirals', () => {
    const result = matrix(1);
    expect(result.length).toEqual(1);
    expect(result[0]).toEqual([1]);
  });

  test('Should create matrix spirals', () => {
    const result = matrix(2);
    expect(result.length).toEqual(2);
    expect(result[0]).toEqual([1, 2]);
    expect(result[1]).toEqual([4, 3]);
  });

  test('Should create matrix spirals', () => {
    const result = matrix(3);
    expect(result.length).toEqual(3);
    expect(result[0]).toEqual([1, 2, 3]);
    expect(result[1]).toEqual([8, 9, 4]);
    expect(result[2]).toEqual([7, 6, 5]);
  });

  test('Should create matrix spirals', () => {
    const result = matrix(4);
    expect(result.length).toEqual(4);
    expect(result[0]).toEqual([1, 2, 3, 4]);
    expect(result[1]).toEqual([12, 13, 14, 5]);
    expect(result[2]).toEqual([11, 16, 15, 6]);
    expect(result[3]).toEqual([10, 9, 8, 7]);
  });

  test('Should create matrix spirals', () => {
    const result = matrix(5);
    expect(result.length).toEqual(5);
    expect(result[0]).toEqual([1, 2, 3, 4, 5]);
    expect(result[1]).toEqual([16, 17, 18, 19, 6]);
    expect(result[2]).toEqual([15, 24, 25, 20, 7]);
    expect(result[3]).toEqual([14, 23, 22, 21, 8]);
    expect(result[4]).toEqual([13, 12, 11, 10, 9]);
  });
});
