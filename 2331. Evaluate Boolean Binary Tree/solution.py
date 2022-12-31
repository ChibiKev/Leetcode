# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def evaluateTree(self, root):
    """
    :type root: Optional[TreeNode]
    :rtype: bool
    """
    def dfs(current):
      if current.val == 2:
        return dfs(current.left) or dfs(current.right)
      if current.val == 3:
        return dfs(current.left) and dfs(current.right)
      return current.val
    return dfs(root)