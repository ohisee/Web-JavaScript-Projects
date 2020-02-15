/**
 * @fileoverview test
 */
import { expect } from "chai";
import "mocha";
import { countUniqueValuesInSortedArrayByAltering } from "../multiple-pointers";

describe('Multiple pointers', () => {

  it('Should return 9', () => {
    expect(countUniqueValuesInSortedArrayByAltering([-3, -2, -1, 0, 1, 2, 3, 4, 5])).equals(9);
  });

});
