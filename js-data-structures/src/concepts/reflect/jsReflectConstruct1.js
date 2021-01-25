/**
 * @fileoverview JS ES6 reflect using construct 
 */

/**
 * Message class for trying JavaScript reflect 
 */
class Message {
  /**
   * @param {string} title 
   * @param {number} id 
   * @param {string} description 
   */
  constructor(title, id, description) {
    this.title = title;
    this.id = id;
    this.description = description;
  }
}

let message = Reflect.construct(Message, ["Talker Walker", 100, "Collector"]);

module.exports = {
  Message,
  message,
};
