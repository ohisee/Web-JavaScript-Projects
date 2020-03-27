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

  get(index: number) {
    if (!this.head || index < 0 || index >= this.length) {
      return null;
    }
    let half = Math.floor(this.length / 2);
    if (index <= half) {
      let counter = 0;
      let current = this.head;
      while (counter < index && current.next) {
        current = current.next;
        counter += 1;
      }
      return current;
    } else {
      let counter = this.length - 1;
      let current = this.tail;
      while(counter > index && current?.previous) {
        current = current.previous;
        counter -= 1;
      }
      return current;
    }
  }

  set() {

  }

  insert() {

  }

  getLength() {
    return this.length;
  }
}
