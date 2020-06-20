/**
 * @fileoverview return the middle node of a linked list 
 * if the list has an even number of elements, return the node 
 * at the end of the first half of the list.
 */

const { LinkedList } = require('./linkedlist');

/**
 * Use two pointers, slower and faster to find the mid point 
 * move slower by 1, move faster by 2, and check if faster 
 * has next and next.next node available, if not then slower is 
 * at the mid point
 */
function midpoint(linkedList = new LinkedList()) {
  let slower = linkedList.getFirst();
  let faster = linkedList.getFirst();
  while (faster && faster.next && faster.next.next) {
    faster = faster.next.next;
    slower = slower.next;
  }
  return slower;
}

module.exports = {
  midpoint
};
