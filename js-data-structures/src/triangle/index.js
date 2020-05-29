/**
 * @fileoverview triangle 
 * console log a triangle (pyramid) shape with N levels using the # character 
 * make sure the triangle has spaces on both the left *and* right hand sides
 */

function triangle(num) {
  let columns = num + (num - 1);
  let mid = Math.floor(columns / 2);
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

module.exports = {
  triangle
};
