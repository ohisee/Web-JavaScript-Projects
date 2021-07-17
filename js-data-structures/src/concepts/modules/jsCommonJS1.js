/**
 * @fileoverview JavaScript module common JS
 * 
 * using require("some_module"), common JS module pattern
 * with common JS, modules are loaded synchronously, one module after another module, so 
 * mainly used in server side
 */
const crypto = require("crypto");

const hash = crypto.createHash("sha256");
hash.update("something long long text here");

console.log(hash.digest("hex"));

// export variables or functions
module.exports = {};
