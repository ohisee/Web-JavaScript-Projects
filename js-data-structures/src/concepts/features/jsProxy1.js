/**
 * @fileoverview JS ES6 proxy 
 */

/**
 * @typedef {Object} MessageObjectTargetType
 * @property {number} length  
 * @property {string} title 
 * @property {string[]} types 
 */

/** @type {MessageObjectTargetType} */
let MessageObject = {
  length: 100,
  title: "Collector",
  types: ["alarm", "inquiry", "greeting"],
};

/** @type {ProxyHandler<MessageObjectTargetType>} */
const handler = {
  /**
   * @param {MessageObjectTargetType} target 
   * @param {string | number | symbol} property  
   * @param {any} receiver 
   */
  get: function (target, property) {
    return property in target ? target[property] : "non existant handler";
  },

  /**
   * @param {MessageObjectTargetType} target 
   * @param {string | number | symbol} property  
   * @param {any} value  
   */
  set: function (target, property, value) {
    if (property === "length") {
      if (Number.isInteger(value)) {
        Reflect.set(target, property, value);
      }
    }
    if (property === "title") {
      if (typeof value === "string" && value.length > 2) {
        Reflect.set(target, property, value);
      }
    }
  },
};

const proxy1 = new Proxy(MessageObject, handler);
console.log(proxy1.length, "--- should print 100");
console.log(proxy1.title, "--- should print Collector");
console.log(proxy1.name, "--- should print 'non existant handler'");
console.log("--- set new values ---");
proxy1.length = 200;
console.log(proxy1.length, "--- should print 200");

proxy1.title = "li";
console.log(proxy1.title, "--- should print Collector");

proxy1.title = "Hello World";
console.log(proxy1.title, "--- should print Hello World");
console.log(MessageObject, "--- should print { length: 200, title: 'Hello World' }");

// Must export something in order for VS code to pick up import type in another file 
module.exports = {
  MessageObject,
};
