/**
 * @fileoverview events
 * an 'eventing' library out of the Events class
 * the Events class has functions 'on', 'trigger', and 'off'
 */

class Events {

  constructor() {
    this.events = {};
  }

  /**
   * register an event handler
   */
  on(eventName, callback) {
    if (!this.events[eventName]) {
      this.events[eventName] = [callback];
    } else {
      this.events[eventName].push(callback);
    }
  }

  /**
   * trigger all callbacks associated with a given eventName
   */
  trigger(eventName) {
    if (this.events[eventName]) {
      for (let eventCallback of this.events[eventName]) {
        eventCallback();
      }
    }
  }

  /**
   * remove all event handlers associated with the given eventName
   */
  off(eventName) {
    if (this.events[eventName]) {
      // this.events[eventName].length = 0;
      delete this.events[eventName];
    }
  }
}

module.exports = {
  Events
};
