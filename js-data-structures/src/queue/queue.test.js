/**
 * @fileoverview queue unit test
 */

const { Queue } = require('./index');

describe('Queue, first in first out', () => {
  test('Queue class constructor is defined', () => {
    expect(Queue.prototype.constructor).toBeDefined();
  });

  test('Should add and remove', () => {
    const queue = new Queue();
    expect(() => { queue.add(1); }).not.toThrow();
    expect(queue.remove()).toEqual(1);
  });

  test('Should add and remove', () => {
    const queue = new Queue();
    expect(() => { queue.add(1); }).not.toThrow();
    expect(queue.remove()).toEqual(1);
    expect(queue.remove()).toEqual(undefined);
  });
});
