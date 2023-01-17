# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def isUnivalTree(self, root):
    """
    :type root: TreeNode
    :rtype: bool
    """
    def dfs(current):
      left = True
      if current.left != None:
        left = current.val == current.left.val and dfs(current.left)
      right = True
      if current.right != None:
        right = current.val == current.right.val and dfs(current.right)
      return left and right
    
    return dfs(root)