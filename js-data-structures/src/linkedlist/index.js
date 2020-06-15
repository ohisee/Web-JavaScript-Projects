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
    let current = this.head;
    while (current) {
      counter += 1;
      current = current.next;
    }
    return counter;
  }

  getFirst() {
    return this.head;
  }

  getLast() {
    let current = this.head;
    while (current && current.next) {
      current = current.next;
    }
    return current;
  }

  clear() {
    let current = this.head;
    while (current) {
      this.head = null;
      this.head = current.next;
      current = this.head;
    }
    this.length = 0;
  }

  removeFirst() {
    let current = this.head;
    if (current) {
      this.head = current.next;
      current.next = null;
    }
    this.length -= 1;
    return current;
  }
}

module.exports = {
  Node,
  LinkedList
}
