/**
 * @fileoverview tree in typescript
 */

class QueueNode<Q> {

  data: Q;
  next: QueueNode<Q> | null;

  constructor(data: Q, next: QueueNode<Q> | null = null) {
    this.data = data;
    this.next = next;
  }
}

class QueueNodeList<Q> {

  head: QueueNode<Q> | null;
  tail: QueueNode<Q> | null;

  constructor() {
    this.head = null;
    this.tail = null;
  }

  /**
   * insert at head, for example, insertAtHead([1, 2, 3]), 
   * result list is 3 -> 2 -> 1 
   */
  insertAtHead(item: Q): void {
    if (!this.head) {
      this.head = this.tail = new QueueNode(item);
    } else {
      this.head = new QueueNode(item, this.head);
    }
  }

  insertAtTail(item: Q): void {
    if (!this.tail) {
      this.tail = new QueueNode(item);
      this.head = this.tail;
    } else {
      this.tail.next = new QueueNode(item);
      this.tail = this.tail.next;
    }
  }

  getLastFromHead(): QueueNode<Q> | null {
    let current = this.head;
    while (current && current.next) {
      current = current.next;
    }
    return current;
  }

  getHead(): QueueNode<Q> | null {
    return this.head;
  }

  getLast(): QueueNode<Q> | null {
    return this.tail;
  }

  removeFromHead(): QueueNode<Q> | null {
    let current = this.head;
    if (this.head) {
      // only one element in list, head and tail are pointing to same node
      if (this.head === this.tail) {
        this.tail = this.head?.next;
      }
      this.head = this.head?.next;
      current!.next = null;
    }
    return current;
  }

  isEmpty(): boolean {
    return this.head === null;
  }

  /**
   * append another list to the back of this list
   */
  append(another: QueueNodeList<Q>): QueueNodeList<Q> {
    if (!this.head) { // empty list, head is null
      this.head = another.head;
      this.tail = another.tail;
    } else {
      this.tail!.next = another.head;
      this.tail = another.tail;
    }
    return this;
  }

  /**
   * insert another list at the start of this list
   */
  insert(another: QueueNodeList<Q>): QueueNodeList<Q> {
    if (another.tail) {
      another.tail.next = this.head;
      this.head = another.head;
    }
    return this;
  }
}

class Queue<Q> {

  queue: QueueNodeList<Q> | null;

  constructor() {
    this.queue = null;
  }

  /**
   * enqueue([1,2,3]), and then enqueue([4,5,6])
   * result is [ 4, 5, 6, 1, 2, 3 ]
   */
  enqueue(items: Q[]) {
    const holder = new QueueNodeList<Q>();
    for (let data of items) {
      holder.insertAtTail(data);
    }
    if (!this.queue) {
      this.queue = holder;
    } else {
      this.queue.insert(holder);
    }
  }

  push(items: Q[]) {
    const holder = new QueueNodeList<Q>();
    for (let data of items) {
      holder.insertAtTail(data);
    }
    if (!this.queue) {
      this.queue = holder;
    } else {
      this.queue.append(holder);
    }
  }

  dequeue(): QueueNode<Q> | null {
    if (this.queue) {
      return this.queue.removeFromHead();
    }
    return null;
  }

  isEmpty(): boolean {
    return this.queue === null || this.queue.isEmpty();
  }
}

class TreeNode<T> {

  data: T | null;
  children: TreeNode<T>[];

  constructor(data: T) {
    this.data = data;
    this.children = [];
  }

  add(data: T) {
    this.children.push(new TreeNode(data));
  }

  remove(data: T) {
    this.children = this.children.filter(treeNode => treeNode.data !== data);
  }
}

class Tree<T> {

  root: TreeNode<T> | null;

  constructor() {
    this.root = null;
  }

  insertAtRoot(data: T): TreeNode<T> {
    if (!this.root) {
      this.root = new TreeNode(data);
    } else {
      this.root.add(data);
    }
    return this.root;
  }

  traverseBreadthFirst(fn: (node: TreeNode<T>) => void) {
    if (this.root) {
      const queue: TreeNode<T>[] = [this.root];
      while (queue.length > 0) {
        let node = queue.shift();
        if (node) {
          if (node.children.length > 0) {
            queue.push(...node.children);
          }
          fn(node);
        }
      }
    }
  }

  traverseDepthFirst(fn: (node: TreeNode<T>) => void) {
    if (this.root) {
      const queue: TreeNode<T>[] = [this.root];
      while (queue.length > 0) {
        let node = queue.shift();
        if (node) {
          if (node.children.length > 0) {
            queue.unshift(...node.children);
          }
          fn(node);
        }
      }
    }
  }

  traverseTreeBreadthFirst(fn: (node: TreeNode<T>) => void) {
    if (this.root) {
      const queue = new Queue<TreeNode<T>>();
      queue.push([this.root]);
      while (!queue.isEmpty()) {
        let node = queue.dequeue();
        if (node) {
          if (node.data.children.length > 0) {
            queue.push(node.data.children);
          }
          fn(node.data);
        }
      }
    }
  }

  traverseTreeDepthFirst(fn: (node: TreeNode<T>) => void) {
    if (this.root) {
      const queue = new Queue<TreeNode<T>>();
      queue.enqueue([this.root]);
      while (!queue.isEmpty()) {
        let node = queue.dequeue();
        if (node) {
          if (node.data.children.length > 0) {
            queue.enqueue(node.data.children);
          }
          fn(node.data);
        }
      }
    }
  }
}

console.log("---start---");
const tree = new Tree();
tree.insertAtRoot("root-node");
tree.insertAtRoot("root-node-child-node-1");
tree.insertAtRoot("root-node-child-node-2");
tree.insertAtRoot("root-node-child-node-3");
tree.root!.children[0].add("root-node-child-node-1-1");
tree.root!.children[0].add("root-node-child-node-1-2");
tree.root!.children[1].add("root-node-child-node-2-1");
console.log(JSON.stringify(tree, null, 2));
const walker: string[] = [];
console.log("---breadth first---");
tree.traverseBreadthFirst(node => {
  walker.push(node.data as string);
});
console.log(walker);
walker.length = 0; // clear the array
console.log("---depth first---");
tree.traverseDepthFirst(node => {
  walker.push(node.data as string);
});
console.log(walker);
walker.length = 0; // clear the array
console.log("---breadth first---");
tree.traverseTreeBreadthFirst(node => {
  walker.push(node.data as string);
});
console.log(walker);
walker.length = 0; // clear the array
console.log("--depth first---");
tree.traverseTreeDepthFirst(node => {
  walker.push(node.data as string);
});
console.log(walker);
