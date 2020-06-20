/**
 * @fileoverview mid point unit test
 */
const { LinkedList } = require('./linkedlist');
const { midpoint } = require('./index');

describe("Locate the linked list mid point", () => {
  test("Midpoint function defined", () => {
    expect(midpoint).toBeDefined();
  });

  test("Should return the mid point of odd numbered list", () => {
    const linkedList = new LinkedList();
    linkedList.insertLast("walker");
    expect(midpoint(linkedList).data).toEqual("walker");
  });

  test("Should return the mid point of odd numbered list", () => {
    const linkedList = new LinkedList();
    linkedList.insertLast("a");
    linkedList.insertLast("b");
    linkedList.insertLast("c");
    expect(midpoint(linkedList).data).toEqual("b");
  });

  test("Should return the mid point of odd numbered list", () => {
    const linkedList = new LinkedList();
    linkedList.insertLast("a");
    linkedList.insertLast("b");
    linkedList.insertLast("c");
    linkedList.insertLast("d");
    linkedList.insertLast("e");
    expect(midpoint(linkedList).data).toEqual("c");
  });

  test("Should return the mid point of even numbered list", () => {
    const linkedList = new LinkedList();
    linkedList.insertLast("a");
    linkedList.insertLast("b");
    linkedList.insertLast("c");
    linkedList.insertLast("d");
    expect(midpoint(linkedList).data).toEqual("b");
  });

  test("Should return the mid point of even numbered list", () => {
    const linkedList = new LinkedList();
    linkedList.insertLast("walker");
    linkedList.insertLast("talker");
    expect(midpoint(linkedList).data).toEqual("walker");
  });
});
