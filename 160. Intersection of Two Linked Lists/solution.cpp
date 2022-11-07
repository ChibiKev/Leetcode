/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode(int x) : val(x), next(NULL) {}
 * };
 */
class Solution {
public:
  ListNode *getIntersectionNode(ListNode *headA, ListNode *headB) {
    if (headA == NULL || headB == NULL){
      return NULL;
    }

    ListNode *firstPointer = headA;
    ListNode *secondPointer = headB;
    
    while (firstPointer != secondPointer){
      if (firstPointer == NULL){
        firstPointer = headB;
      }
      else{
        firstPointer = firstPointer->next;
      }
      if (secondPointer == NULL){
        secondPointer = headA;
      }
      else{
        secondPointer = secondPointer->next;
      }
    }
    
    return firstPointer;
  }
};