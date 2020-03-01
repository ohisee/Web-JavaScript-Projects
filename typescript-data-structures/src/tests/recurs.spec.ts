/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import { power } from "../recurs";

describe('Recursion', () => {
  describe('Power using recursion', () => {
    it('Should return 1', () => {
      expect(power(2, 0)).equals(1);
    });

    it('Should return 8', () => {
      expect(power(2, 3)).equals(8);
    });
  });
});
