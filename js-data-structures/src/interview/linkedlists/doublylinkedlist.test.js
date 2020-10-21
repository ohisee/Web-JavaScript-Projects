/**
 * @fileoverview JS linked list unit test 
 */
const { LinkedList } = require("./doublylinkedlist");

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
    expect(linkedList.head.previous).toEqual(null);
    expect(linkedList.tail.previous.value).toEqual(12);
    expect(linkedList.tail.next).toEqual(null);
    expect(linkedList.values()).toEqual([10, 12, 16]);
  });

  test("should do prepend", () => {
    /** @type {LinkedList<number>} */
    let linkedList = new LinkedList();
    linkedList.prepend(10).prepend(12).prepend(16);
    expect(linkedList.length).toEqual(3);
    expect(linkedList.head.previous).toEqual(null);
    expect(linkedList.head.value).toEqual(16);
    expect(linkedList.tail.previous.value).toEqual(12);
    expect(linkedList.tail.next).toEqual(null);
    expect(linkedList.values()).toEqual([16, 12, 10]);
  });

  test("should do insert", () => {
    /** @type {LinkedList<number>} */
    let linkedList = new LinkedList();
    linkedList.insert(0, 10);
    linkedList.insert(1, 12);
    linkedList.insert(1, 18);
    linkedList.insert(2, 16);
    linkedList.insert(2, 17);
    linkedList.insert(3, 20);
    expect(linkedList.length).toEqual(6);
    expect(linkedList.values()).toEqual([10, 18, 17, 20, 16, 12]);
  });

  test("should do remove", () => {
    /** @type {LinkedList<number>} */
    let linkedList = new LinkedList();
    expect(linkedList.length).toEqual(0);
    linkedList.remove(0);
    expect(linkedList.length).toEqual(0);
  });

  test("should do remove", () => {
    /** @type {LinkedList<number>} */
    let linkedList = new LinkedList();
    linkedList.insert(0, 10);
    expect(linkedList.length).toEqual(1);
    expect(linkedList.values()).toEqual([10]);
    linkedList.remove(0);
    expect(linkedList.length).toEqual(0);
  });

  test("should do remove first element", () => {
    /** @type {LinkedList<number>} */
    let linkedList = new LinkedList();
    linkedList.prepend(10).append(12).append(16)
      .append(18).append(20).append(21);
    expect(linkedList.length).toEqual(6);
    expect(linkedList.head.value).toEqual(10);
    expect(linkedList.tail.value).toEqual(21);
    linkedList.remove(0);
    linkedList.remove(1);
    linkedList.remove(2);
    expect(linkedList.head.value).toEqual(12);
    expect(linkedList.tail.value).toEqual(21);
    expect(linkedList.head.previous).toEqual(null);
    expect(linkedList.tail.next).toEqual(null);
    expect(linkedList.values()).toEqual([12, 18, 21]);
  });
});
