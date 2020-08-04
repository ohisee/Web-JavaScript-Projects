/**
 * @fileoverview some utilities
 */

const colors = {
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
}

/**
 * Add color to text, for example, \x1b[92m___\x1b[39m
 * @param {[number, number]} color 
 * @param {string[]} strs 
 */
function toLogString(color, strs) {
  // let text = strs.reduce((prev, current) => `${prev} ${current}`);
  return `\x1b[${color[0]}m${strs.join(" ")}\x1b[${color[1]}m`;
}

function toInfoLog(...strs) {
  return toLogString(colors.greenBright, strs);
}

function toWarningLog(...strs) {
  return toLogString(colors.yellowBright, strs);
}

function toDangerLog(...strs) {
  return toLogString(colors.redBright, strs);
}

function toPrimaryLog(...strs) {
  return toLogString(colors.blueBright, strs);
}

function toSecondaryLog(...strs) {
  return toLogString(colors.magentaBright, strs);
}

function toPrimaryLightLog(...strs) {
  return toLogString(colors.cyanBright, strs);
}

module.exports = {
  toInfoLog,
  toWarningLog,
  toDangerLog,
  toPrimaryLog,
  toSecondaryLog,
  toPrimaryLightLog
};
