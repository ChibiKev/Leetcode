# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def isBalanced(self, root):
    """
    :type root: TreeNode
    :rtype: bool
    """
    def dfs(current):
      if current == None:
        return 0
      leftHeight = dfs(current.left)
      rightHeight = dfs(current.right)
      difference = abs(leftHeight - rightHeight)
      if leftHeight == -1 or rightHeight == -1 or difference > 1:
        return -1
      maximum = leftHeight
      if rightHeight > maximum:
        maximum = rightHeight
      return maximum + 1
    
    return dfs(root) >= 0