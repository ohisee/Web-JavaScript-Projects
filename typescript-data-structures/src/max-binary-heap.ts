/**
 * @fileoverview binary heaps max binary heap
 */

export class MaxBinaryHeap {

  private values: number[];

  constructor() {
    this.values = [];
  }

  insert(element: number) {
    this.values.push(element);
    // Bubble up
    let index = this.values.length - 1;
    while (index > 0) {
      let parentIndex = Math.floor((index - 1) / 2);
      let parent = this.values[parentIndex];
      if (parent >= element) {
        break;
      }
      this.values[parentIndex] = element;
      this.values[index] = parent;
      index = parentIndex;
    }
    return this;
  }

  extractMax() {
    const max = this.values[0];
    this.values[0] = this.values[this.values.length - 1];
    this.values.pop();

    let index = 0;
    const length = this.values.length;
    let element = this.values[index];
    while (index < length) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild: number | null = null;
      let rightChild: number | null = null;
      let swap: number | null = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
        if (leftChild > element) {
          swap = leftChildIndex;
        }
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
        if ((swap === null && rightChild > element) ||
            (swap !== null && leftChild !== null && rightChild > leftChild)) {
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
    return max;
  }

  extractMaxV1() {
    const [lastElement] = this.values.slice(-1);
    const max = this.values[0];
    this.values[0] = lastElement;
    this.values.pop(); // remove last element

    let index = 0;
    const length = this.values.length;
    let element = this.values[index];

    while (index < length) {
      let leftChildIndex = 2 * index + 1;
      let rightChildIndex = 2 * index + 2;
      let leftChild: number | null = null;
      let rightChild: number | null = null;

      if (leftChildIndex < length) {
        leftChild = this.values[leftChildIndex];
      }
      if (rightChildIndex < length) {
        rightChild = this.values[rightChildIndex];
      }
      if (leftChild && rightChild) {
        if (element > leftChild && element > rightChild) {
          break;
        } else {
          if (leftChild > rightChild) {
            this.values[index] = leftChild;
            this.values[leftChildIndex] = element;
            index = leftChildIndex;
          } else {
            this.values[index] = rightChild;
            this.values[rightChildIndex] = element;
            index = rightChildIndex;
          }
        }
      } else if (leftChild && leftChild > element) {
        this.values[index] = leftChild;
        this.values[leftChildIndex] = element;
        index = leftChildIndex;
      } else if (rightChild && rightChild > element) {
        this.values[index] = rightChild;
        this.values[rightChildIndex] = element;
        index = rightChildIndex;
      } else {
        break;
      }
    }

    return max;
  }

  getValues() {
    return this.values.slice(0);
  }
}
