/**
 * @fileoverview implementation of linked list
 */

class Node {
  constructor(data, next = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
    this.length = 0;
  }

  insertFirst(data) {
    const newNode = new Node(data, this.head);
    if (this.head === null) {
      this.tail = newNode;
    }
    this.head = newNode;
    this.length += 1;
  }

  size() {
    let counter = 0;
    let t = this.head;
    while (t) {
      counter += 1;
      t = t.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }
}

module.exports = {
  Node,
  LinkedList
}
