# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
  def isPalindrome(self, head):
    """
    :type head: ListNode
    :rtype: bool
    """
    slow = head
    fast = head
    previous = None
    
    while fast != None and fast.next != None:
      slow = slow.next
      fast = fast.next.next
    
    previous = slow
    slow = slow.next
    previous.next = None
    while slow != None:
      temp = slow.next
      slow.next = previous
      previous = slow
      slow = temp
    
    slow = previous
    fast = head
    while slow != None:
      if fast.val != slow.val:
        return False
      fast = fast.next
      slow = slow.next
    return True