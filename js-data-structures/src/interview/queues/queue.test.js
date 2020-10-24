/**
 * @fileoverview JS queueu unit test 
 */
const { Queue } = require("./queue");

describe("Queue", () => {
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
    expect(queue.length).toEqual(3);
    expect(queue.dequeue()).toEqual("walker");
    expect(queue.dequeue()).toEqual("talker");
    expect(queue.dequeue()).toEqual("runner");
    expect(queue.length).toEqual(0);
  });

  test("should do dequeue", () => {
    /** @type {Queue<string>} */
    let queue = new Queue();
    queue.enqueue("walker");
    queue.enqueue("talker");
    queue.enqueue("runner");
    expect(queue.length).toEqual(3);
    expect(queue.dequeue()).toEqual("walker");
    expect(queue.dequeue()).toEqual("talker");
    expect(queue.dequeue()).toEqual("runner");
    expect(queue.first).toEqual(null);
    expect(queue.last).toEqual(null);
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
