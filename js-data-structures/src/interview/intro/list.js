/**
 * @fileoverview linked list 
 */

class LinkedList {
  constructor() {
    this.head = null;
    this.tail = null;
  }

  append(value) {
    const newNode = { value: value, next: null };
    if (this.tail) {
      this.tail.next = newNode;
    }
    this.tail = newNode;
    if (!this.head) {
      this.head = newNode;
    }
  }

  prepend(value) {
    const newNode = { value: value, next: this.head };
    this.head = newNode;
    if (!this.tail) {
      this.tail = newNode;
    }
  }

  insertAfter(value, afterValue) {
    const existingNode = this.find(afterValue);
    if (existingNode) {
      const newNode = { value: value, next: existingNode.next };
      existingNode.next = newNode;
    }
  }

  find(value) {
    if (!this.head) {
      return null;
    }
    let curNode = this.head;
    while (curNode) {
      if (curNode.value === value) {
        return curNode;
      }
      curNode = curNode.next;
    }
    return null;
  }

  delete(value) {
    if (!this.head) {
      return null;
    }
    while (this.head && this.head.value === value) { // remove from start 
      this.head = this.head.next;
    }
    let curNode = this.head;
    while (curNode && curNode.next) {
      if (curNode.next.value === value) {
        curNode.next = curNode.next.next;
      } else {
        curNode = curNode.next;
      }
    }
    if (this.tail.value === value) {
      this.tail = curNode; // curNode is one node before tail 
    }
  }

  deleteAll() {
    while (this.head) {
      this.head = this.head.next;
    }
    if (this.tail) {
      this.tail = this.tail.next;
    }
  }

  forEach(fn) {
    let curNode = this.head;
    while (curNode) {
      fn(curNode.value);
      curNode = curNode.next;
    }
  }
}

const FORMAT = (content) => `\x1b[${92}m${content}\x1b[${39}m\x1b[0m`;
const l = new LinkedList();
l.append("hi");
l.append(1);
l.append("how");
l.insertAfter("need to insert a new item - 1", 1);
l.forEach(item => console.log(item));
l.prepend("first");
l.prepend("first");
l.prepend("first");
console.log(l.find("first"));
console.log(FORMAT("-------"));
l.forEach(item => console.log(item));
l.delete("first");
console.log(FORMAT("-------"));
l.forEach(item => console.log(item));
l.delete("how");
l.delete("hi");
l.delete(1);
console.log(FORMAT("-------"));
l.forEach(item => console.log(item));
console.log(l.find("first"));
l.deleteAll();
console.log(FORMAT("-------"));
l.forEach(item => console.log(item));

module.exports = {
  LinkedList
};
