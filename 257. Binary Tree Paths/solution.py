# Definition for a binary tree node.
# class TreeNode(object):
#   def __init__(self, val=0, left=None, right=None):
#     self.val = val
#     self.left = left
#     self.right = right
class Solution(object):
  def binaryTreePaths(self, root):
    """
    :type root: TreeNode
    :rtype: List[str]
    """
    result = []
    def dfs(root, path):
      if not root.left and not root.right:
        path += str(root.val)
        return result.append(path)
      if root.left:
        dfs(root.left, path + str(root.val) + "->")
      if root.right:
        return dfs(root.right, path + str(root.val) + "->")
    
    dfs(root,"")
    
    return result