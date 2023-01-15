# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def isSubtree(self, root, subRoot):
    """
    :type root: TreeNode
    :type subRoot: TreeNode
    :rtype: bool
    """
    def dfs(current, subCurrent):
      if current == None:
        return False
      elif isIdenticalDFS(current, subCurrent):
        return True

      return dfs(current.left, subCurrent) or dfs(current.right, subCurrent)
    
    def isIdenticalDFS(current, subCurrent):
      if current == None or subCurrent == None:
        return current == None and subCurrent == None
      return current.val == subCurrent.val and isIdenticalDFS(current.left, subCurrent.left) and isIdenticalDFS(current.right, subCurrent.right)

    return dfs(root, subRoot)