/**
 * @fileoverview a simple priority queue, sort every time when doing enqueue
 */

export class PriorityQueue {

  private values: { value: any, priority: number }[];

  constructor() {
    this.values = [];
  }

  /**
   * sort every time when doing enqueue, time complexity is O(n * log n)
   */
  enqueue(value: any, priority: number) {
    this.values.push({ value: value, priority: priority });
    this.sort();
  }

  dequeue() {
    return this.values.shift();
  }

  sort() {
    this.values.sort((a, b) => a.priority - b.priority);
  }
}
