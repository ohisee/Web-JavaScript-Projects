/**
 * @fileoverview queue using linked list
 */

class QueueNode<T> {

  value: T;
  next: QueueNode<T> | null;

  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}

export class Queue<T> {

  private size: number;
  private first: QueueNode<T> | null;
  private last: QueueNode<T> | null;

  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  /**
   * Enqueue and Dequeue must be in constant time
   * Add to tail
   * @param val 
   */
  enqueue(val: T) {
    let newNode = new QueueNode<T>(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      this.last!.next = newNode;
      this.last = newNode;
    }
    this.size += 1;
    return this.size;
  }

  /**
   * Enqueue and Dequeue must be in constant time
   * Remove from head
   */
  dequeue(): T | null {
    let current: QueueNode<T> | null = this.first;
    if (!current) {
      return null;
    }
    if (!current.next) {
      this.last = null;
    }
    this.first = current.next;
    this.size -= 1;
    return current.value;
  }

  isEmpty() {
    return this.size === 0;
  }
}
