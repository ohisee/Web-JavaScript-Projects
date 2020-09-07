/**
 * @fileoverview JavaScript higher order function
 */

// function with no parameter
function letWalkerLogin() {
  for (let i = 0; i < 100000000; i++) { }
  return "Access Granted to Walker";
}

// function with parameter, can be reused in handling different parameters
const giveAccessTo = name => `Access Granted to ${name}`;
function letUserLogin(user) { // we now tell what data to use
  for (let i = 0; i < 100000000; i++) { }
  return giveAccessTo(user);
}

console.log(letWalkerLogin());
console.log(letUserLogin("John"));
