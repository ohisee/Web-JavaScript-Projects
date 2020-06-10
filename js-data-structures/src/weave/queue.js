/**
 * @fileoverview queue using array
 */

class Queue {
  constructor() {
    this.data = [];
  }

  add(item) {
    this.data.unshift(item);
  }

  remove() {
    return this.data.pop();
  }

  peek() {
    if (this.data.length > 0) {
      return this.data[this.data.length - 1];
    }
    return undefined;
  }
}

module.exports = {
  Queue
};
