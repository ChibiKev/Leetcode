# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def findTilt(self, root):
    """
    :type root: TreeNode
    :rtype: int
    """
    self.totalTilt = 0
    
    def dfs(current):
      if current == None:
        return 0
      left = dfs(current.left)
      right = dfs(current.right)
      self.totalTilt += abs(left - right)
      return current.val + left + right
    
    dfs(root)
    return self.totalTilt