/**
 * @fileoverview JS ES6 revocable proxy 
 */

/**
 * @typedef {object} WatcherType 
 * @property {string} name 
 */

/** @type {WatcherType} */
const watcher = {
  name: "watchman",
};

/** @type {ProxyHandler<WatcherType>} */
const watcherHandler = {
  get: function (target, property) {
    return Reflect.get(target, property);
  }
};

const { proxy, revoke } = Proxy.revocable(watcher, watcherHandler);

module.exports = {
  proxy, revoke
};
