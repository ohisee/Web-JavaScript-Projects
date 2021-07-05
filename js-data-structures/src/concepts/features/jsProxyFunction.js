/**
 * @fileoverview JS ES6 function proxy 
 */

/**
 * @param {string} message 
 */
function log(message) {
  console.log('Log entry created, message', message);
}

/**
 * @typedef {(message: string) => void} LogFunctionType
 */

/** @type {ProxyHandler<LogFunctionType>} */
let funcHandler = {
  apply: function (target, thisArg, argumentsList) {
    if (argumentsList.length === 1) {
      return Reflect.apply(target, thisArg, argumentsList);
    }
  }
};

let functionProxy = new Proxy(log, funcHandler);

functionProxy("hello, how are you my friend");
functionProxy("hello", 100);
