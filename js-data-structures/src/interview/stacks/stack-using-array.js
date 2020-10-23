/**
 * @fileoverview JS stack implementation using array 
 */

/** @template T */
class Stack {
  constructor() {
    this.data = [];
  }

  peek() {
    if (this.data.length === 0) {
      return undefined;
    }
    return this.data[this.data.length - 1];
  }

  /**
   * @param {T} value 
   */
  push(value) {
    this.data.push(value);
    return this;
  }

  pop() {
    return this.data.pop();
  }
}

module.exports = {
  Stack,
};
