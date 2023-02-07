/**
 * Definition for singly-linked list.
 * struct ListNode {
 *     int val;
 *     ListNode *next;
 *     ListNode() : val(0), next(nullptr) {}
 *     ListNode(int x) : val(x), next(nullptr) {}
 *     ListNode(int x, ListNode *next) : val(x), next(next) {}
 * };
 */
class Solution {
public:
  ListNode* deleteDuplicates(ListNode* head) {
    if (head == nullptr){
      return head;
    }
    ListNode* previous = head;
    ListNode* current = head->next;
    while(current != nullptr) {
      if (current->val != previous->val){
        previous->next = current;
        previous = current;
      }
      current = current->next;
    }
    previous->next = nullptr;
    return head;
  }
};