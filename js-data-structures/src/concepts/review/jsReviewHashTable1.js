/**
 * @fileoverview JavaScript hash table
 * 
 */

class HashTable {

  /**
   * @param {number} size 
   */
  constructor(size) {
    if (size < 0) {
      this.keyMap = new Array(97);
    } else {
      this.keyMap = new Array(size);
    }
  }

  /**
   * @param {string} key 
   */
  _hash(key) {
    const prime = 31;
    let total = 0;
    for (let i = 0; i < key.length; i++) {
      let char = key[i];
      total = total * prime + char.charCodeAt(0);
    }
    return total % this.keyMap.length;
  }

  /**
   * implement separate chaining, 
   * no concept of order in this implementation 
   * @param {string} key 
   * @param {any} value 
   */
  set(key, value) {
    let hashedAddress = this._hash(key);
    if (!this.keyMap[hashedAddress]) {
      this.keyMap[hashedAddress] = [];
    }
    this.keyMap[hashedAddress].push([key, value]);
  }

  /**
   * @param {string} key 
   */
  get(key) {
    let hashedAddress = this._hash(key);
    if (this.keyMap[hashedAddress]) {
      for (let [k, v] of this.keyMap[hashedAddress]) {
        if (k === key) {
          return v;
        }
      }
    }
    return undefined;
  }

  keys() {
    const result = [];
    for (let entry of this.keyMap) {
      if (entry) {
        for (let [k, v] of entry) {
          result.push(k);
        }
      }
    }
    return result;
  }
}

const hashTable = new HashTable(50);
hashTable.set("eJdRdXsG8H", 1000000);
hashTable.set("cOkHqI03r5", 1000001);
hashTable.set("26sVoK7UpR", 1000002);
hashTable.set("pMyRzAzQ7P", 1000003);
hashTable.set("pEsF3L8Id3", 1000004);
hashTable.set("lGaV9LbW5R", 1000005);

console.log(hashTable.get("eJdRdXsG8H"), "--- should print 1000000");
console.log(hashTable.get("cOkHqI03r5"), "--- should print 1000001");
console.log(hashTable.get("26sVoK7UpR"), "--- should print 1000002");
console.log(hashTable.get("pMyRzAzQ7P"), "--- should print 1000003");
console.log(hashTable.get("pEsF3L8Id3"), "--- should print 1000004");
console.log(hashTable.get("lGaV9LbW5R"), "--- should print 1000005");
console.log(hashTable.get("hello"), "--- should print undefined");
console.log(hashTable.keys());
