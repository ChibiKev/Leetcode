# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def maxDepth(self, root):
    """
    :type root: TreeNode
    :rtype: int
    """
    def dfs(current):
      if current == None:
        return 0
      leftDepth = dfs(current.left)
      rightDepth = dfs(current.right)
      maxDepth = leftDepth
      if rightDepth > maxDepth:
        maxDepth = rightDepth
      return maxDepth + 1

    return dfs(root)