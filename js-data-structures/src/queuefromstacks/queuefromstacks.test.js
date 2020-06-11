/**
 * @fileoverview queue from stacks uni test
 */
const { Queue } = require("./queue");

describe("Queue from two stacks", () => {
  test("Queue class constructor is defined", () => {
    expect(Queue.prototype.constructor).toBeDefined();
  });

  test("Quene should add", () => {
    const queue = new Queue();
    expect(() => {
      queue.add(1);
      queue.add(2);
    }).not.toThrow()
  });

  test("Quene should peek", () => {
    const queue = new Queue();
    expect(() => {
      queue.add(1);
      queue.peek();
    }).not.toThrow()
  });

  test("Quene should remove", () => {
    const queue = new Queue();
    expect(() => {
      queue.add(1);
      queue.remove();
    }).not.toThrow()
  });

  test("Quene should add peek and remove", () => {
    const queue = new Queue();
    queue.add(1);
    queue.add(2);
    expect(queue.peek()).toEqual(1);
    expect(queue.remove()).toEqual(1);
    expect(queue.remove()).toEqual(2);
    expect(queue.remove()).toBeUndefined();
  });
});
