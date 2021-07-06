/**
 * @fileoverview JS ES6 proxy wraping another proxy 
 */

/**
 * @typedef {import('./jsProxy1').MessageObjectTargetType} MessageObjectTargetType 
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
    Reflect.set(target, property, value);
  },
};

/** @type {ProxyHandler<MessageObjectTargetType>} */
let protoHandler = {
  get: function (target, property) {
    return property in target ? target[property] : "Non existant protohandler";
  },
  set: function (target, property, value) {
    if (property === "title") {
      if (typeof value === "string" && value.length > 2) {
        Reflect.set(target, property, value);
      }
    }
  }
};

// create a proxy 
const proxy = new Proxy({}, handler);
Reflect.setPrototypeOf(proxy, MessageObject);
console.log(proxy.types, "--- should print [ 'alarm', 'inquiry', 'greeting' ]");

// proxy can wrap proxy
const protoProxy = new Proxy(proxy, protoHandler);
console.log(protoProxy.title, "--- should print Collector");
