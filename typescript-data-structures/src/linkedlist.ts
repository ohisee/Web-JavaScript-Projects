/**
 * @fileoverview Singly linked list
 */

class LinkedListNode<T> {

  val: T;
  next: LinkedListNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
  }

  getData(): T {
    return this.val;
  }
}

export class SinglyLinkedList<T> {

  private length: number;
  private head: LinkedListNode<T> | null;
  private tail: LinkedListNode<T> | null;

  constructor() {
    this.length = 0;
    this.head = null;
    this.tail = null;
  }

  push(val: T) {
    let newNode = new LinkedListNode<T>(val);
    if (this.head === null) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    let current: LinkedListNode<T> | null = this.head;
    if (!current) {
      return undefined;
    }
    let tmpTail: LinkedListNode<T> | null = current;
    while (current.next) {
      tmpTail = current;
      current = current?.next;
    }
    this.tail = tmpTail;
    if (this.tail.next) {
      // when there are more than one nodes
      this.tail.next = null;
    } else {
      // when there is just one node
      this.tail = this.head = null;
    }
    this.length -= 1;
    return current;
  }

  shift() {
    let current: LinkedListNode<T> | null = this.head;
    if (!current) {
      return undefined;
    }
    if (current.next) {
      // when there are more than one nodes
      this.head = current.next;
    } else {
      // when there is just one node
      this.head = this.tail = null;
    }
    this.length -= 1;
    return current;
  }

  unshift(val: T) {
    let newNode: LinkedListNode<T> = new LinkedListNode<T>(val);
    if (!this.head) {
      this.head = newNode;
      this.tail = this.head;
    } else {
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  get(index: number) {
    if (!this.head || index < 0 || index >= this.length) {
      return null;
    }
    let current = this.head;
    let counter = 0;
    while (counter < index && current.next) {
      current = current?.next;
      counter += 1;
    }
    return current;
  }

  set(index: number, val: T) {
    let foundNode = this.get(index);
    if (foundNode) {
      foundNode.val = val;
      return false;
    } else {
      return true;
    }
  }

  getLength() {
    return this.length;
  }
}
