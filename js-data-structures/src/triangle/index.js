/**
 * @fileoverview triangle 
 * console log a triangle (pyramid) shape with N levels using the # character 
 * make sure the triangle has spaces on both the left *and* right hand sides
 */

function triangle(num) {
  for (let i = 0; i < num; i++) {
    let line = "";
    let columns = num + (num - 1);
    for (let j = 0; j < columns; j++) {
      let mid = Math.floor(columns / 2);
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
