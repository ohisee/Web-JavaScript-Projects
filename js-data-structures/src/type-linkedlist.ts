/**
 * @fileoverview using typescript to defiend a linked list
 */

class LinkedListNode<T> {

  data: T | null;
  next: LinkedListNode<T> | null;

  constructor(data: T, next: LinkedListNode<T> | null = null) {
    this.data = data;
    this.next = next;
  }
}

class LinkedList<T> {

  head: LinkedListNode<T> | null;

  constructor() {
    this.head = null;
  }

  insertAtFirst(data: T) {
    this.head = new LinkedListNode<T>(data, this.head);
  }

  forEach(iteratorFunction: (node: LinkedListNode<T>, index?: number) => void) {
    let current = this.head;
    let index = 0;
    while (current) {
      iteratorFunction(current, index);
      current = current.next;
      index += 1;
    }
  }

  // Using generator when iterating through list
  *[Symbol.iterator]() {
    let current = this.head;
    while (current) {
      yield current;
      current = current.next;
    }
  }
}


const linkedList = new LinkedList<number>();
linkedList.insertAtFirst(10);
linkedList.insertAtFirst(9);
linkedList.insertAtFirst(8);
linkedList.insertAtFirst(7);
linkedList.insertAtFirst(6);

let node: LinkedListNode<number>;
console.log("---Before---")
for (node of linkedList) {
  console.log(node.data);
}
linkedList.forEach(node => {
  node.data! += 10;
});
console.log("---After---")
for (node of linkedList) {
  console.log(node.data);
}
