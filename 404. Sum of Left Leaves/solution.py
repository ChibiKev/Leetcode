# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def sumOfLeftLeaves(self, root):
    """
    :type root: TreeNode
    :rtype: int
    """
    total = 0

    def dfs(current, amount):
      if current.left != None:
        if current.left.left == None and current.left.right == None:
          amount += current.left.val
        else:
          amount = dfs(current.left, amount)
      if current.right != None:
        amount = dfs(current.right, amount)
      return amount

    return dfs(root, total)