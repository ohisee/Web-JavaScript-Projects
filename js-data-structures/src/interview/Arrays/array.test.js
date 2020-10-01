/**
 * @fileoverview array unit test 
 */

const { MyArray } = require("./array");

describe("MyArray", () => {
  test("MyArray class should have a constructor", () => {
    expect(MyArray.prototype.constructor).toBeDefined();
  });

  test("MyArray should create an instance", () => {
    expect(() => {
      new MyArray();
    }).not.toThrow();
  });

  test("MyArray should be able to do push", () => {
    const myArray = new MyArray();
    let result = myArray.push("walker");
    expect(result).toEqual(1);
    result = myArray.push("talker");
    expect(result).toEqual(2);
    expect(myArray.data).toEqual({ 0: "walker", 1: "talker" });
  });

  test("MyArray should be able to do pop", () => {
    const myArray = new MyArray();
    myArray.push("walker");
    myArray.push("talker");
    myArray.push("one");
    let result = myArray.pop();
    expect(result).toEqual("one");
    expect(myArray.length).toEqual(2);
    expect(myArray.data).toEqual({ 0: "walker", 1: "talker" });
    myArray.pop();
    myArray.pop();
    expect(myArray.length).toEqual(0);
  });

  test("MyArray should be able to do delete", () => {
    const myArray = new MyArray();
    myArray.push("hi");
    myArray.push("how");
    myArray.push("remove");
    myArray.push("one");
    myArray.push("two");
    let result = myArray.delete(2);
    expect(result).toEqual("remove");
    expect(myArray.data).toEqual({
      0: "hi", 1: "how", 2: "one", 3: "two",
    });
    result = myArray.delete(0);
    expect(result).toEqual("hi");
    expect(myArray.length).toEqual(3);
    expect(myArray.data).toEqual({
      0: "how", 1: "one", 2: "two",
    });
  });

  test("MyArray for loop", () => {
    const myArray = new MyArray();
    const els = ["hi", "how", "one", "two", "three"];
    els.forEach(d => myArray.push(d));
    for (let item of myArray) {
      expect(item).toEqual(els.shift());
    }
    expect(els.length).toEqual(0);
  });
});
