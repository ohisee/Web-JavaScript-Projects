/**
 * @fileoverview unit test merge strings 
 */
const { mergeStrings, mergeStrings2 } = require("./mergestrings");

describe("Merge two strings", () => {

  test("should merge two strings", () => {
    expect(mergeStrings("abc", "123")).toEqual("a1b2c3");
  });

  test("should merge two strings", () => {
    expect(mergeStrings("how", "world")).toEqual("hwoowrld");
  });

  test("should merge two strings", () => {
    expect(mergeStrings("world", "how")).toEqual("whoorwld");
  });

  test("should merge two strings", () => {
    expect(mergeStrings("", "world")).toEqual("world");
  });

  test("should merge two strings", () => {
    expect(mergeStrings("world", "")).toEqual("world");
  });

  test("should merge two strings", () => {
    expect(mergeStrings2("abc", "123")).toEqual("a1b2c3");
  });

  test("should merge two strings", () => {
    expect(mergeStrings2("how", "world")).toEqual("hwoowrld");
  });

  test("should merge two strings", () => {
    expect(mergeStrings2("world", "how")).toEqual("whoorwld");
  });

  test("should merge two strings", () => {
    expect(mergeStrings2("", "world")).toEqual("world");
  });

  test("should merge two strings", () => {
    expect(mergeStrings2("world", "")).toEqual("world");
  });

});
