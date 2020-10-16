/**
 * @fileoverview JS linked list unit test
 */
const { LinkedList } = require("./linkedlist");

describe("Linked list", () => {
  test("Linked list class should be defined", () => {
    expect(LinkedList.prototype.constructor).toBeDefined();
  });

  test("Linked list class should be able to create instance", () => {
    expect(() => {
      new LinkedList();
    }).not.toThrow();
  });

  test("should do append", () => {
    /** @type {LinkedList<number>} */
    let linkedList = new LinkedList();
    linkedList.append(10).append(12).append(16);
    expect(linkedList.length).toEqual(3);
    expect(linkedList.head.value).toEqual(10);
    expect(linkedList.head.next.value).toEqual(12);
    expect(linkedList.head.next.next.value).toEqual(16);
    expect(linkedList.tail.value).toEqual(16);
    expect(linkedList.tail.next).toEqual(null);
  });

  test("should do prepend", () => {
    /** @type {LinkedList<number>} */
    let linkedList = new LinkedList();
    linkedList.prepend(10).prepend(16).prepend(18);
    expect(linkedList.length).toEqual(3);
    expect(linkedList.head.value).toEqual(18);
    expect(linkedList.head.next.value).toEqual(16);
    expect(linkedList.head.next.next.value).toEqual(10);
    expect(linkedList.tail.value).toEqual(10);
    expect(linkedList.tail.next).toEqual(null);
  });

  test("should do insert", () => {
    /** @type {LinkedList<number>} */
    let linkedList = new LinkedList();
    linkedList.prepend(10).append(12);
    linkedList.insert(0, 16);
    linkedList.insert(1, 18);
    linkedList.insert(3, 20);
    linkedList.insert(10, 21);
    expect(linkedList.length).toEqual(6);
    expect(linkedList.head.value).toEqual(16);
    expect(linkedList.tail.value).toEqual(21);
    expect(linkedList.tail.next).toEqual(null);
    expect(linkedList.values()).toEqual([16, 18, 10, 20, 12, 21]);
  });
});
