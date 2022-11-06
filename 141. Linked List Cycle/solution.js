/**
 * Definition for singly-linked list.
 * function ListNode(val) {
 *     this.val = val;
 *     this.next = null;
 * }
 */

/**
 * @param {ListNode} head
 * @return {boolean}
 */
 var hasCycle = function(head) {
  if (head == undefined || head.next == undefined){
    return false;
  }

  let slowPointer = head;
  let fastPointer = head.next.next;
  while (fastPointer && fastPointer.next){
    if (slowPointer == fastPointer){
      return true;
    }
    slowPointer = slowPointer.next;
    fastPointer = fastPointer.next.next;
  }

  return false;
};