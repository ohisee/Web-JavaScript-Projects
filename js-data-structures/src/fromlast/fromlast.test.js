/**
 * @fileoverview from last of linked list unit test
 */
const { LinkedList } = require("./linkedlist");
const { fromLast } = require("./index");

describe("From last of linked list", () => {
  test("From last function is defined", () => {
    expect(fromLast).toBeDefined();
  });

  test("Should return one element from last of linked list", () => {
    const linkedlist = new LinkedList();
    linkedlist.insertLast("a");
    linkedlist.insertLast("b");
    linkedlist.insertLast("c");
    linkedlist.insertLast("d");
    linkedlist.insertLast("e");
    linkedlist.insertLast("f");
    linkedlist.insertLast("g");
    expect(fromLast(linkedlist, 2).data).toEqual("e");
  });

  test("Should return one element from last of linked list", () => {
    const linkedlist = new LinkedList();
    linkedlist.insertLast("a");
    linkedlist.insertLast("b");
    linkedlist.insertLast("c");
    linkedlist.insertLast("d");
    linkedlist.insertLast("e");
    linkedlist.insertLast("f");
    linkedlist.insertLast("g");
    expect(fromLast(linkedlist, 5).data).toEqual("b");
  });
});
