/**
 * @fileoverview JavaScript function
 */

console.log("------ JS Function ------");
// Function Expression
var walk = () => {
  console.log("walking")
};

// Function Declaration
function talk() {
  console.log(arguments); // {}
  console.log("talking");
}

// Function Invocation/Call/Execution
walk();
talk();

// Function agruments
function read(line1, line2) {
  console.log(arguments);
  console.log(Array.from(arguments));
  return `reading ${line1} and then ${line2}`;
}

console.log(read("good", "morning"));
console.log();

function read2(...lines) {
  console.log("arguments", lines);
  console.log(Array.from(arguments));
  return `reading ${lines[0]} and then ${lines[1]}`;
}

console.log(read2("good", "afternoon"));
