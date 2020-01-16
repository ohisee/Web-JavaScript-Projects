/**
 * @fileoverview App
 */
const button = document.querySelector('button')! as HTMLInputElement;

// Compiler's noImplicitReturns option
// Compiler's noUnusedParameters option
function addNumbers(n1: number, n2 : number) {
  // Compiler's noUnusedLocals option
  // let name = "Hi";
  if (n1 + n2 > 0) {
    return n1 + n2;
  }
  return;
}

function clickHandler(message: string) {
  console.log('clicked ' + message);
}

// Comment
if (button) {
  // Compiler's strictBindCallApply option checking bind call apply
  button.addEventListener('click', clickHandler.bind(null, "on a button"));
}
