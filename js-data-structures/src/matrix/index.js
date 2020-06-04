/**
 * @fileoverview matrix returns a NxN spiral matrix.
 *   matrix(2)
 *     [[1, 2],
 *     [4, 3]]
 *   matrix(3)
 *     [[1, 2, 3],
 *     [8, 9, 4],
 *     [7, 6, 5]]
 *  matrix(4)
 *     [[1,   2,  3, 4],
 *     [12, 13, 14, 5],
 *     [11, 16, 15, 6],
 *     [10,  9,  8, 7]]
 */

function matrix(num) {
  let result = [];
  let counter = 1;
  let startRow = 0;
  let startCol = 0;
  let lastRow = num - 1;
  let lastCol = num - 1;
  for (let j = 0; j < num; j++) {
    result.push([]);
  }

  while (startRow <= lastRow && startCol <= lastCol) {
    for (let i = startCol; i <= lastCol; i++) {
      result[startRow][i] = counter;
      counter++;
    }

    startRow += 1; // Move to next row
    // keep going to next row til last row
    for (let i = startRow; i <= lastRow; i++) {
      result[i][lastCol] = counter;
      counter++;
    }

    lastCol -= 1; // Decrement last column
    // Move backward to the beginning of start column, 
    // excluding last column
    for (let i = lastCol; i >= startCol; i--) {
      result[lastRow][i] = counter;
      counter++;
    }

    lastRow -= 1;  // Decrement last row
    // Move upward to the beginning of start row, 
    // excluding last row
    for (let i = lastRow; i >= startRow; i--) {
      result[i][startCol] = counter;
      counter++;
    }

    // Increment (move) start column to next column
    startCol += 1;
  }

  return result;
}

module.exports = {
  matrix
};
