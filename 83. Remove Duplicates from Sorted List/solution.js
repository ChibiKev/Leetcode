/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {ListNode}
 */
var deleteDuplicates = function(head) {
  if (head == null){
    return head;
  }
  let previous = head;
  let current = head.next;
  while (current != null){
    if (current.val != previous.val){
      previous.next = current;
      previous = current;
    }
    current = current.next;
  }
  previous.next = null;
  return head;
};