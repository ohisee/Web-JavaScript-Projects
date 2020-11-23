/**
 * @fileoverview JavaScript nodejs stdin input
 *
 */
const readline = require("readline");
const { toInfoLog } = require("./utilities");

const rdInf = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

rdInf.question("Type something ", (answer) => {
  console.log(`Just typed ${toInfoLog(answer)}`);
  rdInf.close();
});
