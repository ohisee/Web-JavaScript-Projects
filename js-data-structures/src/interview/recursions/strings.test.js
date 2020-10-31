/**
 * @fileoverview JS strings unit test 
 */
const { reverseStringRecursive } = require("./strings");

describe("Recursive reverse string function", () => {
  test("should be defined", () => {
    expect(reverseStringRecursive).toBeDefined();
  });

  test("should reverser string", () => {
    expect(reverseStringRecursive("")).toEqual("");
  });

  test("should reverser string", () => {
    expect(reverseStringRecursive("e")).toEqual("e");
  });

  test("should reverser string", () => {
    expect(reverseStringRecursive("abc dfe")).toEqual("efd cba");
  });

  test("should reverser string", () => {
    expect(reverseStringRecursive("how are you")).toEqual("uoy era woh");
  });

  test("should reverser string", () => {
    expect(reverseStringRecursive("jhmbbbasd98871pi")).toEqual("ip17889dsabbbmhj");
  });


  test("hould reverser string", () => {
    expect(reverseStringRecursive("hello today is a good day - reverse"))
      .toEqual("esrever - yad doog a si yadot olleh");
  });
});
