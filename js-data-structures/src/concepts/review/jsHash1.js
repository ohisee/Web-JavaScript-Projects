/**
 * @fileoverview JavaScript hash function
 *
 */

/**
 * @param {string} str1 
 * @param {string} str2 
 */
function merge(str1, str2) {
  let result = "";
  const maxLength = Math.max(str1.length, str2.length);
  for (let i = 0; i < maxLength; i++) {
    result += str1.charAt(i) + str2.charAt(i)
  }
  return result;
}

/**
 * @returns {string}
 */
function keyStr() {
  return (Math.random() * 997).toString(36).replace('.', '').substring(0, 5);
}

/**
 * @param {string} key 
 * @param {number} size is a prime number
 */
function hashKey(key, size) {
  const prime = 31;
  let total = 0;
  for (let i = 0; i < key.length; i++) {
    // let char = key[i];
    total = total * prime + key.charCodeAt(i);
    // total = (total + key.charCodeAt(i) * i) % size;
  }
  return total % size;
}

const table = [];
const counter = {};
for (let i = 0; i < 100; i++) {
  let key = merge(keyStr(), keyStr().toUpperCase());
  console.log(key);
  table.push(hashKey(key, 97));
  // let total = 0;
  // for (let i = 0; i < key.length; i++) {
  //   let char = key[i];
  //   total = total * prime + char.charCodeAt(0);
  // }
  // table.push(total % 1000);
}
table.forEach(item => counter[item] = counter[item] + 1 || 1);
console.log(table);
console.log(counter);

const strs = "abcdefghijklmnopqrstuvwxyz";
for (let char of strs) {
  console.log(char.charCodeAt(0), char.toUpperCase().charCodeAt(0));
}

const arrs = [[1, "walker"], [2, "runner"], [3, "talker"]];
for (let [a, b] of arrs) {
  console.log(a, b);
}
