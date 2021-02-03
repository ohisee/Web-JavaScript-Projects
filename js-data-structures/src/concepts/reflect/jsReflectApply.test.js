/**
 * @fileoverview JS ES6 reflect apply unit test 
 */
const { messageReflect } = require("./jsReflectApply");

describe("Reflect apply", () => {
  test("should be defined", () => {
    expect(messageReflect).toBeDefined();
  });

  test("should do reflect", () => {
    let result = Reflect.apply(messageReflect.greet, messageReflect, []);
    expect(result).toEqual("message title is new title");
  });

  test("should do reflect", () => {
    let result = Reflect.apply(messageReflect.greetPrefix,
      messageReflect, ["Prefix"]);
    expect(result).toEqual("Prefix message id 100");
  });

  test("should do reflect", () => {
    let result = Reflect.apply(messageReflect.greet, {}, []);
    expect(result).toEqual("message title is undefined");
  });

  test("should do reflect", () => {
    let result = Reflect.apply(messageReflect.getTitle, {}, []);
    expect(result).toEqual(undefined);
  });

  test("should do reflect", () => {
    let result = Reflect.apply(messageReflect.getId, {}, []);
    expect(result).toEqual(undefined);
  });

  test("should do reflect", () => {
    let result = Reflect.apply(messageReflect.greet, { title: "New Name" }, []);
    expect(result).toEqual("message title is New Name");
  });

  test("should do reflect", () => {
    let result = Reflect.apply(messageReflect.getId, { id: 19000 }, []);
    expect(result).toEqual(19000);
  });

  test("should do reflect", () => {
    let result = Reflect.apply(messageReflect.getTitle, { title: "new car" }, []);
    expect(result).toEqual("new car");
  });

  test("should do reflect", () => {
    let result = Reflect.apply(messageReflect.greetPrefix,
      { id: 120 }, ["here is a new prefix"]
    );
    expect(result).toEqual("here is a new prefix message id 120");
  });
});
