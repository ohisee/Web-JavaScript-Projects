/**
 * @fileoverview JS queue 
 */

/** @template T */
class QueueNode {
  /**
   * 
   * @param {T} value 
   * @param {QueueNode<T> | null} next 
   */
  constructor(value, next = null) {
    this.data = value;
    this.next = next;
  }
}

/** @template T */
class Queue {
  constructor() {
    /** @type {QueueNode<T> | null} */
    this.first = null;
    /** @type {QueueNode<T> | null} */
    this.last = null;
    this.length = 0;
  }

  /**
   * peek first item in this queue
   */
  peek() {
    if (!this.first) {
      return undefined;
    }
    return this.first.data;
  }

  /**
   * @param {T} value 
   */
  enqueue(value) {
    const newNode = new QueueNode(value);
    if (!this.first) {
      this.first = newNode;
    }
    if (this.last) {
      this.last.next = newNode;
    }
    this.last = newNode;
    this.length += 1;
    return this;
  }

  dequeue() {
    if (!this.first) {
      return undefined;
    }
    if (this.first === this.last) {
      this.last = null;
    }
    const removeNode = this.first;
    this.first = this.first.next;
    this.length -= 1;
    return removeNode.data;
  }

  isEmpty() {
    return (this.length === 0);
  }
}

module.exports = {
  Queue,
};
