/**
 * @fileoverview doubly linked list
 */
class LinkedListNode<T> {

  val: T;
  next: LinkedListNode<T> | null;
  previous: LinkedListNode<T> | null;

  constructor(val: T) {
    this.val = val;
    this.next = null;
    this.previous = null;
  }

  getData() {
    return this.val;
  }
}

export class DoublyLinkedList<T> {

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
    if (!this.head) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      newNode.previous = this.tail;
      this.tail!.next = newNode;
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (!this.head) {
      return undefined;
    }
    let oldTail = this.tail;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.tail = oldTail!.previous;
      this.tail!.next = null;
      oldTail!.previous = null;
    }
    this.length -= 1;
    return oldTail;
  }

  shift() {
    if (!this.head) {
      return undefined;
    }
    let oldHead = this.head;
    if (this.length === 1) {
      this.head = null;
      this.tail = null;
    } else {
      this.head = oldHead.next;
      this.head!.previous = null;
      oldHead.next = null;
    }
    this.length -= 1;
    return oldHead;
  }

  unshift(val: T) {
    let newNode = new LinkedListNode<T>(val);
    if (this.length === 0) {
      this.head = newNode;
      this.tail = newNode;
    } else {
      this.head!.previous = newNode;
      newNode.next = this.head;
      this.head = newNode;
    }
    this.length += 1;
    return this;
  }

  getLength() {
    return this.length;
  }
}
