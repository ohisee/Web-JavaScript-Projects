/**
 * @fileoverview JS ES6 reflect unit test 
 */
const { Message, message } = require("./jsReflectConstruct1");
const { ListNode, listNode } = require("./jsReflectConstruct2");

describe("Test JavaScript reflect for Message type", () => {
  test("should be defined", () => {
    expect(message).toBeDefined();
  });

  test("should be an instance of", () => {
    expect(message instanceof Message).toEqual(true);
  });

  test("should have a title", () => {
    const params = {
      title: "Talker Walker",
      id: 100,
      description: "Collector"
    };
    expect(message.title).toBeDefined();
    expect(message.title).toEqual(params.title);
  });

  test("should have an id", () => {
    const params = {
      title: "Talker Walker",
      id: 100,
      description: "Collector"
    };
    expect(message.id).toBeDefined();
    expect(message.id).toEqual(params.id);
  });

  test("should have a description", () => {
    const params = {
      title: "Talker Walker",
      id: 100,
      description: "Collector"
    };
    expect(message.description).toBeDefined();
    expect(message.description).toEqual(params.description);
  });
});

describe("Test JavaScript reflect for ListNode type", () => {
  test("should be defined", () => {
    expect(listNode).toBeDefined();
  });

  test("should be an instance of", () => {
    expect(listNode instanceof ListNode).toEqual(true);
  });

  test("should have data", () => {
    expect(listNode.data).toEqual(2000);
  });

  test("list node next should be null", () => {
    expect(listNode.next).toBeNull();
  });

  test("should have previous", () => {
    expect(listNode.previous.data).toEqual(1);
    expect(listNode.previous.next).toEqual(null);
    expect(listNode.previous.previous).toEqual(null);
  });
});
