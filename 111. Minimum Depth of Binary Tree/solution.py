# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def minDepth(self, root):
    """
    :type root: TreeNode
    :rtype: int
    """
    def dfs(current, depth):
      if current == None:
        return depth - 1
      elif current.left == None and current.right == None:
        return depth
      elif current.left != None and current.right == None:
        return dfs(current.left, depth + 1)
      elif current.left == None and current.right != None:
        return dfs(current.right, depth + 1)

      leftDepth = dfs(current.left, depth + 1)
      rightDepth = dfs(current.right, depth + 1)
      if leftDepth < rightDepth:
        return leftDepth
      return rightDepth
    
    return dfs(root, 1)