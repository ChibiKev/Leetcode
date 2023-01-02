# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def hasPathSum(self, root, targetSum):
    """
    :type root: TreeNode
    :type targetSum: int
    :rtype: bool
    """
    total = 0
    def dfs(current, amount):
      if current == None:
        return False
      amount += current.val
      if current.left == None and current.right == None and amount == targetSum:
        return True
      return dfs(current.left, amount) or dfs(current.right, amount) 
    return dfs(root, total)