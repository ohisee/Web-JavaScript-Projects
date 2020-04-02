/**
 * @fileoverview binary heaps max binary heap
 */

export class MaxBinaryHeap {

  private values: number[];

  constructor() {
    this.values = [];
  }

  insert(val: number) {
    this.values.push(val);
  }
}
