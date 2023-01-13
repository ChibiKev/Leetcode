# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def increasingBST(self, root):
    """
    :type root: TreeNode
    :rtype: TreeNode
    """
    def dfs(current, last):
      if current == None:
        return last
      result = dfs(current.left, current)
      current.left = None
      current.right = dfs(current.right, last)
      return result
    
    return dfs(root, None)