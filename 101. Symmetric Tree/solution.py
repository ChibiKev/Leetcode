# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def isSymmetric(self, root):
    """
    :type root: TreeNode
    :rtype: bool
    """
    if not root:
      return True
    
    def isSame(leftRoot, rightRoot):
      if leftRoot == None and rightRoot == None:
        return True
      if leftRoot == None or rightRoot == None:
        return False
      if leftRoot.val != rightRoot.val:
        return False
      return isSame(leftRoot.left, rightRoot.right) and isSame(rightRoot.left, leftRoot.right)
    
    return isSame(root.left, root.right)