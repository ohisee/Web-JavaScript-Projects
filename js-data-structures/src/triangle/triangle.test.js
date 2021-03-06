/**
 * @fileoverview triangle unit test
 */

const { triangle, triangleRecursion } = require('./index');

describe('Print steps', () => {
  beforeEach(() => {
    jest.spyOn(console, 'log');
  });

  afterEach(() => {
    console.log.mockRestore();
  });

  test('Should define function', () => {
    expect(triangle).toBeDefined();
  });

  test('Should log steps', () => {
    triangle(1);
    expect(console.log.mock.calls[0][0]).toEqual('#');
    expect(console.log.mock.calls.length).toEqual(1);
  });

  test('Should log steps', () => {
    triangle(2);
    expect(console.log.mock.calls[0][0]).toEqual(' # ');
    expect(console.log.mock.calls[1][0]).toEqual('###');
    expect(console.log.mock.calls.length).toEqual(2);
  });

  test('Should log steps', () => {
    triangle(3);
    expect(console.log.mock.calls[0][0]).toEqual('  #  ');
    expect(console.log.mock.calls[1][0]).toEqual(' ### ');
    expect(console.log.mock.calls[2][0]).toEqual('#####');
    expect(console.log.mock.calls.length).toEqual(3);
  });

  test('Should log steps', () => {
    triangleRecursion(1);
    expect(console.log.mock.calls[0][0]).toEqual('#');
    expect(console.log.mock.calls.length).toEqual(1);
  });

  test('Should log steps', () => {
    triangleRecursion(2);
    expect(console.log.mock.calls[0][0]).toEqual(' # ');
    expect(console.log.mock.calls[1][0]).toEqual('###');
    expect(console.log.mock.calls.length).toEqual(2);
  });

  test('Should log steps', () => {
    triangleRecursion(3);
    expect(console.log.mock.calls[0][0]).toEqual('  #  ');
    expect(console.log.mock.calls[1][0]).toEqual(' ### ');
    expect(console.log.mock.calls[2][0]).toEqual('#####');
    expect(console.log.mock.calls.length).toEqual(3);
  });

  test('Should log steps', () => {
    triangleRecursion(5);
    expect(console.log.mock.calls[0][0]).toEqual("    #    ");
    expect(console.log.mock.calls[1][0]).toEqual("   ###   ");
    expect(console.log.mock.calls[2][0]).toEqual("  #####  ");
    expect(console.log.mock.calls[3][0]).toEqual(" ####### ");
    expect(console.log.mock.calls[4][0]).toEqual("#########");
    expect(console.log.mock.calls.length).toEqual(5);
  });
});
