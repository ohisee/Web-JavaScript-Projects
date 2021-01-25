/**
 * @fileoverview JS ES6 reflect 
 */

/**
 * List node class for trying JavaScript reflect  
 * @template T 
 */
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

module.exports = {
  ListNode,
  listNode,
};
