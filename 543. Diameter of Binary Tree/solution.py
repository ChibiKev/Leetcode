# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def diameterOfBinaryTree(self, root):
    """
    :type root: TreeNode
    :rtype: int
    """
    self.result = 0
    def dfs(current):
      if current == None:
        return 0
      left = dfs(current.left)
      right = dfs(current.right)
      
      if left + right > self.result:
        self.result = left + right

      maximum = left
      if right > maximum:
        maximum = right
      return maximum + 1
    
    dfs(root)
    return self.result