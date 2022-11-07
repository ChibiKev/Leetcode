/**
 * Definition for singly-linked list.
 * public class ListNode {
 *     int val;
 *     ListNode next;
 *     ListNode(int x) {
 *         val = x;
 *         next = null;
 *     }
 * }
 */
public class Solution {
  public ListNode getIntersectionNode(ListNode headA, ListNode headB) {
    if (headA == null || headB == null){
      return null;
    }

    ListNode firstPointer = headA;
    ListNode secondPointer = headB;
    
    while (firstPointer != secondPointer){
      if (firstPointer == null){
        firstPointer = headB;
      }
      else{
        firstPointer = firstPointer.next;
      }
      if (secondPointer == null){
        secondPointer = headA;
      }
      else{
        secondPointer = secondPointer.next;
      }
    }
    
    return firstPointer;
  }
}