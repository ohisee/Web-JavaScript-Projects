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

  /**
   * Add a node to the tail of the singly linked list
   */
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

  /**
   * Remove a node at the tail of the singly linked list
   */
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
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    } else {
      return false;
    }
  }

  insert(index: number, val: T) {
    if (index < 0 || index > this.length) {
      return false;
    } else if (index === 0) {
      return !!this.unshift(val);
      // return true;
    } else if (index === this.length) {
      this.push(val);
      return true;
    }
    let pre = this.get(index - 1);
    if (pre) {
      let insertNode = new LinkedListNode<T>(val);
      insertNode.next = pre.next;
      pre.next = insertNode;
      this.length += 1;
      return true;
    }
    return false;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) {
      return null;
    } else if (index === 0) {
      return this.shift();
    } else if (index === (this.length - 1)) {
      return this.pop();
    }
    let pre = this.get(index - 1);
    if (pre) {
      let delNode = pre.next;
      pre.next = delNode!.next;
      this.length -= 1;
      return delNode;
    }
    return null;
  }

  reverse() {
    if (this.head) {
      this.tail = this.head;
      let previousHead = this.tail;
      let current = this.tail.next;
      let tmpNext = (current && current.next) ? current.next : null;
      this.tail.next = null;
      while (current) {
        current.next = previousHead;
        previousHead = current;
        current = tmpNext;
        tmpNext = (tmpNext && tmpNext.next) ? tmpNext.next : null;
      }
      this.head = previousHead;
    }
    return this;
  }

  getLength() {
    return this.length;
  }

  getHead() {
    return this.head;
  }

  getTail() {
    return this.tail;
  }
}
