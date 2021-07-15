/**
 * @fileoverview JS ES6 revocable proxy 
 */

/**
 * @function toError 
 * @param {string} str 
 */
const toError = (str) => `\x1b[${91}m${str}\x1b[${39}m${"\x1b[0m"}`;

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

console.log(proxy.name, "--- should print watchman");
// after calling revoke() function, the proxy becomes unusable 
revoke();

try {
  proxy.name
} catch (/** @type {Error} */ e) {
  console.log(toError(e.message), "--- Cannot perform 'get' on a proxy that has been revoked");
}
