/**
 * @fileoverview JS ES6 reflect apply 
 */

class MessageGreeting {
  /**
   * @param {string} title 
   * @param {number} id 
   */
  constructor(title, id) {
    this.title = title;
    this.id = id;
  }

  getTitle() {
    return this.title;
  }

  getId() {
    return this.id;
  }

  greet() {
    return "message title is " + this.title;
  }

  greetPrefix(prefix) {
    return `${prefix} message id ${this.id}`;
  }
}

/** @type {MessageGreeting} */
let messageReflect = Reflect.construct(MessageGreeting, ["new title", 100])

module.exports = {
  messageReflect
};
