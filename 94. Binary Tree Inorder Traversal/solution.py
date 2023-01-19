# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def inorderTraversal(self, root):
    """
    :type root: TreeNode
    :rtype: List[int]
    """
    result = []
    def dfs(current, array):
      if current == None:
        return array
      array = dfs(current.left, array)
      array.append(current.val)
      array = dfs(current.right, array)
      return array

    return dfs(root, result)