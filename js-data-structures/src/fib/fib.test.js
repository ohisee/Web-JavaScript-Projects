/**
 * @fileoverview fib unit test
 */

const { fib, fibRecursion, fibUsingMap, fibMemoization, fibUsingMemoization } = require('./index');

describe("Fibonaccis series", () => {
  test('Function is defined', () => {
    expect(fib).toBeDefined();
  });

  test('Should return fib series using memoization, check run time', () => {
    expect(fibMemoization(38)).toEqual(39088169);
  });

  test('Should return fib series using memoization, check run time', () => {
    expect(fibUsingMemoization(38)).toEqual(39088169);
  });

  test('Should return fib series', () => {
    expect(fib(1)).toEqual(1);
  });

  test('Should return fib series', () => {
    expect(fib(2)).toEqual(1);
  });

  test('Should return fib series', () => {
    expect(fib(3)).toEqual(2);
  });

  test('Should return fib series', () => {
    expect(fib(9)).toEqual(34);
  });

  test('Should return fib series', () => {
    expect(fib(12)).toEqual(144);
  });

  test('Should return fib series, check run time', () => {
    expect(fib(38)).toEqual(39088169);
  });

  test('Should return fib series', () => {
    expect(fibRecursion(1)).toEqual(1);
  });

  test('Should return fib series', () => {
    expect(fibRecursion(2)).toEqual(1);
  });

  test('Should return fib series', () => {
    expect(fibRecursion(3)).toEqual(2);
  });

  test('Should return fib series', () => {
    expect(fibRecursion(9)).toEqual(34);
  });

  test('Should return fib series', () => {
    expect(fibRecursion(12)).toEqual(144);
  });

  test('Should return fib series, check run time', () => {
    expect(fibRecursion(38)).toEqual(39088169);
  });

  test('Should return fib series', () => {
    expect(fibUsingMap(1)).toEqual(1);
  });

  test('Should return fib series', () => {
    expect(fibUsingMap(2)).toEqual(1);
  });

  test('Should return fib series', () => {
    expect(fibUsingMap(3)).toEqual(2);
  });

  test('Should return fib series', () => {
    expect(fibUsingMap(9)).toEqual(34);
  });

  test('Should return fib series', () => {
    expect(fibUsingMap(12)).toEqual(144);
  });

  test('Should return fib series, check run time', () => {
    expect(fibUsingMap(38)).toEqual(39088169);
  });
});
