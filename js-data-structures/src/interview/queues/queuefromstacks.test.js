/**
 * @fileoverview JS queueu using two stacks unit test 
 */
const { Queue } = require("./queue-using-stacks");

describe("Queue using two stacks", () => {
  test("Queue class should be defined", () => {
    expect(Queue.prototype.constructor).toBeDefined();
  });

  test("Queue class should be able to create instance", () => {
    expect(() => {
      new Queue();
    }).not.toThrow();
  });

  test("should do enqueue and dequeue", () => {
    /** @type {Queue<string>} */
    let queue = new Queue();
    queue.enqueue("walker");
    queue.enqueue("talker");
    queue.enqueue("runner");
    expect(queue.dequeue()).toEqual("walker");
    expect(queue.dequeue()).toEqual("talker");
    expect(queue.dequeue()).toEqual("runner");
  });

  test("should do dequeue", () => {
    /** @type {Queue<string>} */
    let queue = new Queue();
    queue.enqueue("walker");
    queue.enqueue("talker");
    queue.enqueue("runner");
    expect(queue.dequeue()).toEqual("walker");
    expect(queue.dequeue()).toEqual("talker");
    expect(queue.dequeue()).toEqual("runner");
  });

  test("should do peek", () => {
    /** @type {Queue<string>} */
    let queue = new Queue();
    queue.enqueue("walker");
    queue.enqueue("talker");
    queue.enqueue("runner");
    expect(queue.peek()).toEqual("walker");
  });

  test("should do peek", () => {
    /** @type {Queue<string>} */
    let queue = new Queue();
    queue.enqueue("walker");
    queue.enqueue("talker");
    queue.enqueue("runner");
    expect(queue.peek()).toEqual("walker");
    queue.dequeue();
    expect(queue.peek()).toEqual("talker");
    queue.dequeue();
    expect(queue.peek()).toEqual("runner");
  });
});
