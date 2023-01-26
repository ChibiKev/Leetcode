# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def mergeTrees(self, root1, root2):
    """
    :type root1: TreeNode
    :type root2: TreeNode
    :rtype: TreeNode
    """
    def dfs(current, current2):
      if current != None and current2 != None:
        root = TreeNode(current.val + current2.val)
        root.left = dfs(current.left, current2.left)
        root.right = dfs(current.right, current2.right)
        return root
      else:
        if current != None:
          return current
        return current2
    
    return dfs(root1, root2)