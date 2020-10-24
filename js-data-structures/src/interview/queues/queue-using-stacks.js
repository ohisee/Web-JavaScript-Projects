/**
 * @fileoverview JS queue using arrays as stack  
 */

/** @template T */
class Queue {
  constructor() {
    /** @type {T[]} */
    this.firstStack = [];
    /** @type {T[]} */
    this.secondStack = [];
  }

  /**
   * peek first item of this queue 
   */
  peek() {
    if (this.firstStack.length === 0) {
      return undefined;
    }
    return this.firstStack[0];
  }

  /**
   * @param {T} value 
   */
  enqueue(value) {
    this.firstStack.push(value);
    return this;
  }

  dequeue() {
    if (this.firstStack.length === 0) {
      return undefined;
    }
    while (this.firstStack.length > 0) {
      this.secondStack.push(this.firstStack.pop());
    }
    let removeItem = this.secondStack.pop();
    while (this.secondStack.length > 0) {
      this.firstStack.push(this.secondStack.pop());
    }
    return removeItem;
  }
}

module.exports = {
  Queue,
};
