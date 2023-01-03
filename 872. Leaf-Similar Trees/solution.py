# Definition for a binary tree node.
# class TreeNode(object):
#     def __init__(self, val=0, left=None, right=None):
#         self.val = val
#         self.left = left
#         self.right = right
class Solution(object):
  def leafSimilar(self, root1, root2):
    """
    :type root1: TreeNode
    :type root2: TreeNode
    :rtype: bool
    """
    def dfs(current, array):
      if current.left == None and current.right == None:
        array.append(current.val)
      if current.left != None:
        dfs(current.left, array)
      if current.right != None:
        dfs(current.right, array)
    root1Leaf = []
    root2Leaf = []
    dfs(root1, root1Leaf)
    dfs(root2, root2Leaf)
    return root1Leaf == root2Leaf