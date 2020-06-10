/**
 * @fileoverview stack data structure, last in first out
 */

class Stack {
  constructor() {
    this.data = [];
  }

  push(item) {
    this.data.push(item);
  }

  pop() {
    return this.data.pop();
  }

  peek() {
    if (this.data.length > 1) {
      return this.data[this.data.length - 1];
    }
    return undefined;
  }
}

module.exports = {
  Stack
};
