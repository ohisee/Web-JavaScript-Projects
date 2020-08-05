/**
 * @fileoverview utilities
 */

const colors: { [key: string]: [number, number] } = {
  redBright: [91, 39],
  greenBright: [92, 39],
  yellowBright: [93, 39],
  blueBright: [94, 39],
  magentaBright: [95, 39],
  cyanBright: [96, 39],
}

/**
 * add color to text, for example, \x1b[92m___\x1b[39m, 
 * using function currying
 * @param {[number, number]} color 
 */
function toLogString(color: [number, number]): (...strs: string[]) => string {
  return function (...strs) {
    return `\x1b[${color[0]}m${strs.join(" ")}\x1b[${color[1]}m`;
  }
}

const toInfoLog = toLogString(colors.greenBright);
const toDangerLog = toLogString(colors.redBright);
const toPrimaryLog = toLogString(colors.blueBright);

console.log(toInfoLog("info log"));
console.log(toDangerLog("danger log"));
console.log(toPrimaryLog("primary log"));
