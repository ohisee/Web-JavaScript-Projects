/**
 * @fileoverview stack unit test
 */
const { Stack } = require('./stack');

describe('Stack, last in first out', () => {
  test('Stack class constructor is defined', () => {
    expect(Stack.prototype.constructor).toBeDefined();
  });

  test('Should push and pop from Stack', () => {
    const stack = new Stack();
    stack.push(1);
    expect(stack.pop()).toEqual(1);
    stack.push(2);
    expect(stack.pop()).toEqual(2);
  });

  test('Should push and pop from Stack', () => {
    const stack = new Stack();
    stack.push(1);
    stack.push(2);
    stack.push(3);
    expect(stack.pop()).toEqual(3);
    expect(stack.pop()).toEqual(2);
    expect(stack.pop()).toEqual(1);
  });
});
