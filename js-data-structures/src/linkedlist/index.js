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

  removeLast() {
    let current = this.head;
    if (!current) {
      return null;
    }
    if (current.next === null) { // only one element in list
      this.head = null;
      return current;
    }
    let node = current.next;
    while (node && node.next) {
      current = node;
      node = node.next;
    }
    current.next = null;
    return node;
  }

  insertLast(data) {
    let lastNode = this.getLast();
    if (lastNode) {
      lastNode.next = new Node(data);
    } else {
      this.head = new Node(data);
    }
  }

  getAt(index) {
    let counter = 0;
    let node = this.head;
    while (counter !== index && node) {
      counter += 1;
      node = node.next;
    }
    return counter === index ? node : null;
  }

  removeAt(index) {
    if (!this.head) {
      return null;
    }
    if (index === 0) {
      return this.removeFirst();
    }
    let previous = this.getAt(index - 1);
    if (previous) {
      let deleteNode = previous.next;
      if (deleteNode) {
        previous.next = deleteNode.next;
        return deleteNode;
      }
    }
    return null;
  }
}

module.exports = {
  Node,
  LinkedList
}
