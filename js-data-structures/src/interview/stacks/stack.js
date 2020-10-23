/**
 * @fileoverview JS stack 
 */

/** @template T  */
class StackNode {
  /**
   * @param {T} value 
   * @param {StackNode<T> | null} next 
   */
  constructor(value, next = null) {
    /** @type {T} */
    this.data = value;
    /**@type {StackNode} */
    this.next = next;
  }
}

/** @template T */
class Stack {
  constructor() {
    /**@type {StackNode<T> | null} */
    this.top = null;
    /**@type {StackNode<T> | null} */
    this.bottom = null;
    this.length = 0;
  }

  peek() {
    if (this.isEmpty()) {
      return undefined;
    }
    return this.top.data;
  }

  /**
   * @param {T} value 
   */
  push(value) {
    const newNode = new StackNode(value, this.top);
    this.top = newNode;
    if (!this.bottom) {
      this.bottom = newNode;
    }
    this.length += 1;
    return this;
  }

  pop() {
    if (this.isEmpty()) {
      return undefined;
    }
    if (this.top === this.bottom) {
      this.bottom = null;
    }
    let topNode = this.top;
    this.top = this.top.next;
    this.length -= 1;
    return topNode.data;
  }

  isEmpty() {
    return (this.length === 0);
  }
}

module.exports = {
  Stack,
};
