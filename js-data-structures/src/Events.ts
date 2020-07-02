/**
 * @fileoverview events in typescript
 */

type CallbackFnType = () => void;
class Events {

  events: { [key: string]: CallbackFnType[] };

  constructor() {
    this.events = {};
  }

  /**
   * register an event handler
   */
  on(eventName: string, callback: () => void) {
    if (!this.events[eventName]) {
      this.events[eventName] = [callback];
    } else {
      this.events[eventName].push(callback);
    }
  }

  /**
   * trigger all callbacks associated with a given eventName
   */
  trigger(eventName: string) {
    if (this.events[eventName]) {
      for (let eventCallback of this.events[eventName]) {
        eventCallback();
      }
    }
  }

  /**
   * remove all event handlers associated with the given eventName
   */
  off(eventName: string) {
    if (this.events[eventName]) {
      delete this.events[eventName];
    }
  }
}

const events = new Events();
events.on("click", () => {
  console.log("1click callback function");
});
events.on("click", () => {
  console.log("2click callback function");
});
events.on("hover", () => {
  console.log("hover callback function");
});
events.on("onmousemove", () => {
  console.log("onmousemove callback function");
});
events.on("onchange", () => {
  console.log("1onchange callback function");
});
events.on("onchange", () => {
  console.log("2onchange callback function");
});
events.on("onchange", () => {
  console.log("3onchange callback function");
});
events.on("onkeypress", () => {
  console.log("onkeypress callback function");
});
events.trigger("click");
events.trigger("hover");
events.trigger("onmousemove");
events.trigger("onchange");
events.trigger("onkeypress");
events.off("click");
events.off("hover");
events.off("onmousemove");
events.off("onchange");
events.off("onkeypress");
