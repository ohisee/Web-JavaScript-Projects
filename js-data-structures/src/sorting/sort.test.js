/**
 * @fileoverview bubble sort unit test
 */
const { bubblesort } = require("./bubblesort");

describe("Sorting algorithm", () => {
  describe("Bubble sort", () => {
    test("function should be defined", () => {
      expect(bubblesort).toBeDefined();
    });

    test("Should sort array", () => {
      expect(bubblesort([100, -40, 500, -124, 0, 21, 7]))
        .toEqual([-124, -40, 0, 7, 21, 100, 500]);
    });
  });
});
