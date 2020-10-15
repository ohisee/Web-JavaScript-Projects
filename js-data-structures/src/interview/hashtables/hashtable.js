/**
 * @fileoverview JS hast table 
 */

class HashTable {
  constructor(size = 101) {
    /**
     * @typedef {[key: string, value: any]} ArrayType
     * @type {ArrayType[]}
     */
    this.data = new Array(size);
  }

  /**
   * bitwize | 0 to change hash to 32 bit number 
   * @param {string} key 
   * @returns {number}
   */
  _hashCode(key) {
    let hash = 0;
    for (let i = 0; i < key.length; i++) {
      hash = hash * 31 + key.charCodeAt(i) | 0;
    }
    return hash;
  }

  /**
   * @param {string} key 
   * @returns {number} 
   */
  _hash(key) {
    let hash = this._hashCode(key);
    return hash % this.data.length;
  }

  /**
   * @param {string} key 
   * @param {any} value 
   */
  set(key, value) {
    let idx = this._hash(key);
    if (!this.data[idx]) {
      this.data[idx] = [];
    }
    this.data[idx].push([key, value]);
  }

  /**
   * @param {string} key 
   */
  get(key) {
    let idx = this._hash(key);
    let loc = this.data[idx];
    if (loc) {
      for (let [k, value] of loc) {
        if (k === key) {
          return value;
        }
      }
    }
    return undefined;
  }
}

module.exports = {
  HashTable,
};
