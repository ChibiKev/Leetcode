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
var reverseList = function(head) {
  let result = null;
  while (head != null){
    let nextHead = head.next;
    head.next = result;
    result = head;
    head = nextHead;
  }
  return result;
};