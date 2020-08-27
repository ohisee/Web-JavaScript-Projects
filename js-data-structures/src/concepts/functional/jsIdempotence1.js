/**
 * @fileoverview JavaScript functional programming
 *
 * idempotence
 */

/**
 * this function is not idempotent
 * always returns a differnt output with same input
 * @param {number} num 
 */
function differentOutputWithSameInput(num) {
  return Math.random(num);
}

// result is always different
console.log("--- result is always different ---");
for (let i = 0; i < 5; i++) {
  console.log(differentOutputWithSameInput(10));
}

console.log("--- result is always same, idempotence ---");
for (let i = 0; i < 5; i++) {
  console.log(Math.abs(Math.abs(-110)));
}
