# Definition for singly-linked list.
# class ListNode(object):
#     def __init__(self, x):
#         self.val = x
#         self.next = None

class Solution(object):
  def hasCycle(self, head):
    """
    :type head: ListNode
    :rtype: bool
    """
    if head is None or head.next is None:
      return False

    slowPointer = head
    fastPointer = head.next.next
    while fastPointer and fastPointer.next:
      if slowPointer == fastPointer:
        return True
      slowPointer = slowPointer.next
      fastPointer = fastPointer.next.next

    return False