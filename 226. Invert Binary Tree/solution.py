# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def invertTree(self, root):
    """
    :type root: TreeNode
    :rtype: TreeNode
    """
    def dfs(current):
      if current == None:
        return current
      temp = current.left
      current.left = dfs(current.right)
      current.right = dfs(temp)
      return current
    
    return dfs(root)