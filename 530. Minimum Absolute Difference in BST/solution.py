# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def getMinimumDifference(self, root):
    """
    :type root: TreeNode
    :rtype: int
    """
    self.minimumDifference = float('inf')
    self.value = None

    def dfs(current):
      if current == None:
        return
      dfs(current.left)
      if self.value != None:
        difference = abs(current.val - self.value)
        if difference < self.minimumDifference: 
          self.minimumDifference = difference
      self.value = current.val
      dfs(current.right)
    
    dfs(root)
    return self.minimumDifference