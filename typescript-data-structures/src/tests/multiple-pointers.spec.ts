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

  it('Should return 2', () => {
    expect(countUniqueValuesInSortedArrayByAltering([1, 1, 1, 1, 1, 1, 2])).equals(2);
  });

  it('Should return 7', () => {
    expect(countUniqueValuesInSortedArrayByAltering([1, 2, 3, 4, 4, 4, 7, 7, 12, 12, 13])).equals(7);
  });

  it('Should return 0', () => {
    expect(countUniqueValuesInSortedArrayByAltering([])).equals(0);
  });

  it('Should return 4', () => {
    expect(countUniqueValuesInSortedArrayByAltering([-2, -1, -1, 0, 1])).equals(4);
  });

});
