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
      while (counter > index && current?.previous) {
        current = current.previous;
        counter -= 1;
      }
      return current;
    }
  }

  set(index: number, val: T) {
    let foundNode = this.get(index);
    if (foundNode !== null) {
      foundNode.val = val;
      return true;
    }
    return false;
  }

  insert(index: number, val: T) {
    if (index < 0 || index > this.length) {
      return false;
    }
    if (index === 0) {
      this.unshift(val);
      return true;
    }
    if (index === this.length) {
      this.push(val);
      return true;
    }
    let beforeNode = this.get(index - 1);
    if (beforeNode) {
      let afterNode = beforeNode.next;
      let newNode = new LinkedListNode<T>(val);
      beforeNode.next = newNode;
      newNode.next = afterNode;
      newNode.previous = beforeNode;
      afterNode!.previous = newNode;
      this.length += 1;
      return true;
    }
    return false;
  }

  remove(index: number) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    if (index === 0) {
      return this.shift();
    }
    if (index === (this.length - 1)) {
      return this.pop();
    }
    let foundNode = this.get(index);
    if (foundNode) {
      let beforeNode = foundNode.previous;
      let afterNode = foundNode.next;
      beforeNode!.next = afterNode;
      afterNode!.previous = beforeNode;
      foundNode.next = null;
      foundNode.previous = null;
      this.length -= 1;
      return foundNode;
    }
    return null;
  }

  reverse() {
    if (this.head) {
      let previousHead = this.head;
      let current = this.head.next;
      let tNext = current ? current.next : null;
      previousHead.previous = current;
      previousHead.next = null;
      while (current) {
        current.next = previousHead;
        current.previous = tNext;
        previousHead = current;
        current = tNext;
        tNext = tNext ? tNext.next : null;
      }
      this.tail = this.head;
      this.head = previousHead;
    }
    return this;
  }

  getLength() {
    return this.length;
  }
}
