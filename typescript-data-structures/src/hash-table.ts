/**
 * @fileoverview hash table
 */

export class HashTable<T> {

  private keyMap: [[string, T]][];

  constructor(size: number = 53) {
    this.keyMap = new Array(size);
  }

  /**
   * Look at first 100 characters of key to hash
   */
  private _hash(key: string): number {
    let total = 0;
    const PRIME_NUM = 31;
    for (let i = 0; i < Math.min(key.length, 100); i++) {
      let char = key[i];
      let charAlphabetPostion = char.charCodeAt(0) - 96;
      total = total * PRIME_NUM + charAlphabetPostion;
    }
    return total % this.keyMap.length;
  }

  /**
   * Using separate chaining for handling collision
   */
  set(key: string, val: T) {
    let hashedIndex: number = this._hash(key);
    if (this.keyMap[hashedIndex] === undefined) {
      (this.keyMap[hashedIndex] as [string, T][]) = [];
    }
    (this.keyMap[hashedIndex] as [string, T][]).push([key, val]);
  }

  get(key: string) {
    let hashedIndex: number = this._hash(key);
    let result = this.keyMap[hashedIndex];
    if (result) {
      for (let r of result) {
        if (key === r[0]) {
          return r;
        }
      }
    }
    return undefined;
  }

  keys() {
    const keyEntries = [];
    for (let entry of this.keyMap) {
      if (entry) {
        keyEntries.push(...entry.map(v => v[0]));
      }
    }
    return keyEntries;
  }

  values() {
    const valueEntries: T[] = [];
    for (let entry of this.keyMap) {
      if (entry) {
        entry.forEach(v => {
          // if value is not in the valueEntries, 
          // put it in valueEntries
          if (!valueEntries.includes(v[1])) {
            valueEntries.push(v[1]);
          }
        });
      }
    }
    return valueEntries;
  }
}
