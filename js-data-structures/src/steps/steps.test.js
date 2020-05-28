/**
 * @fileoverview unit test steps
 */
const { steps, steps2, steps3 } = require('./index');

describe('Print steps', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test('Should define function', () => {
    expect(steps).toBeDefined();
  });

  test('Should log steps', () => {
    steps(1);
    expect(console.log.mock.calls[0][0]).toEqual('#');
    expect(console.log.mock.calls.length).toEqual(1);
  });

  test('Should log steps', () => {
    steps(2);
    expect(console.log.mock.calls[0][0]).toEqual('# ');
    expect(console.log.mock.calls[1][0]).toEqual('##');
    expect(console.log.mock.calls.length).toEqual(2);
  });

  test('Should log steps', () => {
    steps(3);
    expect(console.log.mock.calls[0][0]).toEqual('#  ');
    expect(console.log.mock.calls[1][0]).toEqual('## ');
    expect(console.log.mock.calls[2][0]).toEqual('###');
    expect(console.log.mock.calls.length).toEqual(3);
  });

  test('Should log steps', () => {
    steps2(1);
    expect(console.log.mock.calls[0][0]).toEqual('#');
    expect(console.log.mock.calls.length).toEqual(1);
  });

  test('Should log steps', () => {
    steps2(2);
    expect(console.log.mock.calls[0][0]).toEqual('# ');
    expect(console.log.mock.calls[1][0]).toEqual('##');
    expect(console.log.mock.calls.length).toEqual(2);
  });

  test('Should log steps', () => {
    steps2(3);
    expect(console.log.mock.calls[0][0]).toEqual('#  ');
    expect(console.log.mock.calls[1][0]).toEqual('## ');
    expect(console.log.mock.calls[2][0]).toEqual('###');
    expect(console.log.mock.calls.length).toEqual(3);
  });

  test('Should log steps', () => {
    steps3(1);
    expect(console.log.mock.calls[0][0]).toEqual('#');
    expect(console.log.mock.calls.length).toEqual(1);
  });

  test('Should log steps', () => {
    steps3(2);
    expect(console.log.mock.calls[0][0]).toEqual('# ');
    expect(console.log.mock.calls[1][0]).toEqual('##');
    expect(console.log.mock.calls.length).toEqual(2);
  });

  test('Should log steps', () => {
    steps3(3);
    expect(console.log.mock.calls[0][0]).toEqual('#  ');
    expect(console.log.mock.calls[1][0]).toEqual('## ');
    expect(console.log.mock.calls[2][0]).toEqual('###');
    expect(console.log.mock.calls.length).toEqual(3);
  });
});
