/**
 * @fileoverview JavaScript Node.js crypto 
 */

const crypto = require("crypto");

const hash = crypto.createHash("sha256");
hash.update("something long long text here");

console.log(hash.digest("hex"));
