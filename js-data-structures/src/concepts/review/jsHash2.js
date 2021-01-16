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
 * const key = "some";
 * const hash = key.charCodeAt(0) * Math.pow(31, 3) 
 *  + key.charCodeAt(1) * Math.pow(31, 2) 
 *  + key.charCodeAt(2) * Math.pow(31, 1) 
 *  + key.charCodeAt(3) * Math.pow(31, 0); // just key.charCodeAt(3) for last element 
 * 
 * or ES7 exponentiation ** (power) operator 
 * const hash = key.charCodeAt(0) * (31**3) 
 *  + key.charCodeAt(1) * (31**2) 
 *  + key.charCodeAt(2) * (31**1) 
 *  + key.charCodeAt(3) * (31**0); // just key.charCodeAt(3) for last element  
 * 
 * num << 5 === num * 5 
 * 1 << 5 === 32 
 * 2 << 5 === 64 
 * 3 << 5 === 96 
 * multiply by prime number 31, it is equivalent of num << 5 - num 
 * 1 << 5 - 1 === 1 * 31 === 31 
 * 2 << 5 - 2 === 2 * 31 === 62 
 * 3 << 5 - 3 === 3 * 31 === 93 
 * 
 * @param {string} key 
 * @returns {number} hash code
 */
function hashCode1(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    // hash = key.charCodeAt(i) * Math.pow(31, key.length - 1 - i) + hash;
    let exp = key.length - 1 - i;
    hash = key.charCodeAt(i) * (31 ** exp) + hash;
    hash = hash | 0;
  }
  return hash;
}

/**
 * const key = "some";
 * const hash = key.charCodeAt(0) * Math.pow(31, 3) 
 *  + key.charCodeAt(1) * Math.pow(31, 2) 
 *  + key.charCodeAt(2) * Math.pow(31, 1) 
 *  + key.charCodeAt(3); // it is equivalent to 
 * 
 * or ES7 exponentiation ** (power) operator 
 * const hash = key.charCodeAt(0) * (31**3) 
 *  + key.charCodeAt(1) * (31**2) 
 *  + key.charCodeAt(2) * (31**1) 
 *  + key.charCodeAt(3) * (31**0); // it is equivalent to 
 * 
 * key.charCodeAt(0) * 31 * 31 * 31
 * + key.charCodeAt(1) * 31 * 31
 * + key.charCodeAt(2) * 31 
 * + key.charCodeAt(3); // it is equivalent to 
 * 
 * (key.charCodeAt(0) * 31 * 31 + key.charCodeAt(1) * 31 + key.charCodeAt(2)) * 31 + key.charCodeAt(3) 
 * ^
 * |__ it is equivalent to
 * 
 * ((key.charCodeAt(0) * 31 + key.charCodeAt(1)) * 31 + key.charCodeAt(2)) * 31 + key.charCodeAt(3) 
 * 
 * bitwize | 0 to change hash to 32 bit number
 * @param {string} key 
 * @returns {number} hash code 
 */
function hashCode2(key) {
  let hash = 0;
  for (let i = 0; i < key.length; i++) {
    // Math.imul(hash, 31);
    hash = hash * 31 + key.charCodeAt(i) | 0;
  }
  return hash;
}

/**
 * @param {string} key 
 * @param {number} size is a prime number
 */
function hashKey(key, size) {
  const hashedKey = hashCode2(key);
  return (Math.sign(hashedKey) < 0 ? hashedKey * -1 : hashedKey) % size;
}

const table = [];
const counter = {};
for (let i = 0; i < 100; i++) {
  let key = merge(keyStr(), keyStr().toUpperCase());
  table.push(hashKey(key, 192));
}
table.forEach(item => counter[item] = counter[item] + 1 || 1);
console.log(table);
console.log(counter);
