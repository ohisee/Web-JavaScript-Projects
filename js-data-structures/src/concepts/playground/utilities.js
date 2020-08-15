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
  blue: [34, 89],
  yellow: [33, 89],
  red: [31, 89],
  cyan: [36, 89],
  green: [32, 89],
}

const reset = "\x1b[0m";

/**
 * add color to text, for example, \x1b[92m___\x1b[39m + \x1b[0m
 * @param {[number, number]} color 
 * @param {string[]} strs 
 */
function toLogString(color, strs) {
  // let text = strs.reduce((prev, current) => `${prev} ${current}`);
  return `\x1b[${color[0]}m${strs.join(" ")}\x1b[${color[1]}m${reset}`;
}

function toInfoLog(...strs) {
  return toLogString(colors.green, strs);
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

/**
 * @param {number} len 
 */
function toDashLine(len) {
  return toLogString(colors.yellowBright, ["-".repeat(len)]);
}

module.exports = {
  toInfoLog,
  toWarningLog,
  toDangerLog,
  toPrimaryLog,
  toSecondaryLog,
  toPrimaryLightLog,
  toDashLine,
};
