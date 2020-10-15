/**
 * @fileoverview JS hash table unit test 
 */
const { HashTable } = require("./hashtable");

describe("Hash table", () => {
  test("Hash table class should be defined", () => {
    expect(HashTable.prototype.constructor).toBeDefined();
  });

  test("Hash table class should be able to create instance", () => {
    expect(() => {
      new HashTable(50);
    }).not.toThrow();
  });

  test("Should be able to create index", () => {
    let hashTable = new HashTable();
    let idx = hashTable._hash("grapes");
    expect(hashTable._hash("grapes")).toEqual(idx);
    expect(hashTable._hash("grapes")).toEqual(idx);
    expect(hashTable._hash("grapes")).toEqual(idx);
  });

  test("Should be able to set", () => {
    let hashTable = new HashTable();
    expect(() => {
      hashTable.set("grapes", 10000);
      hashTable.set("grapes", 10000);
    }).not.toThrow();
  });

  test("Should be able to set and get", () => {
    let hashTable = new HashTable(50);
    hashTable.set("grapes", 10000);
    hashTable.set("orange", 20000);
    expect(hashTable.get("grapes")).toEqual(10000);
    expect(hashTable.get("grapes")).toEqual(10000);
    expect(hashTable.get("orange")).toEqual(20000);
  });

  test("Should be able to set and get", () => {
    let hashTable = new HashTable(50);
    expect(hashTable.get("grapes")).toEqual(undefined);
  });
});
