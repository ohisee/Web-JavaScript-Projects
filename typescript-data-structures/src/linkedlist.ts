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
    let pre: LinkedListNode<T> | null = this.head;
    if (!pre) {
      return undefined;
    }
    let tmp: LinkedListNode<T> | null = pre.next;
    while (tmp) {
      if (tmp.next) {
        pre = tmp;
      }
      tmp = tmp.next;
    }
    let ln = new LinkedListNode<T>(this.tail!.getData());
    if (pre.next) {
      // when there are two or more elements
      pre.next = null;
    } else {
      // when there is just one element
      this.head = pre = null;
    }
    this.tail = pre;
    this.length -= 1;
    return ln;
  }

  getLength() {
    return this.length;
  }
}
