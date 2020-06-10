/**
 * @fileoverview weave unit test
 */
const { weave } = require('./index');
const { Queue } = require('./queue');

describe('Weave two queues', () => {
  test('Should define function', () => {
    expect(weave).toBeDefined();
  });

  test('Should define function', () => {
    expect(Queue.prototype.peek).toBeDefined();
  });

  test('Should peek queue', () => {
    const queue = new Queue();
    queue.add(1);
    queue.add(2);
    expect(queue.peek()).toEqual(1);
    expect(queue.peek()).toEqual(1);
    expect(queue.remove()).toEqual(1);
    expect(queue.remove()).toEqual(2);
  });

  test('Should weave queues', () => {
    const queueOne = new Queue();
    queueOne.add(1);
    queueOne.add(2);
    queueOne.add(3);
    queueOne.add(4);
    queueOne.add(5);
    const queueTwo = new Queue();
    queueTwo.add('one');
    queueTwo.add('two');
    queueTwo.add('three');
    queueTwo.add('four');
    queueTwo.add('five');

    const result = weave(queueOne, queueTwo);
    expect(result.remove()).toEqual(1);
    expect(result.remove()).toEqual('one');
    expect(result.remove()).toEqual(2);
    expect(result.remove()).toEqual('two');
    expect(result.remove()).toEqual(3);
    expect(result.remove()).toEqual('three');
    expect(result.remove()).toEqual(4);
    expect(result.remove()).toEqual('four');
    expect(result.remove()).toEqual(5);
    expect(result.remove()).toEqual('five');
    expect(result.remove()).toBeUndefined();
  });

  test('Should weave queues', () => {
    const queueOne = new Queue();
    queueOne.add(1);
    queueOne.add(2);
    const queueTwo = new Queue();
    queueTwo.add('one');
    queueTwo.add('two');
    queueTwo.add('three');

    const result = weave(queueOne, queueTwo);
    expect(result.remove()).toEqual(1);
    expect(result.remove()).toEqual('one');
    expect(result.remove()).toEqual(2);
    expect(result.remove()).toEqual('two');
    expect(result.remove()).toEqual('three');
    expect(result.remove()).toBeUndefined();
  });

  test('Should weave queues', () => {
    const queueOne = new Queue();
    queueOne.add(1);
    queueOne.add(2);
    queueOne.add(3);
    queueOne.add(4);
    queueOne.add(5);
    const queueTwo = new Queue();
    queueTwo.add('one');
    queueTwo.add('two');

    const result = weave(queueOne, queueTwo);
    expect(result.remove()).toEqual(1);
    expect(result.remove()).toEqual('one');
    expect(result.remove()).toEqual(2);
    expect(result.remove()).toEqual('two');
    expect(result.remove()).toEqual(3);
    expect(result.remove()).toEqual(4);
    expect(result.remove()).toEqual(5);
    expect(result.remove()).toBeUndefined();
  });
});
