/**
 * @fileoverview build an array 
 */

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  /**
   * @param {number} index 
   */
  get(index) {
    return this.data[index];
  }

  /**
   * @param {any} item 
   */
  push(item) {
    this.data[this.length] = item;
    this.length += 1;
    return this.length;
  }

  pop() {
    // this.length is index 
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length -= 1;
    return lastItem;
  }

  /**
   * @param {number} index 
   */
  delete(index) {
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  /**
   * @param {number} index 
   */
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length -= 1;
  }
}

module.exports = {
  MyArray
};
