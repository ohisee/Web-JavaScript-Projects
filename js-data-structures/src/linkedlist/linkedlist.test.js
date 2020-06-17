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

describe("Linked list should remove last", () => {
  test("Linked list should remove last of empty list", () => {
    const linkedList = new LinkedList();
    expect(() => {
      linkedList.removeLast();
    }).not.toThrow();
  });

  test("Linked list should remove last", () => {
    const linkedList = new LinkedList();
    linkedList.insertFirst("walker");
    const el = linkedList.removeLast();
    expect(linkedList.size()).toEqual(0);
    expect(linkedList.getFirst()).toEqual(null);
    expect(linkedList.getLast()).toEqual(null);
    expect(el).toEqual({ data: "walker", next: null });
  });

  test("Linked list should remove last", () => {
    const linkedList = new LinkedList();
    linkedList.insertFirst("walker");
    linkedList.insertFirst("talker");
    const el = linkedList.removeLast();
    expect(linkedList.size()).toEqual(1);
    expect(linkedList.getFirst().data).toEqual("talker");
    expect(el).toEqual({ data: "walker", next: null });
  });

  test("Linked list should remove last", () => {
    const linkedList = new LinkedList();
    linkedList.insertFirst("c");
    linkedList.insertFirst("b");
    linkedList.insertFirst("a");
    const el = linkedList.removeLast();
    expect(linkedList.size()).toEqual(2);
    expect(linkedList.getLast().data).toEqual("b");
    expect(el).toEqual({ data: "c", next: null });
  });
});

describe("Linked list should insert last", () => {
  test("Linked list should insert last", () => {
    const linkedList = new LinkedList();
    linkedList.insertFirst("walker");
    expect(linkedList.size()).toEqual(1);
    linkedList.insertLast("talker");
    expect(linkedList.size()).toEqual(2);
    expect(linkedList.getLast().data).toEqual("talker");
  });
});

describe("Linked list should get at an index", () => {
  test("Linked list should get at an index", () => {
    const linkedList = new LinkedList();
    expect(linkedList.getAt(0)).toEqual(null);
    expect(linkedList.getAt(1)).toEqual(null);
    linkedList.insertLast(1);
    linkedList.insertLast(2);
    linkedList.insertLast(3);
    linkedList.insertLast(4);
    linkedList.insertLast(5);
    linkedList.insertLast(6);
    expect(linkedList.getAt(0).data).toEqual(1);
    expect(linkedList.getAt(1).data).toEqual(2);
    expect(linkedList.getAt(2).data).toEqual(3);
    expect(linkedList.getAt(3).data).toEqual(4);
    expect(linkedList.getAt(4).data).toEqual(5);
    expect(linkedList.getAt(5).data).toEqual(6);
    expect(linkedList.getAt(19)).toEqual(null);
  });
});

describe("Linked list should remove at an index", () => {
  test("Linked list should remove at an index of empty list", () => {
    const linkedList = new LinkedList();
    expect(() => {
      linkedList.removeAt(0);
      linkedList.removeAt(1);
      linkedList.removeAt(2);
    }).not.toThrow();
  });

  test("Linked list should remove at out of bound index", () => {
    const linkedList = new LinkedList();
    expect(() => {
      linkedList.insertFirst("talker");
      linkedList.removeAt(1);
    }).not.toThrow();
  });

  test("Linked list should remove at an index", () => {
    const linkedList = new LinkedList();
    expect(linkedList.getAt(0)).toEqual(null);
  });

  test("Linked list should remove at an index", () => {
    const linkedList = new LinkedList();
    linkedList.insertLast(1);
    expect(linkedList.getAt(0).data).toEqual(1);
    linkedList.removeAt(0);
    expect(linkedList.getAt(0)).toEqual(null);
  });

  test("Linked list should remove at an index", () => {
    const linkedList = new LinkedList();
    linkedList.insertLast(1);
    linkedList.insertLast(2);
    linkedList.insertLast(3);
    linkedList.insertLast(4);
    linkedList.insertLast(5);
    linkedList.insertLast(6);
    linkedList.insertLast(7);
    expect(linkedList.getAt(0).data).toEqual(1);
    linkedList.removeAt(0);
    expect(linkedList.getAt(0).data).toEqual(2);
    linkedList.removeAt(0);
    expect(linkedList.getAt(0).data).toEqual(3);
    linkedList.removeAt(0);
    expect(linkedList.getAt(0).data).toEqual(4);
    linkedList.removeAt(0);
    expect(linkedList.getAt(0).data).toEqual(5);
    linkedList.removeAt(0);
    expect(linkedList.getAt(0).data).toEqual(6);
    linkedList.removeAt(0);
    expect(linkedList.getAt(0).data).toEqual(7);
  });

  test("Linked list should remove at an index", () => {
    const linkedList = new LinkedList();
    linkedList.insertLast(1);
    linkedList.insertLast(2);
    linkedList.insertLast(3);
    linkedList.insertLast(4);
    linkedList.insertLast(5);
    linkedList.insertLast(6);
    linkedList.insertLast(7);
    expect(linkedList.getAt(1).data).toEqual(2);
    linkedList.removeAt(1);
    expect(linkedList.getAt(1).data).toEqual(3);
  });

  test("Linked list should remove at an index", () => {
    const linkedList = new LinkedList();
    linkedList.insertLast(1);
    linkedList.insertLast(2);
    linkedList.insertLast(3);
    linkedList.insertLast(4);
    linkedList.insertLast(5);
    linkedList.insertLast(6);
    linkedList.insertLast(7);
    expect(linkedList.getAt(3).data).toEqual(4);
    linkedList.removeAt(3);
    expect(linkedList.getAt(30)).toEqual(null);
  });
});
