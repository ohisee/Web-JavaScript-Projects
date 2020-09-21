/**
 * @fileoverview JavaScript array
 *
 */

class MyArray {
  constructor() {
    this.length = 0;
    this.data = {};
  }

  get(index) {
    return this.data[index];
  }

  push(item) {
    this.data[this.length] = item;
    this.length += 1;
    return this.length;
  }

  pop() {
    const lastItem = this.data[this.length - 1];
    delete this.data[this.length - 1];
    this.length -= 1;
    return lastItem;
  }

  delete(index) {
    if (index < 0 || index > (this.length - 1)) {
      return undefined;
    }
    const item = this.data[index];
    this.shiftItems(index);
    return item;
  }

  /**
   * 0(n) operation
   * @param {number} index 
   */
  shiftItems(index) {
    for (let i = index; i < this.length - 1; i++) {
      this.data[i] = this.data[i + 1];
    }
    delete this.data[this.length - 1];
    this.length -= 1;
  }

  /**
   *  0(n) operation
   */
  reverse() {
    const mid = Math.floor(this.length / 2);
    for (let i = 0; i < mid; i++) {
      let item = this.data[i];
      this.data[i] = this.data[this.length - 1 - i];
      this.data[this.length - 1 - i] = item;
    }
  }
}

const array = new MyArray();
console.log(array);

array.push("hi");
console.log(array);

array.push("how");
console.log(array);

array.push("are");
console.log(array);

array.push("you");
console.log(array);

array.push("!");
console.log(array);

array.pop();
console.log(array);

array.delete(0);
console.log(array);

array.pop();
array.pop();
array.pop();
console.log(array);

array.push("a");
array.push("b");
array.push("c");
array.push("d");
array.push("e");
array.reverse();
console.log(array);
