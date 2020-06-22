/**
 * @fileoverview circular linked list unit test
 */
const { circular } = require("./index");
const { LinkedList, Node } = require("./linkedlist");

describe("Cirular list check", () => {
  test("Circular function is defined", () => {
    expect(circular).toBeDefined();
  });

  test("Should detect a circular linked list", () => {
    const linkedlist = new LinkedList();
    let a = new Node("a");
    let b = new Node("b");
    let c = new Node("c");
    linkedlist.head = a;
    a.next = b;
    b.next = c;
    c.next = b;
    expect(circular(linkedlist)).toEqual(true);
  });

  test("Should detect a circular linked list", () => {
    const linkedlist = new LinkedList();
    let a = new Node("a");
    let b = new Node("b");
    let c = new Node("c");
    linkedlist.head = a;
    a.next = b;
    b.next = c;
    c.next = a;
    expect(circular(linkedlist)).toEqual(true);
  });

  test("Should detect a circular linked list", () => {
    const linkedlist = new LinkedList();
    let a = new Node("a");
    let b = new Node("b");
    let c = new Node("c");
    let d = new Node("d");
    let e = new Node("e");
    linkedlist.head = a;
    a.next = b;
    b.next = c;
    c.next = d;
    d.next = e;
    e.next = d;
    expect(circular(linkedlist)).toEqual(true);
  });

  test("Should detect not a circular linked list", () => {
    const linkedlist = new LinkedList();
    let a = new Node("a");
    let b = new Node("b");
    let c = new Node("c");
    linkedlist.head = a;
    a.next = b;
    b.next = c;
    c.next = null;
    expect(circular(linkedlist)).toEqual(false);
  });
});
