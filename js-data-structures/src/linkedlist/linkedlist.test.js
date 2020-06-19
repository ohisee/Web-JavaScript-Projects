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

describe("Linked list should insert at an index", () => {
  test("Linked list should insert in one empty list", () => {
    const linkedList = new LinkedList();
    linkedList.insertAt("walker", 0);
    expect(linkedList.getFirst().data).toEqual("walker");
  });

  test("Linked list should insert at an index", () => {
    const linkedList = new LinkedList();
    linkedList.insertAt("start", 0);
    expect(linkedList.getAt(0).data).toEqual("start");
    linkedList.insertAt("walker", 0);
    expect(linkedList.getAt(0).data).toEqual("walker");
    expect(linkedList.getAt(1).data).toEqual("start");
  });

  test("Linked list should insert at an index at start", () => {
    const linkedList = new LinkedList();
    linkedList.insertLast("a");
    linkedList.insertLast("b");
    linkedList.insertLast("c");
    linkedList.insertAt("start", 0);
    expect(linkedList.getAt(0).data).toEqual("start");
    expect(linkedList.getAt(1).data).toEqual("a");
    expect(linkedList.getAt(2).data).toEqual("b");
    expect(linkedList.getAt(3).data).toEqual("c");
  });

  test("Linked list should insert at an index at middle", () => {
    const linkedList = new LinkedList();
    linkedList.insertLast("a");
    linkedList.insertLast("b");
    linkedList.insertLast("c");
    linkedList.insertLast("d");
    linkedList.insertAt("mid", 2);
    expect(linkedList.getAt(0).data).toEqual("a");
    expect(linkedList.getAt(1).data).toEqual("b");
    expect(linkedList.getAt(2).data).toEqual("mid");
    expect(linkedList.getAt(3).data).toEqual("c");
    expect(linkedList.getAt(4).data).toEqual("d");
  });

  test("Linked list should insert at an index at last", () => {
    const linkedList = new LinkedList();
    linkedList.insertLast("a");
    linkedList.insertLast("b");
    linkedList.insertAt("talker", 2);
    expect(linkedList.getAt(0).data).toEqual("a");
    expect(linkedList.getAt(1).data).toEqual("b");
    expect(linkedList.getAt(2).data).toEqual("talker");
  });

  test("Linked list should insert at an index out of bounds", () => {
    const linkedList = new LinkedList();
    linkedList.insertLast("a");
    linkedList.insertLast("b");
    linkedList.insertAt("talker", 20);
    expect(linkedList.getAt(0).data).toEqual("a");
    expect(linkedList.getAt(1).data).toEqual("b");
    expect(linkedList.getAt(2).data).toEqual("talker");
  });
});

describe("Linked list should do foreach", () => {
  test("Linked list should do foreach transform", () => {
    const linkedList = new LinkedList();
    linkedList.forEach(node => {
      node.data += 10;
    });
    expect(linkedList.getAt(0)).toEqual(null);
  });

  test("Linked list should do foreach transform", () => {
    const linkedList = new LinkedList();
    linkedList.insertLast(10);
    linkedList.insertLast(21);
    linkedList.insertLast(1);
    linkedList.insertLast(87);
    linkedList.insertLast(69);
    linkedList.insertLast(99);
    linkedList.forEach(node => {
      node.data += 10;
    });
    expect(linkedList.getAt(0).data).toEqual(20);
    expect(linkedList.getAt(1).data).toEqual(31);
    expect(linkedList.getAt(2).data).toEqual(11);
    expect(linkedList.getAt(3).data).toEqual(97);
    expect(linkedList.getAt(4).data).toEqual(79);
    expect(linkedList.getAt(5).data).toEqual(109);
  });
});

describe("Linked list should do for...of loops", () => {
  test("Linked list should do for...of loops", () => {
    const linkedList = new LinkedList();
    linkedList.insertLast(1);
    linkedList.insertLast(2);
    linkedList.insertLast(3);
    linkedList.insertLast(4);
    linkedList.insertLast(5);
    linkedList.insertLast(6);
    for (let node of linkedList) {
      node.data *= 2;
    }
    expect(linkedList.getAt(0).data).toEqual(2);
    expect(linkedList.getAt(1).data).toEqual(4);
    expect(linkedList.getAt(2).data).toEqual(6);
    expect(linkedList.getAt(3).data).toEqual(8);
    expect(linkedList.getAt(4).data).toEqual(10);
    expect(linkedList.getAt(5).data).toEqual(12);
  });

  test("Linked list should do for...of loops in empty list", () => {
    const linkedList = new LinkedList();
    expect(() => {
      for (let node of linkedList) {
      }
    }).not.toThrow();
  });
});
