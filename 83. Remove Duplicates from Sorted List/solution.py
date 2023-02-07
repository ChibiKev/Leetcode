# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, val=0, next=None):
#         self.val = val
#         self.next = next
class Solution(object):
  def deleteDuplicates(self, head):
    """
    :type head: ListNode
    :rtype: ListNode
    """
    if head == None:
      return head
    previous = head
    current = head.next
    while current != None:
      if current.val != previous.val:
        previous.next = current
        previous = current
      current = current.next
    previous.next = None
    return head