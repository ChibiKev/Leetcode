/**
 * Definition for singly-linked list.
 * function ListNode(val, next) {
 *     this.val = (val===undefined ? 0 : val)
 *     this.next = (next===undefined ? null : next)
 * }
 */
/**
 * @param {ListNode} head
 * @return {boolean}
 */
var isPalindrome = function(head) {
  let slow = head;
  let fast = head;
  let previous = null;
  
  while (fast != null && fast.next != null){
    slow = slow.next;
    fast = fast.next.next;
  }
  
  previous = slow;
  slow = slow.next;
  previous.next = null;
  while (slow != null){
    let temp = slow.next;
    slow.next = previous;
    previous = slow;
    slow = temp;
  }
  
  slow = previous;
  fast = head;
  while (slow != null){
    if (fast.val != slow.val){
      return false;
    }
    fast = fast.next;
    slow = slow.next;
  }
  return true;
};