/**
 * @fileoverview proxy unit test 
 */
const { proxy, revoke } = require("./jsRevocableProxy");

describe("Revocable proxy test", () => {
  test("Proxy should be defined", () => {
    expect(proxy).toBeDefined();
  });

  test("Proxy revoke function should be defined", () => {
    expect(revoke).toBeDefined();
  });

  test("should print name", () => {
    expect(proxy.name).toEqual("watchman");
  });

  test("should print name", () => {
    expect(proxy.name).not.toEqual("something else");
  });

  test("should throw exception", () => {
    expect(() => {
      revoke();
      proxy.name
    }).toThrowError("Cannot perform 'get' on a proxy that has been revoked");
  });
});
