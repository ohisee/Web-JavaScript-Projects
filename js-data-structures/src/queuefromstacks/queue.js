/**
 * @fileoverview queue data structure using two stacks
 */

const { Stack } = require("./stack");

class Queue {
  constructor() {
    this.stack = new Stack();
    this.holder = new Stack();
  }

  add(item) {
    this.stack.push(item);
  }

  remove() {
    while (this.stack.peek()) {
      this.holder.push(this.stack.pop());
    }
    let item = this.holder.pop();
    while (this.holder.peek()) {
      this.stack.push(this.holder.pop());
    }
    return item;
  }

  peek() {
    while (this.stack.peek()) {
      this.holder.push(this.stack.pop());
    }
    let item = this.holder.peek();
    while (this.holder.peek()) {
      this.stack.push(this.holder.pop());
    }
    return item;
  }
}

module.exports = {
  Queue
};
