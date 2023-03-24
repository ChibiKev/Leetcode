# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
  def removeElements(self, head, val):
    """
    :type head: ListNode
    :type val: int
    :rtype: ListNode
    """
    result = ListNode()
    result.next = head
    current = result
    while current.next != None:
      if current.next.val == val:
        current.next = current.next.next
      else:
        current = current.next
    return result.next