/**
 * @fileoverview steps 
 * console log a step shape with N levels using the # character, and 
 * each step has spaces on the right hand side
 * steps(3)
 * '#  '
 * '## '
 * '###'
 */

function steps(num = 1) {
  for (let i = 1; i <= num; i++) {
    let line = "#".repeat(i) + " ".repeat(num - i);
    console.log(line);
  }
}

function steps2(num = 1) {
  for (let i = 0; i < num; i++) {
    let line = "";
    for (let j = 0; j < num; j++) {
      if (j <= i) {
        line += "#";
      } else {
        line += " ";
      }
    }
    console.log(line);
  }
}

/**
 * Recursive print steps
 */
function steps3(num, row = 0, line = "") {
  if (num === row) {
    return;
  }
  if (line.length === num) {
    console.log(line);
    return steps3(num, row + 1, "");
  } else {
    if (line.length <= row) {
      line += "#";
    } else {
      line += " ";
    }
    return steps3(num, row, line);
  }
}

module.exports = {
  steps,
  steps2,
  steps3,
};
