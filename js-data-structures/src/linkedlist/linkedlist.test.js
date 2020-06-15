/**
 * @fileoverview linked list unit test
 */
const { Node, LinkedList } = require('./index');

describe("Node and Linked list", () => {
  test("Node class constructor is defined", () => {
    expect(Node.prototype.constructor).toBeDefined();
  });

  test("Linked list class constructor is defined", () => {
    expect(LinkedList.prototype.constructor).toBeDefined();
  });
});

describe("Node", () => {
  test("Node data and next", () => {
    const node = new Node(12, "next item");
    expect(node.data).toEqual(12);
    expect(node.next).toEqual("next item");
  });
});

describe("Linked list should insert first", () => {
  test("Linked list should insert first", () => {
    const linkedList = new LinkedList();
    linkedList.insertFirst(1);
    expect(linkedList.head.data).toEqual(1);
    linkedList.insertFirst(2);
    expect(linkedList.head.data).toEqual(2);
    linkedList.insertFirst(3);
    expect(linkedList.head.data).toEqual(3);
  });
});

describe("Linked list should have last item", () => {
  test("Linked list should have last item", () => {
    const linkedList = new LinkedList();
    linkedList.insertFirst(1);
    expect(linkedList.head.data).toEqual(1);
    expect(linkedList.tail.data).toEqual(1);
    linkedList.insertFirst(2);
    linkedList.insertFirst(3);
    expect(linkedList.head.data).toEqual(3);
    expect(linkedList.tail.data).toEqual(1);
  });
});


describe("Linked list should return size", () => {
  test("Linked list should return size", () => {
    const linkedList = new LinkedList();
    expect(linkedList.size()).toEqual(0);
    linkedList.insertFirst(3);
    linkedList.insertFirst(3);
    linkedList.insertFirst(3);
    linkedList.insertFirst(3);
    linkedList.insertFirst(3);
    expect(linkedList.size()).toEqual(5);
  });
});

describe("Linked list should return first", () => {
  test("Linked list should return first", () => {
    const linkedList = new LinkedList();
    expect(linkedList.getFirst()).toBeNull();
    linkedList.insertFirst(20);
    expect(linkedList.getFirst().data).toEqual(20);
    linkedList.insertFirst(21);
    expect(linkedList.getFirst().data).toEqual(21);
  });
});

describe("Linked list should get last", () => {
  test("Linked list should get last", () => {
    const linkedList = new LinkedList();
    expect(linkedList.getLast()).toBeNull();
    linkedList.insertFirst(20);
    expect(linkedList.getLast()).toEqual({ data: 20, next: null });
    linkedList.insertFirst(21);
    expect(linkedList.getLast()).toEqual({ data: 20, next: null });
  });
});

describe("Linked list should do clear", () => {
  test("Linked list should do clear", () => {
    const linkedList = new LinkedList();
    linkedList.insertFirst(20);
    linkedList.insertFirst(21);
    linkedList.insertFirst(22);
    expect(linkedList.size()).toEqual(3);
    linkedList.clear();
    expect(linkedList.getFirst()).toBeNull();
    expect(linkedList.getLast()).toBeNull();
    expect(linkedList.size()).toEqual(0);
  });
});

describe("Linked list should remove first", () => {
  test("Linked list should remove first", () => {
    const linkedList = new LinkedList();
    linkedList.insertFirst(20);
    linkedList.insertFirst(21);
    linkedList.insertFirst(22);
    expect(linkedList.size()).toEqual(3);
    const node = linkedList.removeFirst();
    expect(linkedList.size()).toEqual(2);
    expect(node).toEqual({ data: 22, next: null });
    linkedList.removeFirst();
    linkedList.removeFirst();
    expect(linkedList.size()).toEqual(0);
    expect(linkedList.getFirst()).toBeNull();
    expect(linkedList.getLast()).toBeNull();
  });
});
