/**
 * @fileoverview JS linked list
 * 
 * 10 --> 11 --> 16 
  const mLinkedList = {
    head: {
      value: 10,
      next: {
        value: 11,
        next: {
          value: 16,
          next: null,
        }
      }
    }
  };
 *
 */


/** @template T */
class LinkedList {
  /**
   * @typedef {Object} LinkedListType
   * @property {T} value 
   * @property {LinkedListType} next  
   */

  constructor() {
    /** @type {LinkedListType} */
    this.head = null;
    /** @type {LinkedListType} */
    this.tail = null;
    this.length = 0;
  }

  /**
   * @param {number} index 
   */
  _getAtIndex(index) {
    if (index < 0 || index >= this.length) {
      return null;
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter !== index) {
      counter += 1;
      currentNode = currentNode.next;
    }
    return currentNode;
  }

  /**
   * append to the end of this list 
   * @param {T} data 
   */
  append(data) {
    /** @type {LinkedListType} */
    const newNode = { value: data, next: null };
    if (!this.head) {
      this.head = newNode;
    }
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    this.length += 1;
    return this;
  }

  /**
   * add to the beginning of this list 
   * @param {T} data 
   */
  prepend(data) {
    const newNode = { value: data, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  /**
   * insert data at index position into this list 
   * @param {number} index 
   * @param {T} data 
   */
  insert(index, data) {
    if (index === 0) {
      return this.prepend(data);
    }
    if (index >= this.length) {
      return this.append(data);
    }
    if (index < 0) {
      return this;
    }
    let counter = 0;
    let currentNode = this.head;
    while (counter < (index - 1)) { // stop at previous node before input index
      counter += 1;
      currentNode = currentNode.next;
    }
    let newNode = { value: data, next: currentNode.next };
    currentNode.next = newNode;
    this.length += 1;
    return this;
  }

  /**
   * @param {number} index 
   */
  remove(index) {
    if (index < 0 || index >= this.length) {
      return this;
    }
    let prevNode = this._getAtIndex(index - 1);
    let removeNode = prevNode.next;
    if (removeNode === this.tail) {
      prevNode.next = null;
      this.tail = prevNode;
    } else {
      prevNode.next = removeNode.next;
    }
    this.length -= 1;
    return this;
  }

  values() {
    const val = [];
    let currentNode = this.head;
    while (currentNode !== null) {
      val.push(currentNode.value);
      currentNode = currentNode.next;
    }
    return val;
  }
}

module.exports = {
  LinkedList,
};
