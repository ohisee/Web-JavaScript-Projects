/**
 * @fileoverview events unit test
 */
const { Events } = require('./event');

describe("Events handler", () => {
  test("Events class constructor is defined", () => {
    expect(Events.prototype.constructor).toBeDefined();
  });

  test("Should register and call an event", () => {
    const events = new Events();
    const callback = jest.fn();
    events.on('click', callback);
    events.trigger('click');
    expect(callback.mock.calls.length).toBe(1);
  });

  test("Should register and call multiple events", () => {
    const events = new Events();
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    events.on('click', callback1);
    events.trigger('click');
    events.on('click', callback2);
    events.trigger('click');
    events.trigger('click');
    expect(callback1.mock.calls.length).toBe(3);
    expect(callback2.mock.calls.length).toBe(2);
  });

  test("Should register and call multiple different events", () => {
    const events = new Events();
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    events.on('click', callback1);
    events.trigger('click');
    events.on('hover', callback2);
    events.trigger('click');
    events.trigger('hover');
    expect(callback1.mock.calls.length).toBe(2);
    expect(callback2.mock.calls.length).toBe(1);
  });

  test("Should switch off events", () => {
    const events = new Events();
    const callback1 = jest.fn();
    const callback2 = jest.fn();
    events.on('click', callback1);
    events.on('hover', callback2);
    events.trigger('click');
    events.off('click');
    events.trigger('click');
    events.trigger('hover');
    expect(callback1.mock.calls.length).toBe(1);
    expect(callback2.mock.calls.length).toBe(1);
  });
});
