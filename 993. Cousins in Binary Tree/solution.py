# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def isCousins(self, root, x, y):
    """
    :type root: TreeNode
    :type x: int
    :type y: int
    :rtype: bool
    """
    self.xDepth = -1
    self.yDepth = -1
    self.xParent = None
    self.yParent = None
    
    def dfs(current, parent, x, y, depth):
      if current == None:
        return
      if current.val == x:
        self.xDepth = depth
        self.xParent = parent
      elif current.val == y:
        self.yDepth = depth
        self.yParent = parent
      dfs(current.left, current, x, y, depth + 1)
      dfs(current.right, current, x, y, depth + 1)

    dfs(root, None, x, y, 0)
    return self.xDepth == self.yDepth and self.xParent != self.yParent