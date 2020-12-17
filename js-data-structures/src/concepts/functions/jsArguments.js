/**
 * @fileoverview function arguments 
 */

/**
 * @param {number} num1 
 * @param {number} num2 
 */
function handle(num1, num2) {
  console.log(arguments);
  return num1 + num2;
}

console.log(handle(10, 11)); // [Arguments] { '0': 10, '1': 11 }

console.log("-------");

/**
 * @param {Function} anotherFunction 
 */
function handler(anotherFunction) {
  // [Arguments] { '0': [Function (anonymous)] }
  // cannot invoke anotherFunction here because not sure 
  // how many arguments there will be
  return function () {
    // or anotherFunction.call(this, ...arguments)
    return anotherFunction.apply(this, arguments);
  }
}

/**
 * @param {Function} anotherFunction 
 */
function handlerBind(anotherFunction) {
  return anotherFunction.bind(null);
}

console.log(
  handler(function (num1, num2, num3) {
    return num1 + num2 + num3;
  })(1, 2, 3)
);

console.log(
  handler(function (num1, num2, num3) {
    return num1 + num2 + num3;
  })("how ", "are ", "you?")
);

handler(function () {
  return Promise.resolve(100);
})().then(
  res => console.log(res),
  err => console.log(err)
);
