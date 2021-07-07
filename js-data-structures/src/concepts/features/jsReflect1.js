/**
 * @fileoverview JS ES6 reflect 
 */

class Person {
  /**
   * @param {string} name 
   * @param {number} age 
   * @param {string} title 
   */
  constructor(name, age, title) {
    this.name = name;
    this.age = age;
    this.title = title;
  }
}

let person = Reflect.construct(Person, ["Talker Walker", 100, "Collector"]);
console.log(person);
console.log(person instanceof Person, "--- should print true");

/** @template T */
class ListNode {
  /**
   * @param {T} data 
   * @param {ListNode} previous 
   * @param {ListNode} next 
   */
  constructor(data, previous = null, next = null) {
    this.data = data;
    this.previous = previous;
    this.next = next;
  }
}

let listNode = Reflect.construct(ListNode, [2000, new ListNode(1), null]);
console.log(listNode);
console.log(listNode instanceof ListNode, "--- should print true");
