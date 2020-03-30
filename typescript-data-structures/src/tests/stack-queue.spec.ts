/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import { Stack } from "../stack-linkedlist";
import { Queue } from "../queue-linkedlist";

describe('Stack and Quene', () => {

  describe('Stack', () => {
    let stack: Stack<string>;

    beforeEach(() => {
      stack = new Stack<string>();
    });

    it('Should do push and pop', () => {
      expect(stack.push('hello')).equals(1);
      expect(stack.push('create a new file')).equals(2);
      expect(stack.push('open a new file')).equals(3);
      expect(stack.pop()).equals('open a new file');
      expect(stack.pop()).equals('create a new file');
      expect(stack.pop()).equals('hello');
    });
  });

  describe('Queue', () => {
    let queue: Queue<string>;

    beforeEach(() => {
      queue = new Queue<string>();
    });

    it('Should do enqueue and dequeue', () => {
      expect(queue.enqueue('1')).equals(1);
      expect(queue.enqueue('2')).equals(2);
      expect(queue.enqueue('3')).equals(3);
      expect(queue.dequeue()).equals('1');
      expect(queue.dequeue()).equals('2');
      expect(queue.dequeue()).equals('3');
    });
  });
});
