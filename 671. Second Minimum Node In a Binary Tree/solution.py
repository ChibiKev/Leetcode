# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def findSecondMinimumValue(self, root):
    """
    :type root: TreeNode
    :rtype: int
    """
    def dfs(current, lowest):
      if current == None:
        return -1
      if lowest < current.val:
        return current.val
      left = dfs(current.left, lowest)
      right = dfs(current.right, lowest)

      if left > lowest or right > lowest:
        currentLowest = left
        if (right < currentLowest and right != -1) or left == -1:
          currentLowest = right
        return currentLowest
      return -1

    return dfs(root, root.val)