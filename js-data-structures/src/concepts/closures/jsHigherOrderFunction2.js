/**
 * @fileoverview JavaScript higher order function
 */

const giveAccessTo = name => `Access Granted to ${name}`;

/**
 * @param {number} verify 
 * @param {string} name
 */
function authenticate(verify, name) {
  for (let i = 0; i < verify; i++) { }
  return giveAccessTo(name);
}

/**
 * higher order function
 * @param {{level: string, name: string}} person 
 * @param {*} fn 
 */
function letPerson(person, fn) {
  if (person.level === 'admin') {
    return fn(500000, person.name);
  } else if (person.level === 'user') {
    return fn(100000, person.name);
  }
}

console.log(letPerson({ level: "user", name: "Walker" }, authenticate));
console.log(letPerson({ level: "admin", name: "Talker Admin" }, authenticate));
