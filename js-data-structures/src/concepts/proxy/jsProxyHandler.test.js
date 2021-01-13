/**
 * @fileoverview proxy unit test 
 */
const { functionProxy } = require("./jsProxyHandler");

describe("Function proxy test", () => {
  test("function proxy should be defined", () => {
    expect(functionProxy).toBeDefined;
  });

  test("should print log", () => {
    const str = "start logging";
    expect(functionProxy(str)).toEqual(`Log entry created ${str}`);
  });

  test("should be undefined", () => {
    const str = "start logging";
    expect(functionProxy(str, 100)).toEqual(undefined);
  });
});
