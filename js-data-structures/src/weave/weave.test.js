/**
 * @fileoverview weave unit test
 */
const { weave } = require('./index');

describe('Weave two queues', () => {
  test('Should define function', () => {
    expect(weave).toBeDefined();
  });
});
