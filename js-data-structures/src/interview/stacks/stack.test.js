/**
 * @fileoverview Js stack unit test 
 */
const { Stack } = require("./stack");

describe("Stack", () => {
  test("Stack class should be defined", () => {
    expect(Stack.prototype.constructor).toBeDefined();
  });

  test("Stack class should be able to create instance", () => {
    expect(() => {
      new Stack();
    }).not.toThrow();
  });

  test("should do push and pop", () => {
    /** @type {Stack<string>} */
    let stack = new Stack();
    stack.push("yahoo.com");
    stack.push("youtube.com");
    stack.push("investing.com");
    expect(stack.length).toEqual(3);
    expect(stack.pop()).toEqual("investing.com");
    expect(stack.pop()).toEqual("youtube.com");
    expect(stack.pop()).toEqual("yahoo.com");
    expect(stack.length).toEqual(0);
  });

  test("should do pop", () => {
    /** @type {Stack<string>} */
    let stack = new Stack();
    stack.push("yahoo.com");
    stack.push("youtube.com");
    stack.push("investing.com");
    expect(stack.length).toEqual(3);
    expect(stack.pop()).toEqual("investing.com");
    expect(stack.pop()).toEqual("youtube.com");
    expect(stack.pop()).toEqual("yahoo.com");
    expect(stack.top).toEqual(null);
    expect(stack.bottom).toEqual(null);
  });

  test("should do peek", () => {
    /** @type {Stack<string>} */
    let stack = new Stack();
    stack.push("yahoo.com");
    stack.push("youtube.com");
    stack.push("investing.com");
    expect(stack.length).toEqual(3);
    expect(stack.peek()).toEqual("investing.com");
  });

  test("should do peek empty stack", () => {
    /** @type {Stack<string>} */
    let stack = new Stack();
    expect(stack.peek()).toEqual(undefined);
  });

  test("should do pop empty stack", () => {
    /** @type {Stack<string>} */
    let stack = new Stack();
    expect(stack.pop()).toEqual(undefined);
  });
});
