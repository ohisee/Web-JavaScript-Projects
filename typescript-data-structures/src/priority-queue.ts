/**
 * @fileoverview priority queue
 */

class PriorityQueueNode<T> {

  val: T;
  priority: number;

  constructor(val: T, priority: number) {
    this.val = val;
    this.priority = priority;
  }

}

export type PriorityQueueNodeType<T> = PriorityQueueNode<T>;

export class PriorityQueue<T> {

  private values: PriorityQueueNode<T>[];

  constructor() {
    this.values = [];
  }

  enqueue(val: T, priority: number) {
    const newPriorityNode = new PriorityQueueNode(val, priority);
    this.values.push(newPriorityNode);
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent.priority < priority) {
        break;
      }
      this.values[parentIndex] = newPriorityNode;
      this.values[index] = parent;
      index = parentIndex;
    }
    return this;
  }

  dequeue() {
    const highestPrioriy = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();

    let index = 0;
    const length = this.values.length;
    let element = this.values[index];
    while (index < length) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild: PriorityQueueNode<T> | null = null;
      let rightChild: PriorityQueueNode<T> | null = null;
      let swap: number | null = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild.priority < element.priority) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if ((swap === null && rightChild.priority < element.priority) ||
          (swap !== null && leftChild !== null && rightChild.priority < leftChild.priority)) {
          swap = rightChildIndex;
        }
      }

      if (swap === null) {
        break;
      } else {
        this.values[index] = this.values[swap];
        this.values[swap] = element;
        index = swap;
      }
    }
    return highestPrioriy;
  }
}
