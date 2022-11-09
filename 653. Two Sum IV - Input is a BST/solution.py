# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def findTarget(self, root, k):
    """
    :type root: TreeNode
    :type k: int
    :rtype: bool
    """
    queue = [root]
    mySet = set()
    
    while len(queue) > 0:
      current = queue.pop()
      
      if k - current.val in mySet:
        return True
      
      mySet.add(current.val)
      
      if current.left:
        queue.append(current.left)
      
      if current.right:
        queue.append(current.right)
    
    return False