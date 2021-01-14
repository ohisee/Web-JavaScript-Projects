/**
 * @fileoverview unit test 
 */
const {
  newArr1,
  newArr2,
  insideArr,
  notInsideArr,
  shouldBeFalse,
  shouldBeTrue,
  elInArray1,
  elInArray2,
  elInArray3,
  reducedResult } = require("./jsArrays");

require("./jsArrays"); // to import Array.prototype.simpleCompare  

describe("arrays unit test", () => {
  test("should contain new elements", () => {
    expect(newArr1).toEqual(["b", "b", "b", "b", "b", "b", "b"]);
  });

  test("should contain new elements", () => {
    expect(newArr2).toEqual([5, 6, 7]);
  });

  test("should be inside array", () => {
    expect(insideArr).toEqual(true);
  });

  test("should not be inside array", () => {
    expect(notInsideArr).toEqual(false);
  });

  test("compare elements in array by new value", () => {
    expect(shouldBeFalse).toEqual(false);
  });

  test("compare elements in array by reference", () => {
    expect(shouldBeTrue).toEqual(true);
  });

  test("should find one element in array", () => {
    expect(elInArray1).toEqual(5);
  });

  test("should find one element in array", () => {
    expect(elInArray2).toEqual(5);
  });

  test("should find one element in array", () => {
    expect(elInArray3).toEqual({ id: 2 });
  });

  test("should reduce to one result", () => {
    expect(reducedResult).toEqual(28);
  });

  test("simple compare arrays", () => {
    expect([1, 2, 3, 4, 5, 6].simpleCompare([1, 2, 3, 4, 5, 6])).toEqual(true);
  });

  test("simple compare arrays", () => {
    expect([1, 2, 3, 1, 1, 1].simpleCompare([1, 2, 3, 4, 5, 6])).toEqual(false);
  });
});
