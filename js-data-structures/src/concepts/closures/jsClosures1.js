/**
 * @fileoverview JavaScript closures
 */

function a() {
  let grandpa = "grandpa";
  return function b() {
    let father = "father";
    return function c() {
      let son = "son";
      return `${grandpa} > ${father} > ${son}`;
    }
  }
}

console.log(a()()());

// another example
const boo = (str) => (name) => (name2) => console.log(`${str} ${name} ${name2}`);
boo("hi")("walker")("walking");

// exercise
function callMeMaybe() {
  setTimeout(function () { // put on callback queue
    console.log(callMe, "--- should print 'Hi, how are you doing'");
  }, 3000);
  const callMe = "Hi, how are you doing";
}

callMeMaybe();
