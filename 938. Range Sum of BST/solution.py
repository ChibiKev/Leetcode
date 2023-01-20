# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def rangeSumBST(self, root, low, high):
    """
    :type root: TreeNode
    :type low: int
    :type high: int
    :rtype: int
    """
    def dfs(current, low, high):
      if current == None:
        return 0
      total = 0
      if low <= current.val and current.val <= high:
        total += current.val
      leftTotal = dfs(current.left, low, high)
      rightTotal = dfs(current.right, low, high)
      return total + leftTotal + rightTotal

    return dfs(root, low, high)