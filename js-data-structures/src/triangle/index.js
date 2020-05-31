/**
 * @fileoverview triangle 
 * console log a triangle (pyramid) shape with N levels using the # character 
 * make sure the triangle has spaces on both the left *and* right hand sides
 */

function triangle(num) {
  const columns = num + (num - 1);
  const mid = Math.floor(columns / 2);
  for (let i = 0; i < num; i++) {
    let line = "";
    for (let j = 0; j < columns; j++) {
      if (j >= (mid - i) && j <= (mid + i)) {
        line += "#";
      } else {
        line += " "
      }
    }
    console.log(line);
  }
}

function triangleRecursion(num, row = 0, line = "") {
  if (num === row) {
    return;
  }
  const columns = num + (num - 1);
  if (line.length === columns) {
    console.log(line);
    return triangleRecursion(num, row + 1, "");
  } else {
    const mid = Math.floor(columns / 2);
    if (line.length >= (mid - row) && line.length <= (mid + row)) {
      line += "#"
    } else {
      line += " "
    }
    return triangleRecursion(num, row, line);
  }
}

module.exports = {
  triangle,
  triangleRecursion
};
