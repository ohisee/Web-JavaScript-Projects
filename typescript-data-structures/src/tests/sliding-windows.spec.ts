/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import { maxSubarraySum } from "../sliding-windows";

describe('Sliding window', () => {

  it('', () => {
    expect(maxSubarraySum([2, 6, 9, 2, 1, 8, 5, 6, 3], 3)).equals(19);
  });

});
