/**
 * @fileoverview stack using linked list
 */

class StackNode<T> {

  value: T;
  next: StackNode<T> | null;

  constructor(val: T) {
    this.value = val;
    this.next = null;
  }
}

export class Stack<T> {

  private size: number;
  private first: StackNode<T> | null;
  private last: StackNode<T> | null;

  constructor() {
    this.size = 0;
    this.first = null;
    this.last = null;
  }

  /**
   * Push and pop must be constant time in stack
   * @param val 
   */
  push(val: T) {
    let newNode: StackNode<T> = new StackNode<T>(val);
    if (!this.first) {
      this.first = newNode;
      this.last = newNode;
    } else {
      newNode.next = this.first;
      this.first = newNode;
    }
    this.size += 1;
    return this.size;
  }

  /**
   * Push and pop must be constant time in stack
   */
  pop(): T | null {
    let current: StackNode<T> | null = this.first;
    if (!current) {
      return null;
    }
    // when there is just one node
    if (!current.next) {
      this.last = null;
    }
    this.first = current.next;
    this.size -= 1;
    return current.value;
  }
}
