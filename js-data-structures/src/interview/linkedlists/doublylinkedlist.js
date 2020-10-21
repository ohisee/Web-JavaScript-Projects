/**
 * @fileoverview JS linked list using previous and next pointers 
 */

/** @template T */
class LinkedList {
  /**
   * @typedef {Object} LinkedListType
   * @property {T} value 
   * @property {LinkedListType} previous 
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

  _removeFirst() {
    if (this.head) {
      let removeNode = this.head;
      if (removeNode.next) {
        removeNode.next.previous = null;
      }
      this.head = this.head.next;
      removeNode.next = null;
      this.length -= 1;
    }
    return this;
  }

  /**
   * append to the end of this list 
   * @param {T} data 
   */
  append(data) {
    /** @type {LinkedListType} */
    const newNode = { value: data, previous: this.tail, next: null };
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
    /** @type {LinkedListType} */
    const newNode = { value: data, previous: null, next: this.head };
    if (this.head) {
      this.head.previous = newNode;
    }
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
    this.length += 1;
    return this;
  }

  /**
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
    const prevNode = this._getAtIndex(index - 1);
    /** @type {LinkedListType} */
    const newNode = { value: data, previous: prevNode, next: prevNode.next };
    prevNode.next.previous = newNode;
    prevNode.next = newNode;
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
    if (index === 0) {
      return this._removeFirst();
    }
    const prevNode = this._getAtIndex(index - 1);
    const removeNode = prevNode.next;
    if (removeNode === this.tail) {
      removeNode.previous = null;
      prevNode.next = null;
      this.tail = prevNode;
    } else {
      prevNode.next = removeNode.next;
      removeNode.next.previous = prevNode;
      removeNode.previous = null;
      removeNode.next = null;
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
