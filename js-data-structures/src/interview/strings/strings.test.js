/**
 * @fileoverview reverse string test 
 */
const {
  reverseUsingString,
  reverseUsingArray1,
  reverseUsingArray2,
  reverseUsingArray3 } = require("./strings");

describe("Test reverse string", () => {
  test("Test reverse string", () => {
    expect(reverseUsingString("")).toEqual("");
  });

  test("Test reverse string", () => {
    expect(reverseUsingArray1("")).toEqual("");
  });

  test("Test reverse string", () => {
    expect(reverseUsingArray2("")).toEqual("");
  });

  test("Test reverse string", () => {
    expect(reverseUsingArray3("")).toEqual("");
  });

  test("Test reverse string", () => {
    expect(reverseUsingString("jhmbbbasd98871pi")).toEqual("ip17889dsabbbmhj");
  });

  test("Test reverse string", () => {
    expect(reverseUsingArray1("jhmbbbasd98871pi")).toEqual("ip17889dsabbbmhj");
  });

  test("Test reverse string", () => {
    expect(reverseUsingArray2("jhmbbbasd98871pi")).toEqual("ip17889dsabbbmhj");
  });

  test("Test reverse string", () => {
    expect(reverseUsingArray3("jhmbbbasd98871pi")).toEqual("ip17889dsabbbmhj");
  });

  test("Test reverse string", () => {
    expect(reverseUsingString("hello today is a good day - reverse"))
      .toEqual("esrever - yad doog a si yadot olleh");
  });

  test("Test reverse string", () => {
    expect(reverseUsingArray1("hello today is a good day - reverse"))
      .toEqual("esrever - yad doog a si yadot olleh");
  });

  test("Test reverse string", () => {
    expect(reverseUsingArray2("hello today is a good day - reverse"))
      .toEqual("esrever - yad doog a si yadot olleh");
  });

  test("Test reverse string", () => {
    expect(reverseUsingArray3("hello today is a good day - reverse"))
      .toEqual("esrever - yad doog a si yadot olleh");
  });
});
