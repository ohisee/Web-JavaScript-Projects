/**
 * @fileoverview JavaScript threads, concurrency, and parallelism
 * 
 * var worker = new Worker();
 */

const { spawn } = require("child_process");

const win_platform = (process.platform == "win32");

const child = spawn("dir", { shell: win_platform });

child.stdout.on("data", (data) => {
  console.log(data.toString());
});

child.stderr.on("error", (err) => {
  console.log(err);
});

console.log(process.platform);
